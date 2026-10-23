import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { featuredProducts } from "@/data/featured-products";
import { IndiaMap } from "@/components/india-map";

const primaryServices = [
  {
    title: "Scientific & Laboratory Equipment",
    text: "Advanced instruments for life sciences, biomedical research, and laboratory applications.",
  },
  {
    title: "Neuroscience & Preclinical Research",
    text: "Stereotaxic systems, microinjection, fiber photometry, electrophysiology, and related technologies.",
  },
  {
    title: "Specialized Product Sourcing",
    text: "Sourcing solutions for specialized instruments, accessories, and application-specific requirements.",
  },
  {
    title: "Import & Export Services",
    text: "Support for international procurement and cross-border supply of research-related products.",
  },
  {
    title: "Product Selection & Procurement",
    text: "Model selection, quotations, technical documentation, and procurement coordination.",
  },
  {
    title: "After-Sales Coordination",
    text: "Delivery, installation, and manufacturer support coordination wherever available.",
  },
];

const featuredCategories = [
  {
    name: "Stereotaxic instruments",
    text: "Positioning instruments for precise neuroscience procedures.",
    icon: "target",
  },
  {
    name: "Microinjection systems",
    text: "Systems for controlled delivery in preclinical research.",
    icon: "package",
  },
  {
    name: "Animal anesthesia systems",
    text: "Anesthesia equipment for research and surgical workflows.",
    icon: "activity",
  },
  {
    name: "Electrophysiology & neural signal acquisition",
    text: "Recording and acquisition technologies for neural signals.",
    icon: "brain",
  },
  {
    name: "Fiber photometry",
    text: "Optical systems for in vivo neural activity research.",
    icon: "flask",
  },
  {
    name: "Behavioral research equipment",
    text: "Equipment supporting behavioral study workflows.",
    icon: "microscope",
  },
] as const;

const researchAreas = [
  { label: "Stereotaxic instruments", icon: "target" },
  { label: "Microinjection systems", icon: "package" },
  { label: "Animal anesthesia systems", icon: "activity" },
  { label: "Brain matrices & surgical instruments", icon: "brain" },
  { label: "Electrophysiology & neural signal acquisition", icon: "activity" },
  { label: "Fiber photometry", icon: "flask" },
  { label: "Behavioral research equipment", icon: "microscope" },
  { label: "Laboratory instruments", icon: "microscope" },
] as const;

const audiences = [
  { label: "Universities, IITs & IISERs", icon: "university" },
  { label: "CSIR & ICAR research organisations", icon: "building" },
  { label: "Neuroscience and biomedical laboratories", icon: "brain" },
  { label: "Medical colleges", icon: "university" },
  { label: "Hospitals and clinical research teams", icon: "building" },
  { label: "Pharmaceutical & biotechnology organizations", icon: "flask" },
  { label: "Government research institutions", icon: "building" },
  { label: "Private scientific facilities", icon: "microscope" },
] as const;

const faqs = [
  {
    question: "What types of scientific equipment does NSH supply?",
    answer:
      "NSH focuses on neuroscience research, preclinical research, advanced laboratory equipment, and specialized scientific technologies. Contact us with your application or equipment requirement to discuss relevant options.",
  },
  {
    question: "Can I request a quotation for more than one product?",
    answer:
      "Yes. Share the products or requirements together with any relevant specifications and institutional procurement details. NSH will follow up to clarify the enquiry.",
  },
  {
    question: "Can NSH help with a product that is not listed?",
    answer:
      "You can submit a specialized sourcing enquiry for a product not shown in the catalogue. Sourcing feasibility, availability, and requirements are confirmed individually.",
  },
  {
    question: "Can I request product documentation?",
    answer:
      "Contact NSH with the manufacturer, model, or product details you have. Documentation enquiries are handled subject to the relevant product information being available.",
  },
  {
    question: "Does NSH support institutional and tender enquiries?",
    answer:
      "Institutional procurement enquiries are welcome. Share the required product information, specifications, quantity, and procurement context so NSH can review the request.",
  },
  {
    question: "Does NSH serve customers across India?",
    answer:
      "NSH welcomes enquiries from research and institutional customers across India. Delivery and procurement requirements are confirmed for each enquiry.",
  },
  {
    question: "How do I enquire about accessories or replacement components?",
    answer:
      "Include the product name, manufacturer, model, and any available part number or supporting documentation. Compatibility and availability must be confirmed.",
  },
  {
    question: "Can I ask about international sourcing or exports?",
    answer:
      "International sourcing and export enquiries can be discussed subject to product availability, destination, and applicable requirements.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero hero-editorial">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                Scientific equipment · Specialist sourcing
              </p>
              <h1>
                Advanced scientific
                <br className="desktop-break" /> equipment for research
                <br className="desktop-break" /> &amp; discovery.
              </h1>
              <p className="hero-summary">
                Specialist tools and sourcing support for neuroscience,
                preclinical research, and advanced laboratory work across India.
              </p>
              <div className="hero-actions">
                <Link className="button button-light" href="/catalogue">
                  Explore equipment <Icon name="arrow" size={17} />
                </Link>
                <Link className="hero-quiet-link" href="/contact">
                  Request a quote <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div className="hero-contact">
                <span className="hero-contact-prompt"><Icon name="phone" size={14} /> Speak with NSH</span>
                <a href="tel:+919953458966">+91 99534 58966</a>
                <span className="hero-contact-divider" aria-hidden="true" />
                <a className="hero-contact-message" href="https://wa.me/919953458966">WhatsApp</a>
              </div>
            </div>
            <figure className="hero-image">
              <EditorialImage
                src="/images/research-lab-wide.jpg"
                alt="Researcher working among laboratory instruments in an illustrative research setting"
                priority
              />
              <figcaption>
                <span>Research environment</span>
                <span>Illustrative image · not an NSH product</span>
              </figcaption>
            </figure>
          </div>
          <div className="hero-base">
            <div className="page-width hero-base-inner">
              <span>For universities, research laboratories &amp; institutions</span>
              <span>Based in New Delhi · Serving India</span>
            </div>
          </div>
        </section>

        <section className="quotation-section section-pad" aria-labelledby="quotation-heading">
          <div className="page-width">
            <div className="quotation-intro">
              <div>
                <p className="eyebrow">A quote-led way to buy</p>
                <h2 id="quotation-heading">
                  Explore equipment. Request a considered quotation.
                </h2>
              </div>
              <div className="quotation-copy">
                <p>
                  Browse research categories, tell us the product, quantity, and
                  specifications you need, then discuss product details,
                  availability, and pricing with NSH before proceeding.
                </p>
                <div className="quotation-actions">
                  <Link className="button" href="/catalogue">
                    Browse catalogue <Icon name="arrow" size={17} />
                  </Link>
                  <Link className="text-link" href="/contact">
                    Request a quote <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <ol className="quotation-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Explore by research need</h3>
                  <p>Find the equipment categories relevant to your work.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Share your requirements</h3>
                  <p>Include specifications, quantity, and delivery location.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Discuss your quotation</h3>
                  <p>Confirm product and procurement details directly with NSH.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="intro-section section-pad">
          <div className="page-width intro-grid">
            <div className="intro-label">
              <span className="section-number">01</span>
              <p className="eyebrow">A focused sourcing partner</p>
            </div>
            <div className="intro-copy">
              <h2>
                Good research depends on the right tools—and clear information
                about them.
              </h2>
              <div className="intro-bottom">
                <p className="body-large">
                  NSH Scientific Suppliers &amp; Co. supports scientific teams
                  with equipment supply, product selection assistance,
                  documentation enquiries, and quotation coordination.
                </p>
                <Link className="text-link" href="/about">
                  Get to know NSH <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="research-section section-pad">
          <div className="page-width">
            <div className="research-heading">
              <div className="section-label">
                <span className="section-number">02</span>
                <p className="eyebrow">Explore by research need</p>
              </div>
              <div className="research-heading-copy">
                <h2>Specialist equipment, organised around the work.</h2>
                <p>
                  Explore key equipment areas. Specific products, models, and
                  configurations are confirmed against your requirements.
                </p>
              </div>
            </div>
            <div className="research-list">
              {researchAreas.map((area) => (
                <Link className="research-row" href="/catalogue" key={area.label}>
                  <span className="research-icon">
                    <Icon name={area.icon} size={19} />
                  </span>
                  <span>{area.label}</span>
                  <span className="research-arrow">
                    <Icon name="arrow" size={15} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="research-bottom">
              <div className="research-summary">
                <span>Research focus</span>
                <p>
                  From preclinical instruments to neural signal acquisition,
                  product selection is guided by the application and technical
                  requirement.
                </p>
              </div>
              <Link className="text-link" href="/catalogue">
                View all catalogue areas <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="catalogue-disclaimer">
              The public catalogue is being developed from verified product
              information. No unverified models or specifications are displayed.
            </p>
          </div>
        </section>

        <section className="featured-section section-pad" aria-labelledby="featured-heading">
          <div className="page-width">
            <div className="featured-heading">
              <div>
                <p className="eyebrow">Featured catalogue</p>
                <h2 id="featured-heading">Featured categories &amp; selected products.</h2>
              </div>
              <Link className="text-link" href="/catalogue">
                View full catalogue <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="featured-categories">
              {featuredCategories.map((category) => (
                <article key={category.name}>
                  <span className="research-icon">
                    <Icon name={category.icon} size={19} />
                  </span>
                  <h3>{category.name}</h3>
                  <p>{category.text}</p>
                  <Link className="text-link" href="/contact">
                    Request a quote <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="selected-products">
              <h3 className="selected-title">Selected products</h3>
              {featuredProducts.some((product) => product.sample) && (
                <p className="sample-note">
                  Sample listings for layout preview. Brands, models, specifications,
                  and images are confirmed on request.
                </p>
              )}
              {featuredProducts.length > 0 ? (
                <div className="product-grid">
                  {featuredProducts.map((product) => (
                    <article className="product-card" key={product.name}>
                      {product.image ? (
                        <EditorialImage src={product.image.src} alt={product.image.alt} />
                      ) : (
                        <div className="product-placeholder" aria-hidden="true">
                          <Icon name="microscope" size={30} />
                          <span>Product image to be added</span>
                        </div>
                      )}
                      {product.bestSeller && <span className="product-badge">Best seller</span>}
                      {product.sample && !product.bestSeller && (
                        <span className="product-badge product-badge-sample">Sample</span>
                      )}
                      <p className="product-meta">
                        {[product.manufacturer, product.model].filter(Boolean).join(" · ") ||
                          product.category}
                      </p>
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      {product.highlights && (
                        <ul>
                          {product.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      <Link className="text-link" href="/contact">
                        Request a quote <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="product-empty">
                  <p>
                    Verified product listings, models, and images are being added.
                    Ask NSH about specific products in any category above.
                  </p>
                  <Link className="button" href="/contact">
                    Request a quote <Icon name="arrow" size={17} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="home-services section-pad" aria-labelledby="services-heading">
          <div className="page-width">
            <div className="featured-heading">
              <div>
                <p className="eyebrow eyebrow-light">What NSH does</p>
                <h2 id="services-heading">Supply, sourcing, and procurement support.</h2>
              </div>
              <Link className="text-link text-link-light" href="/services">
                All services <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ol className="home-services-list">
              {primaryServices.map((service, index) => (
                <li key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="image-story-section">
          <div className="page-width image-story-grid">
            <figure className="image-story-photo">
              <EditorialImage
                src="/images/laboratory-glassware.jpg"
                alt="Glass laboratory vessels arranged for scientific work"
              />
              <figcaption>
                Illustrative laboratory setting · not a depiction of NSH inventory
              </figcaption>
            </figure>
            <div className="image-story-copy">
              <div className="section-label">
                <span className="section-number">03</span>
                <p className="eyebrow">Support for complex requirements</p>
              </div>
              <h2>Technical clarity before a purchase decision.</h2>
              <p>
                A research instrument is part of a larger workflow. NSH can help
                coordinate product selection questions, technical specifications,
                available documentation, accessories, and institutional quotation
                enquiries.
              </p>
              <ul>
                <li>Product identification and selection assistance</li>
                <li>Technical specification and documentation enquiries</li>
                <li>Procurement and quotation coordination</li>
              </ul>
              <Link className="text-link" href="/services">
                Explore sourcing support <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="sourcing-section section-pad">
          <div className="page-width sourcing-grid">
            <div className="sourcing-heading">
              <div className="section-label">
                <span className="section-number">04</span>
                <p className="eyebrow">Beyond the catalogue</p>
              </div>
              <h2>Can’t find the product you need?</h2>
              <p>
                Tell us what your research calls for. NSH can review specialized
                sourcing enquiries and confirm what may be feasible.
              </p>
              <Link className="text-link" href="/contact">
                Discuss a sourcing requirement <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="sourcing-detail">
              <p className="sourcing-detail-title">Useful details to include</p>
              <ol>
                <li>
                  <span>01</span>
                  <span>Product description and research application</span>
                </li>
                <li>
                  <span>02</span>
                  <span>Preferred brand or technical specifications</span>
                </li>
                <li>
                  <span>03</span>
                  <span>Quantity and delivery location</span>
                </li>
                <li>
                  <span>04</span>
                  <span>Supporting documents, if relevant</span>
                </li>
              </ol>
              <p className="small-note">
                Availability and sourcing feasibility are assessed individually;
                not every request can be guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section className="brands-section section-pad">
          <div className="page-width brands-grid">
            <div className="section-label">
              <span className="section-number">05</span>
              <div>
                <p className="eyebrow">Associated brands</p>
                <h2>Specialist technologies from established names.</h2>
              </div>
            </div>
            <div className="brands-content">
              <p className="brands-copy">
                The business information identifies RWD, ThinkerTech, TDT
                (Tucker-Davis Technologies), and INPER. Ask NSH about product
                information and sourcing arrangements relevant to your needs.
              </p>
              <ul className="brand-list" aria-label="Associated brands">
                <li>RWD</li>
                <li>ThinkerTech</li>
                <li>
                  <span>TDT</span>
                  <small>Tucker-Davis Technologies</small>
                </li>
                <li>INPER</li>
              </ul>
              <p className="small-note">
                Brand names are used for identification only. No exclusive
                distribution, authorization, or manufacturer endorsement is implied.
              </p>
            </div>
          </div>
        </section>

        <section className="audience-section section-pad">
          <div className="page-width audience-grid">
            <div className="section-label audience-label">
              <span className="section-number">06</span>
              <div>
                <p className="eyebrow">Who we support</p>
                <h2>Built around the needs of research and procurement teams.</h2>
              </div>
            </div>
            <div className="audience-content">
              <p>
                From technical product questions to institutional procurement
                enquiries, NSH works with scientific organisations looking for
                relevant equipment and sourcing support.
              </p>
              <ul>
                {audiences.map((audience) => (
                  <li key={audience.label}>
                    <Icon name={audience.icon} size={17} />
                    <span>{audience.label}</span>
                  </li>
                ))}
              </ul>
              <p className="small-note">
                Listed audiences are areas of focus, not a representation of
                specific customers or institutional relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="why-section section-pad">
          <div className="page-width why-grid">
            <div className="section-label">
              <span className="section-number">07</span>
              <div>
                <p className="eyebrow">Why work with NSH</p>
                <h2>Specialist attention, without the noise.</h2>
              </div>
            </div>
            <div className="why-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Focused scientific equipment expertise</h3>
                  <p>
                    A defined focus on neuroscience, preclinical research, and
                    specialized laboratory technologies.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>One point of contact for product enquiries</h3>
                  <p>
                    Discuss product information, documentation, accessories, and
                    quotation requirements in one enquiry.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Transparent, requirement-led communication</h3>
                  <p>
                    Availability, configurations, and support arrangements are
                    confirmed rather than assumed.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="locations-section section-pad" aria-labelledby="locations-heading">
          <div className="page-width locations-grid">
            <div className="locations-copy">
              <p className="eyebrow">Locations we serve</p>
              <h2 id="locations-heading">Serving research institutions across India.</h2>
              <p>
                NSH is based in New Delhi and welcomes enquiries from universities,
                research institutes, hospitals, and laboratories throughout India,
                subject to product availability and delivery feasibility.
              </p>
              <p className="locations-international">
                <strong>International sourcing &amp; export.</strong> NSH can also
                assist with international sourcing and export enquiries, subject to
                product availability, shipping feasibility, and applicable
                regulations.
              </p>
              <div className="quotation-actions">
                <Link className="button" href="/contact">
                  Request a Quote <Icon name="arrow" size={17} />
                </Link>
                <Link className="text-link" href="/contact">
                  Check delivery availability <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="small-note">
                NSH operates from New Delhi. Listed regions are service coverage,
                not branch offices.
              </p>
            </div>
            <div className="locations-map">
              <IndiaMap />
            </div>
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="page-width process-grid">
            <div className="process-title">
              <div className="section-label">
                <span className="section-number">08</span>
                <p className="eyebrow eyebrow-light">A clear enquiry process</p>
              </div>
              <h2>From a research need to a considered quotation.</h2>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Share the requirement</h3>
                  <p>
                    Include the application, product details, specifications,
                    quantity, and delivery location.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Review the product information</h3>
                  <p>
                    NSH can coordinate product and documentation enquiries for
                    consideration.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Coordinate a quotation</h3>
                  <p>
                    Availability, configuration, and procurement details are
                    confirmed for your enquiry.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="page-width faq-grid">
            <div className="section-label faq-label">
              <span className="section-number">09</span>
              <div>
                <p className="eyebrow">A few useful details</p>
                <h2>Frequently asked questions.</h2>
                <Link className="text-link" href="/contact">
                  Ask NSH directly <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta section-pad">
          <div className="page-width contact-cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">Start a conversation</p>
              <h2>Bring your equipment requirement to NSH.</h2>
              <p>
                Product questions, institutional procurement, and specialized
                sourcing enquiries are welcome.
              </p>
            </div>
            <div className="contact-cta-action">
              <Link className="button button-light" href="/contact">
                Request a quote <span aria-hidden="true">↗</span>
              </Link>
              <a className="hero-quiet-link" href="https://wa.me/919953458966">
                WhatsApp +91 99534 58966 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
