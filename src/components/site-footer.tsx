import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-intro">
          <div className="footer-logo-surface">
            <Image
              src="/logo.jpeg"
              width={182}
              height={76}
              alt="NSH Scientific Suppliers & Co."
            />
          </div>
          <p>
            Specialist equipment sourcing for neuroscience, preclinical research, and
            laboratory teams.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/catalogue">Product catalogue</Link>
          <Link href="/services">Services &amp; sourcing</Link>
          <Link href="/brands">Associated brands</Link>
          <Link href="/about">About NSH</Link>
          <Link href="/resources">Resources &amp; FAQs</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href="tel:+919953458966">+91 99534 58966</a>
          <a href="mailto:nshscientific@gmail.com">nshscientific@gmail.com</a>
          <span>C1, KH40, Satbari, Chhattarpur, New Delhi, India</span>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© NSH Scientific Suppliers &amp; Co.</span>
        <span>Product information is shared on request and subject to confirmation.</span>
        <span>
          <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
