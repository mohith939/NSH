import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How NSH Scientific Suppliers & Co. handles information shared through enquiries and quotation requests.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p>How we handle information you share when you contact NSH.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-width legal-content">
            <p className="legal-updated">Last updated: October 2026</p>

            <h2>1. Who we are</h2>
            <p>
              NSH Scientific Suppliers &amp; Co. (&ldquo;NSH&rdquo;,
              &ldquo;we&rdquo;) is a scientific equipment supplier based at C1,
              KH40, Satbari, Chhattarpur, New Delhi, India. This website is used
              to share information about our products and services and to receive
              enquiries and quotation requests.
            </p>

            <h2>2. Information we collect</h2>
            <ul>
              <li>
                Details you provide in an enquiry or quotation request, such as
                your name, institution or organisation, email address, phone
                number, the products you are interested in, and your message.
              </li>
              <li>
                Files you choose to attach, such as requirement lists or
                specification documents.
              </li>
              <li>
                Messages you send to us by email, phone, or WhatsApp.
              </li>
              <li>
                Basic technical data, such as browser type and pages visited, if
                analytics are enabled on the website.
              </li>
            </ul>

            <h2>3. How we use it</h2>
            <ul>
              <li>To respond to your enquiry and prepare quotations.</li>
              <li>
                To coordinate product information, availability, and delivery
                with suppliers and logistics partners where needed for your
                request.
              </li>
              <li>To maintain records of our business communication.</li>
              <li>To improve this website and our services.</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>4. Sharing</h2>
            <p>
              We may share the details needed to fulfil your request with
              manufacturers, suppliers, and service providers involved in
              quoting, sourcing, or delivering the products you ask about. We may
              also disclose information where required by law.
            </p>

            <h2>5. Retention and security</h2>
            <p>
              We keep enquiry records for as long as needed for business,
              accounting, and legal purposes. We take reasonable steps to protect
              the information you share, but no method of transmission over the
              internet is completely secure.
            </p>

            <h2>6. Third-party services</h2>
            <p>
              Links to WhatsApp, email, or other services open those third
              parties&rsquo; own platforms, which are governed by their own
              privacy policies.
            </p>

            <h2>7. Your choices</h2>
            <p>
              You may ask us to access, correct, or delete the personal
              information you have shared with us by contacting us at the details
              below.
            </p>

            <h2>8. Changes</h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page.
            </p>

            <h2>9. Contact</h2>
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
