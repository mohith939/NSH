import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const categories = [
  "Neuroscience research equipment",
  "Preclinical research equipment",
  "Stereotaxic instruments",
  "Microinjection systems",
  "Animal anesthesia systems",
  "Brain matrices and surgical instruments",
  "Electrophysiology and neural signal acquisition",
  "Fiber photometry",
  "Behavioral research equipment",
  "Laboratory instruments",
  "Accessories and consumables",
  "Specialized scientific sourcing",
];

const categoryIcons = [
  "brain",
  "activity",
  "target",
  "package",
  "flask",
  "microscope",
  "activity",
  "flask",
  "target",
  "microscope",
  "package",
  "globe",
] as const;

export const metadata = {
  title: "Catalogue",
  description:
    "Explore scientific equipment categories supported by NSH Scientific Suppliers & Co.",
};

export default function CataloguePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Product catalogue</p>
            <h1>Find equipment for your research workflow.</h1>
            <p>
              Browse the areas NSH supports. Product listings are being assembled
              from verified manufacturer and business information.
            </p>
          </div>
        </section>
        <section className="catalogue-visual">
          <div className="page-width catalogue-visual-grid">
            <figure className="catalogue-visual-photo">
              <EditorialImage
                src="/images/research-lab-wide.jpg"
                alt="Researcher working with instruments in a laboratory"
                priority
              />
              <figcaption>
                Illustrative research setting · not an NSH product image
              </figcaption>
            </figure>
            <div>
              <p className="eyebrow">Browse by application</p>
              <h2>Start with the research question.</h2>
              <p>
                NSH supports equipment enquiries across neuroscience,
                preclinical research, electrophysiology, behavioral research, and
                laboratory workflows.
              </p>
              <Link className="button" href="/contact">
                Ask about equipment <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </section>
        <section className="catalogue-section section-pad">
          <div className="page-width catalogue-grid">
            <div>
              <p className="eyebrow">Areas of focus</p>
              <h2>Research categories</h2>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={category}>
                    <span className="category-icon">
                      <Icon name={categoryIcons[index]} size={18} />
                    </span>
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="catalogue-note">
              <span className="note-marker">Catalogue status</span>
              <h2>Verified product information is being prepared.</h2>
              <p>
                We are not showing unverified product models, images, specifications,
                stock status, or prices. Share your application or equipment
                requirement and NSH can help coordinate product information.
              </p>
              <Link className="button" href="/contact">
                Ask about equipment <Icon name="arrow" size={17} />
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
