export type FeaturedProduct = {
  name: string;
  manufacturer?: string;
  model?: string;
  category: string;
  description: string;
  highlights?: string[];
  image?: { src: string; alt: string };
  bestSeller?: boolean;
  sample?: boolean;
};

// Sample listings only: product types come from the NSH business brief, with no
// invented brands, models, or specifications. Replace with verified products.
export const featuredProducts: FeaturedProduct[] = [
  {
    name: "Stereotaxic frame for rodent research",
    category: "Stereotaxic instruments",
    description: "Positioning frames for precise intracranial procedures in rodent studies.",
    highlights: ["Manual and motorized options", "Brand and model on request"],
    sample: true,
  },
  {
    name: "Microinjection system",
    category: "Microinjection systems",
    description: "Nanoliter-scale injection equipment for controlled delivery in preclinical work.",
    highlights: ["Configuration based on application", "Compatible accessories on request"],
    sample: true,
  },
  {
    name: "Gas anesthesia workstation",
    category: "Animal anesthesia systems",
    description: "Anesthesia systems for animal research and surgical workflows.",
    highlights: ["Suited to rodent research", "Configurations on request"],
    sample: true,
  },
  {
    name: "Electrophysiology & neural signal acquisition system",
    category: "Electrophysiology",
    description: "Recording, stimulation, and data acquisition solutions for neural signals.",
    highlights: ["Channel count by requirement", "Documentation on request"],
    sample: true,
  },
  {
    name: "Fiber photometry system",
    category: "Fiber photometry",
    description: "Optical systems for monitoring neural activity in vivo.",
    highlights: ["Application-led configuration", "Accessories on request"],
    sample: true,
  },
  {
    name: "Brain matrix",
    category: "Brain matrices",
    description: "Brain sectioning matrices for neuroanatomy and tissue preparation.",
    highlights: ["Species-specific options", "Sizes on request"],
    sample: true,
  },
  {
    name: "High-speed surgical drill & neurosurgical instruments",
    category: "Surgical instruments",
    description: "Drills and instruments used in preclinical surgical procedures.",
    highlights: ["Instrument sets on request"],
    sample: true,
  },
  {
    name: "Behavioral research equipment",
    category: "Behavioral research",
    description: "Equipment supporting rodent behavioral study workflows.",
    highlights: ["Test type by requirement"],
    sample: true,
  },
];
