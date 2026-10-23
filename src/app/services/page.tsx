import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    number: "01",
    icon: "package",
    title: "Scientific equipment supply",
    description:
      "Equipment enquiries across neuroscience research, preclinical applications, and advanced laboratory technologies.",
  },
  {
    number: "02",
    icon: "target",
    title: "Product selection assistance",
    description:
      "Share the research application and technical requirements to discuss relevant products and configurations.",
  },
  {
    number: "03",
    icon: "globe",
    title: "Specialized product sourcing",
    description:
      "For products not displayed in the catalogue, NSH can review a sourcing enquiry and confirm feasibility.",
  },
  {
    number: "04",
    icon: "file",
    title: "Technical documentation enquiries",
    description:
      "Ask about available product specifications, brochures, datasheets, and technical information.",
  },
  {
    number: "05",
    icon: "building",
    title: "Institutional procurement support",
    description:
      "Quotation coordination for institutional requirements, subject to product availability and confirmed scope.",
  },
  {
    number: "06",
    icon: "flask",
    title: "Accessories and replacement components",
    description:
      "Enquiries for accessories, consumables, and components can be reviewed when product details are provided.",
  },
  {
    number: "07",
    icon: "globe",
    title: "Import-related sourcing assistance",
    description:
      "Import requirements and sourcing arrangements can be discussed and confirmed for the specific product and destination.",
  },
  {
    number: "08",
    icon: "globe",
    title: "International sourcing and export enquiries",
    description:
      "International enquiries are considered subject to product availability, destination, and applicable requirements.",
  },
] as const;

export const metadata = {
  title: "Services",
  description:
    "Scientific equipment supply, product selection assistance, documentation enquiries, and specialized sourcing from NSH.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-hero">
          <div className="page-width services-hero-grid">
            <div className="services-hero-copy">
              <p className="eyebrow">Services &amp; sourcing</p>
              <h1>Support for the details behind a research equipment decision.</h1>
              <p>
                NSH helps research teams explore relevant equipment, technical
                information, and quotation options—one requirement at a time.
              </p>
              <Link className="button" href="/contact">
                Discuss your requirement <Icon name="arrow" size={17} />
              </Link>
            </div>
            <figure className="services-photo">
              <EditorialImage
                src="/images/research-lab-wide.jpg"
                alt="Researcher working in a laboratory setting"
                priority
              />
              <figcaption>
                Laboratory setting shown for context; not NSH inventory.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="services-list-section section-pad">
          <div className="page-width">
            <div className="services-list-heading">
              <p className="eyebrow">How NSH can help</p>
              <h2>Practical support for specialist equipment enquiries.</h2>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <article key={service.number}>
                  <span className="service-icon">
                    <Icon name={service.icon} size={20} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
            <p className="small-note services-caveat">
              Availability, configuration, installation, training, maintenance,
              warranty, and import arrangements must be confirmed for the specific
              product and enquiry. No service is implied unless agreed.
            </p>
          </div>
        </section>

        <section className="sourcing-callout section-pad">
          <div className="page-width sourcing-callout-grid">
            <div>
              <p className="eyebrow eyebrow-light">Specialized sourcing</p>
              <h2>Can’t find the product you need?</h2>
              <p>
                Send the product description, research application, preferred
                brand, specifications, quantity, delivery location, and any
                supporting documents. NSH will review the enquiry and confirm
                whether it can be supported.
              </p>
            </div>
            <Link className="button button-light" href="/contact">
              Send a sourcing enquiry <Icon name="arrow" size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
