import Link from "next/link";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const questions = [
  {
    question: "What types of scientific equipment does NSH supply?",
    answer:
      "NSH focuses on neuroscience research equipment, preclinical instruments, advanced laboratory equipment, and specialized scientific technologies. Product availability and model details are confirmed for each enquiry.",
  },
  {
    question: "Does NSH supply neuroscience research instruments?",
    answer:
      "Neuroscience research equipment is one of NSH’s areas of focus. Share your application, preferred product, and technical requirements to discuss the enquiry.",
  },
  {
    question: "Can I request a quotation for multiple products?",
    answer:
      "Yes. Include the equipment requirements, quantities, specifications, and procurement context for each item so the enquiry can be reviewed together.",
  },
  {
    question: "Can NSH source products that are not listed?",
    answer:
      "You may submit a specialized sourcing request. Feasibility, availability, import conditions, and timelines are reviewed individually and are not guaranteed.",
  },
  {
    question: "Can I obtain product datasheets or brochures?",
    answer:
      "Ask NSH with the product manufacturer and model if known. Documentation enquiries depend on the relevant materials being available.",
  },
  {
    question: "Does NSH support institutional and tender enquiries?",
    answer:
      "Institutional procurement enquiries are welcome. Share the technical requirements and any relevant procurement details for review.",
  },
  {
    question: "Does NSH serve customers across India?",
    answer:
      "NSH welcomes enquiries from research and institutional customers across India. Delivery and procurement requirements are confirmed individually.",
  },
  {
    question: "How can I enquire about accessories or replacement parts?",
    answer:
      "Include the associated product, manufacturer, model, part number, and any available documentation. Compatibility and availability must be confirmed.",
  },
  {
    question: "Can I ask about international sourcing or export?",
    answer:
      "International sourcing and export enquiries may be discussed, subject to product availability, destination, and applicable requirements.",
  },
  {
    question: "How can I contact NSH?",
    answer:
      "Call or WhatsApp +91 99534 58966, email nshscientific@gmail.com, or send an enquiry through the Contact page.",
  },
];

export const metadata = {
  title: "Resources & FAQs",
  description:
    "Answers to common scientific equipment, documentation, sourcing, and quotation questions.",
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-width">
            <p className="eyebrow">Resources &amp; FAQs</p>
            <h1>Useful information for your next equipment enquiry.</h1>
            <p>
              Answers to common questions about product information, documentation,
              specialized sourcing, and institutional quotations.
            </p>
          </div>
        </section>
        <section className="resources-section section-pad">
          <div className="page-width resources-grid">
            <aside className="resources-aside">
              <p className="eyebrow">Technical information</p>
              <h2>Looking for a datasheet or product guide?</h2>
              <p>
                Ask NSH with the product name, manufacturer, or model number.
                Documents are shared only when genuine and available.
              </p>
              <Link className="text-link" href="/contact">
                <Icon name="file" size={17} />
                Request product information <span aria-hidden="true">→</span>
              </Link>
              <div className="resources-note">
                <span className="resources-note-label"><Icon name="file" size={15} /> Current library</span>
                <p>
                  No product brochures or datasheets were supplied with the website
                  brief. This section will be updated as verified materials become
                  available.
                </p>
              </div>
            </aside>
            <div className="faq-list">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
