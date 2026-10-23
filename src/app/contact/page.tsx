import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Contact",
  description:
    "Contact NSH Scientific Suppliers & Co. about scientific equipment, product information, or a quotation.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Contact NSH</p>
            <h1>Let’s discuss your equipment requirement.</h1>
            <p>
              Share the product, application, or technical information you are
              looking for. NSH will follow up to understand the details.
            </p>
          </div>
        </section>
        <section className="contact-section section-pad">
          <div className="page-width contact-grid">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Tell us about your research or procurement needs.</h2>
              <p>
                For product selection, documentation, quotations, institutional
                procurement, and specialized sourcing enquiries, contact us
                directly by phone, WhatsApp, or email.
              </p>
              <a className="button" href="mailto:nshscientific@gmail.com?subject=Scientific%20equipment%20enquiry">
                Email your enquiry <Icon name="arrow" size={17} />
              </a>
            </div>
            <address className="contact-details">
              <div>
                <span className="detail-label"><Icon name="building" size={15} /> Business</span>
                <strong>NSH Scientific Suppliers &amp; Co.</strong>
              </div>
              <div>
                <span className="detail-label"><Icon name="mapPin" size={15} /> Address</span>
                <span>C1, KH40, Satbari, Chhattarpur, New Delhi, India</span>
                <a
                  href="https://maps.google.com/?q=C1%2C+KH40%2C+Satbari%2C+Chhattarpur%2C+New+Delhi%2C+India"
                  rel="noreferrer"
                  target="_blank"
                >
                  View location <Icon name="arrow" size={14} />
                </a>
              </div>
              <div>
                <span className="detail-label"><Icon name="phone" size={15} /> Telephone &amp; WhatsApp</span>
                <a href="tel:+919953458966">+91 99534 58966</a>
                <a href="https://wa.me/919953458966">Message on WhatsApp</a>
              </div>
              <div>
                <span className="detail-label"><Icon name="mail" size={15} /> Email</span>
                <a href="mailto:nshscientific@gmail.com">nshscientific@gmail.com</a>
              </div>
              <p className="small-note">
                Serving research and institutional customers across India.
              </p>
            </address>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
