import Link from "next/link";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const brands = [
  { name: "RWD", mark: "RWD", icon: "microscope" },
  { name: "ThinkerTech", mark: "ThinkerTech", icon: "activity" },
  { name: "TDT", mark: "Tucker-Davis Technologies", icon: "brain" },
  { name: "INPER", mark: "INPER", icon: "flask" },
] as const;

export const metadata = {
  title: "Associated brands",
  description:
    "Brand names identified in NSH business information. Confirm product availability and arrangements with NSH.",
};

export default function BrandsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Associated brands</p>
            <h1>Scientific technologies from specialist manufacturers.</h1>
            <p>
              These brand names appear in the supplied NSH business information.
              Contact NSH to confirm product details, availability, and sourcing
              arrangements.
            </p>
          </div>
        </section>
        <section className="brands-directory section-pad">
          <div className="page-width">
            <div className="brands-directory-grid">
              {brands.map((brand, index) => (
                <article className="brand-entry" key={brand.name}>
                  <span className="brand-entry-index">
                    0{index + 1} / ASSOCIATED BRAND
                  </span>
                  <span className="brand-entry-icon">
                    <Icon name={brand.icon} size={21} />
                  </span>
                  <p className="brand-wordmark">{brand.name}</p>
                  {brand.name === "TDT" ? (
                    <p className="brand-expansion">{brand.mark}</p>
                  ) : null}
                  <p className="brand-entry-note">
                    Ask NSH about relevant product information and sourcing
                    enquiries.
                  </p>
                  <Link
                    className="text-link"
                    href="/contact"
                  >
                    Enquire about {brand.name} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="brand-disclaimer">
              Brand names are shown for identification. Their inclusion does not
              imply exclusive distribution, authorized dealership, official
              representation, or manufacturer endorsement. Brand logos are not
              shown because approved logo files were not supplied.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
