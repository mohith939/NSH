import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  { text: "Neuroscience and preclinical research equipment", icon: "brain" },
  { text: "Specialized scientific product enquiries", icon: "microscope" },
  { text: "Technical specifications and documentation enquiries", icon: "file" },
  { text: "Institutional quotation and procurement coordination", icon: "building" },
  { text: "Accessories, consumables, and component enquiries", icon: "package" },
  {
    text: "Import-related sourcing and international enquiries, subject to requirements",
    icon: "globe",
  },
] as const;

export const metadata = {
  title: "About",
  description:
    "Learn about NSH Scientific Suppliers & Co. and its scientific equipment sourcing focus.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">About NSH</p>
            <h1>Scientific sourcing, approached with care.</h1>
            <p>
              NSH Scientific Suppliers &amp; Co. supplies and sources equipment
              for neuroscience, preclinical research, and laboratory applications.
            </p>
          </div>
        </section>
        <section className="about-content section-pad">
          <div className="page-width about-grid">
            <p className="eyebrow">What we support</p>
            <div>
              <h2>Helping research teams navigate specialized equipment needs.</h2>
              <p>
                NSH works with universities, research institutions, medical
                colleges, pharmaceutical and biotechnology organizations, and
                scientific laboratories. Support can include product selection
                assistance, technical specification and documentation enquiries,
                quotation coordination, and specialized sourcing.
              </p>
              <p>
                Product availability, configurations, service arrangements, and
                import requirements are confirmed for each enquiry. Contact NSH to
                discuss the needs of your institution.
              </p>
              <Link className="text-link" href="/contact">
                Discuss your requirement <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="about-approach section-pad">
          <div className="page-width about-approach-grid">
            <figure className="about-approach-photo">
              <EditorialImage
                src="/images/research-lab-wide.jpg"
                alt="Illustrative laboratory research environment"
                priority
              />
              <figcaption>
                Illustrative research setting · not an NSH customer or product
              </figcaption>
            </figure>
            <div className="about-approach-copy">
              <p className="eyebrow">Our approach</p>
              <h2>Clear information. Thoughtful equipment enquiries.</h2>
              <p>
                NSH focuses on understanding the scientific application and
                procurement context before coordinating product information.
                Availability, configurations, and support arrangements are
                confirmed for each enquiry.
              </p>
              <div className="mission-vision">
                <div>
                  <span>Mission</span>
                  <p>
                    Help research teams identify and enquire about equipment
                    relevant to their work.
                  </p>
                </div>
                <div>
                  <span>Vision</span>
                  <p>
                    Make specialist scientific sourcing clearer through accurate
                    information and responsive communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-capabilities section-pad">
          <div className="page-width about-capabilities-grid">
            <div>
              <p className="eyebrow">Areas of support</p>
              <h2>Equipment and sourcing for scientific work.</h2>
            </div>
            <div>
              <ul>
                {capabilities.map((capability) => (
                  <li key={capability.text}>
                    <Icon name={capability.icon} size={18} />
                    <span>{capability.text}</span>
                  </li>
                ))}
              </ul>
              <p className="small-note">
                Service, installation, training, warranty, and maintenance
                arrangements are not assumed; confirm details with NSH for the
                specific product.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
