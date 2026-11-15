import Link from "next/link";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { rwdCategories, rwdProducts } from "@/data/rwd-catalogue";
import { CatalogueClient } from "./catalogue-client";

export const metadata = {
  title: "Equipment Catalogue | RWD Life Science & Preclinical Solutions",
  description:
    "Explore verified laboratory and preclinical research equipment from RWD Life Science, including stereotaxic frames, animal anesthesia, fiber photometry, in vivo imaging, cell counters, cryostats, and microtomes.",
};

export default function CataloguePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Hero */}
        <section className="page-hero catalogue-hero">
          <div className="page-width">
            <h1 className="eyebrow">Product catalogue · RWD Life Science</h1>
            <p>
              Browse verified equipment categories and models from RWD Life Science,
              supported and coordinated across India by NSH Scientific Suppliers &amp; Co.
            </p>
          </div>
        </section>

        {/* Interactive Catalogue Browser */}
        <section className="catalogue-section section-pad">
          <div className="page-width">
            <CatalogueClient categories={rwdCategories} products={rwdProducts} />
          </div>
        </section>

        {/* Procurement & Support Info Banner */}
        <section className="catalogue-support-section">
          <div className="page-width">
            <div className="catalogue-support-grid">
              <div className="support-card">
                <span className="support-icon">
                  <Icon name="package" size={24} />
                </span>
                <h3>Direct Quote &amp; Proforma</h3>
                <p>
                  Receive official itemized proforma invoices with complete model
                  specifications, accessories, and warranty terms tailored to institutional grants.
                </p>
                <Link className="text-link" href="/contact">
                  Request custom quotation →
                </Link>
              </div>

              <div className="support-card">
                <span className="support-icon">
                  <Icon name="activity" size={24} />
                </span>
                <h3>On-Site Installation &amp; Training</h3>
                <p>
                  Technical assistance with instrument setup, coordinate calibration,
                  anesthesia safety testing, and software walkthrough for research scholars.
                </p>
                <Link className="text-link" href="/services">
                  Explore technical services →
                </Link>
              </div>

              <div className="support-card">
                <span className="support-icon">
                  <Icon name="globe" size={24} />
                </span>
                <h3>Comprehensive Consumables</h3>
                <p>
                  Continuous supply of disposable microtome blades, anesthesia masks,
                  filter canisters, stereotaxic ear bars, and optical fiber cannulas.
                </p>
                <Link className="text-link" href="/contact">
                  Enquire consumables →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
