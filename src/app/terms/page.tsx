import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the NSH Scientific Suppliers & Co. website and requesting quotations.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Legal</p>
            <h1>Terms of Use</h1>
            <p>Terms for using this website and requesting quotations.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-width legal-content">
            <p className="legal-updated">Last updated: October 2026</p>

            <h2>1. About this website</h2>
            <p>
              This website is operated by NSH Scientific Suppliers &amp; Co.
              (&ldquo;NSH&rdquo;). By using it, you agree to these terms.
            </p>

            <h2>2. Quotation-based supply</h2>
            <p>
              This website does not offer online purchasing, a shopping cart,
              checkout, or online payment. Products are supplied against a
              written quotation. Submitting an enquiry or quotation request is
              not an order and does not create a binding contract.
            </p>

            <h2>3. Quotations</h2>
            <ul>
              <li>
                Prices, availability, lead times, and configurations are
                confirmed in the quotation and may change until an order is
                accepted in writing.
              </li>
              <li>
                A quotation is valid for the period stated in it. Taxes, duties,
                freight, and installation or training charges apply only as
                stated in the quotation.
              </li>
              <li>
                Orders are confirmed by NSH in writing, and payment and delivery
                terms are agreed at that time.
              </li>
            </ul>

            <h2>4. Product information</h2>
            <p>
              Product descriptions, categories, and images on this site are for
              general information. Specifications, models, and accessories are
              confirmed per enquiry. Sample listings, where shown, are
              placeholders only. Mentions of brands refer to associated brands
              and do not imply any authorisation or endorsement unless confirmed
              in writing.
            </p>

            <h2>5. Imports and international sourcing</h2>
            <p>
              Import-related sourcing is subject to product requirements, supplier
              arrangements, applicable regulations, and customs processes.
              Timelines are estimates until confirmed.
            </p>

            <h2>6. Service and support</h2>
            <p>
              Installation, training, warranty, and maintenance arrangements are
              not assumed and are confirmed for each product and order.
            </p>

            <h2>7. Acceptable use</h2>
            <p>
              You agree not to misuse this website, attempt unauthorised access,
              or submit false or misleading information.
            </p>

            <h2>8. Intellectual property</h2>
            <p>
              The content, logo, and design of this website belong to NSH or its
              licensors and may not be copied or reused without permission.
              Third-party brand names and trademarks belong to their respective
              owners.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the extent permitted by law, NSH is not liable for losses
              arising from the use of this website or reliance on its general
              information. Liability for supplied goods is governed by the
              confirmed order and quotation.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Courts at New Delhi
              have jurisdiction, subject to any terms agreed in a confirmed
              order.
            </p>

            <h2>11. Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:nshscientific@gmail.com">nshscientific@gmail.com</a>
              <br />
              Phone / WhatsApp: <a href="tel:+919953458966">+91 99534 58966</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
