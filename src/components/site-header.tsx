import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="page-width utility-inner">
          <span>Scientific equipment for research teams across India</span>
          <div className="utility-links">
            <a href="tel:+919953458966">+91 99534 58966</a>
            <a href="mailto:nshscientific@gmail.com">Email NSH</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="page-width header-inner">
          <Link className="logo-link" href="/" aria-label="NSH Scientific Suppliers & Co. home">
            <Image
              className="site-logo"
              src="/logo.jpeg"
              width={182}
              height={76}
              alt="NSH Scientific Suppliers & Co."
              priority
            />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/catalogue">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="button button-small" href="/contact">
            Request a quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}
