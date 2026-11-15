import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PRODUCTS_FILE = path.resolve(__dirname, "../src/data/rwd-products.json");

// Category taxonomy and keyword matching rules
const CATEGORY_RULES = [
  {
    id: "cell-biology",
    name: "Cell & Molecular Biology",
    keywords: [
      "cell", "centrifuge", "microcentrifuge", "incubator", "cycler",
      "pcr", "dissociat", "homogenate", "slide", "sorting", "molecule"
    ],
    terms: ["cell-molecule", "cell-sorting", "co2-incubators", "microcentrifuge", "gradient-thermal-cycler", "single-cell-suspension-dissociator", "dissociation-kit", "counting-slide"]
  },
  {
    id: "histology",
    name: "Histology Equipment & Pathology",
    keywords: ["cryostat", "microtome", "pathology", "paraffin", "embedding", "blade"],
    terms: ["cryostat", "pathology", "microtomes-cryostats", "microtomes-cryostats-pathology", "microtome-blades", "frozen-section-embedding-compound"]
  },
  {
    id: "stereotaxic",
    name: "Stereotaxic Instruments & Positioning",
    keywords: ["stereotaxic", "stereotactic", "brain matrix", "heart matrix", "impactor", "ear bar", "holder", "cannula", "spinal"],
    terms: ["stereotactic-instruments", "stereotaxic-instrument-solutions", "brain-heart-matrices", "brain-matrix", "heart-matrix", "ear-bar", "holder", "cannula"]
  },
  {
    id: "anesthesia",
    name: "Inhalation Anesthesia Systems",
    keywords: ["anesthesia", "isoflurane", "sevoflurane", "vaporizer", "ventilator", "evacuation", "co2 monitor", "canister", "mask"],
    terms: ["inhalation-anesthesia-solutions", "rodent-cone-mask", "gas"]
  },
  {
    id: "neural-circuit",
    name: "Neural Circuit Research & Fiber Photometry",
    keywords: ["photometry", "optogenetics", "fiber", "laser", "micropipette", "micromanipulator", "commutator", "flip"],
    terms: ["fiber-photometry", "neural-circuit-research", "optogenetics-system", "micropipette-puller", "micromanipulator", "light-sources"]
  },
  {
    id: "in-vivo-imaging",
    name: "In Vivo Imaging & Optical Systems",
    keywords: ["imaging", "speckle", "ultrasound", "microscope", "perfusion", "blood flow"],
    terms: ["imaging-system", "laser-speckle-imaging-system", "small-animal-in-vivo-imaging-system", "small-animal-ultrasound-imaging-system", "microscopes"]
  },
  {
    id: "veterinary",
    name: "Veterinary & Preclinical Medicine",
    keywords: ["veterinary", "dental", "pet", "icu", "x-ray", "sensor", "urine", "sediment", "animal clinic"],
    terms: ["dental-solution", "dental-surgical-instruments", "dental-x-ray", "cmos-image-sensor", "surgical-instruments-veterinary", "laser-therapy"]
  },
  {
    id: "reagents-consumables",
    name: "Reagents & Consumables",
    keywords: ["reagent", "bead", "column", "larsep", "kit", "buffer"],
    terms: ["reagent-consumables", "column", "cell-separation-kit-column-free", "cell-separation-products"]
  },
  {
    id: "surgical-instruments",
    name: "Surgical Instruments & Accessories",
    keywords: [
      "forceps", "scissors", "clamp", "rongeur", "needle", "suture",
      "scalpel", "retractor", "microdrill", "drill", "thermostar", "hook", "tool"
    ],
    terms: [
      "surgical-instruments", "micro-forceps", "dressing-forceps", "dissecting-forceps",
      "spring-scissors", "fine-scissors", "operating-scissors", "corneal-cataract-scissors",
      "corneal-forceps", "teeth-tissue-forceps", "needle-holders", "retractors", "scalpel",
      "suture", "microdrills", "thermometers", "hooks"
    ]
  }
];

function decodeHtml(html = "") {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractModel(title = "", slug = "") {
  const modelMatch = title.match(/\b([A-Z0-9]{2,10}(?:-[A-Z0-9]+)?(?:\/[A-Z0-9-]+)?)\b/);
  if (modelMatch && !["THE", "FOR", "AND", "WITH", "PRO", "PLUS", "KIT", "SET", "BOX"].includes(modelMatch[1])) {
    return modelMatch[1];
  }
  const parts = slug.split("-").filter(p => /\d/.test(p));
  if (parts.length > 0) {
    return parts.join("-").toUpperCase();
  }
  return title.split(" ")[0] || "RWD";
}

function assignCategory(title, slug, terms) {
  const termSlugs = terms.map(t => (t.slug || "").toLowerCase());
  const text = `${title} ${slug} ${termSlugs.join(" ")}`.toLowerCase();

  for (const rule of CATEGORY_RULES) {
    for (const term of rule.terms) {
      if (termSlugs.includes(term.toLowerCase())) {
        return { id: rule.id, name: rule.name };
      }
    }
  }

  for (const rule of CATEGORY_RULES) {
    for (const kw of rule.keywords) {
      if (text.includes(kw)) {
        return { id: rule.id, name: rule.name };
      }
    }
  }

  return {
    id: "surgical-instruments",
    name: "Surgical Instruments & Accessories"
  };
}

async function fetchJson(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "NSH-Catalogue-Sync/1.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    // Fallback to curl
    const out = execSync(`curl -s -A "NSH-Catalogue-Sync/1.0" "${url}"`, {
      maxBuffer: 50 * 1024 * 1024
    });
    return JSON.parse(out.toString());
  }
}

async function getTotalPages() {
  try {
    const res = await fetch("https://www.rwdstco.com/wp-json/wp/v2/portfolio?per_page=100&page=1");
    const totalPages = res.headers.get("x-wp-totalpages");
    if (totalPages) return parseInt(totalPages, 10);
  } catch {
    // fallback via curl header
    try {
      const headerOut = execSync('curl -sI "https://www.rwdstco.com/wp-json/wp/v2/portfolio?per_page=100&page=1"');
      const match = headerOut.toString().match(/x-wp-totalpages:\s*(\d+)/i);
      if (match) return parseInt(match[1], 10);
    } catch {}
  }
  return 4; // default known pages
}

async function syncCatalogue() {
  console.log("==> Starting RWD Catalogue Auto-Sync...");

  let existingProducts = [];
  if (fs.existsSync(PRODUCTS_FILE)) {
    try {
      existingProducts = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf-8"));
    } catch (e) {
      console.warn("Could not parse existing catalogue, initializing fresh:", e.message);
    }
  }

  const existingMap = new Map();
  for (const p of existingProducts) {
    existingMap.set(p.id, p);
    if (p.link) existingMap.set(p.link, p);
  }

  const totalPages = await getTotalPages();
  console.log(`Found ${totalPages} pages on RWD Life Science API.`);

  const fetchedItems = [];
  for (let page = 1; page <= totalPages; page++) {
    console.log(`Fetching page ${page} of ${totalPages}...`);
    const pageUrl = `https://www.rwdstco.com/wp-json/wp/v2/portfolio?per_page=100&page=${page}&_embed=wp:featuredmedia,wp:term`;
    try {
      const items = await fetchJson(pageUrl);
      if (Array.isArray(items) && items.length > 0) {
        fetchedItems.push(...items);
      }
    } catch (e) {
      console.error(`Failed to fetch page ${page}:`, e.message);
    }
  }

  if (fetchedItems.length === 0) {
    console.error("No products could be fetched. Aborting sync without modifying local database.");
    process.exit(1);
  }

  console.log(`Successfully fetched ${fetchedItems.length} products from RWD.`);

  let newCount = 0;
  const processedProducts = [];

  for (const item of fetchedItems) {
    const id = `rwd-${item.slug}`;
    const existing = existingMap.get(id) || existingMap.get(item.link);

    const title = decodeHtml(item.title?.rendered || item.slug);
    const model = existing?.model || extractModel(title, item.slug);

    const terms = (item._embedded?.["wp:term"] || []).flat();
    const category = assignCategory(title, item.slug, terms);

    const featuredMedia = item._embedded?.["wp:featuredmedia"]?.[0];
    const imageSrc = featuredMedia?.source_url || existing?.image?.src || "/placeholder-product.png";

    const cleanDesc = decodeHtml(item.excerpt?.rendered || item.content?.rendered || "").slice(0, 320);
    const tagline = cleanDesc.length > 90 ? `${cleanDesc.slice(0, 87)}...` : cleanDesc;
    const description = cleanDesc.length > 240 ? `${cleanDesc.slice(0, 237)}...` : cleanDesc;

    const highlights = existing?.highlights?.length
      ? existing.highlights
      : [
          `Authentic RWD Life Science ${category.name}`,
          "Engineered for rigorous research standards",
          "Full procurement and support coordination from NSH"
        ];

    const isNew = !existing;
    if (isNew) {
      newCount++;
      console.log(`+ [NEW PRODUCT] ${title} (${model}) [${category.name}]`);
    }

    const productRecord = {
      id,
      name: title,
      model,
      categoryId: existing?.categoryId || category.id,
      categoryName: existing?.categoryName || category.name,
      manufacturer: "RWD Life Science",
      tagline: existing?.tagline || tagline,
      description: existing?.description || description,
      highlights,
      specifications: existing?.specifications || {
        Model: model,
        Category: category.name,
        Manufacturer: "RWD Life Science"
      },
      image: {
        src: imageSrc,
        alt: `${title} (${model}) - RWD Life Science`
      },
      featured: existing?.featured ?? false,
      bestSeller: existing?.bestSeller ?? false,
      isNew: existing?.isNew ?? isNew,
      link: item.link
    };

    processedProducts.push(productRecord);
  }

  // Check if content changed
  const existingSerialized = JSON.stringify(existingProducts);
  const newSerialized = JSON.stringify(processedProducts, null, 2);

  if (existingSerialized === newSerialized) {
    console.log("==> [RWD Sync] Catalogue is already 100% up to date. No changes detected.");
    process.exit(0);
  }

  fs.writeFileSync(PRODUCTS_FILE, `${newSerialized}\n`, "utf-8");
  console.log(`==> [RWD Sync] Completed! Saved ${processedProducts.length} products (${newCount} new products).`);
}

syncCatalogue().catch(err => {
  console.error("Catalogue sync error:", err);
  process.exit(1);
});
