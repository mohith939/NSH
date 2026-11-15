import type { IconName } from "@/components/icon";
import rawProducts from "./rwd-products.json";

export type RwdCategory = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: IconName;
  subcategories: string[];
};

export type RwdProduct = {
  id: string;
  name: string;
  model: string;
  categoryId: string;
  categoryName: string;
  manufacturer: string;
  tagline: string;
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  image: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  link?: string;
};

export const rwdCategories: RwdCategory[] = [
  {
    id: "stereotaxic",
    name: "Stereotaxic Instruments & Brain Positioning",
    shortName: "Stereotaxic",
    description:
      "Automated, digital, and standard stereotaxic frames, micro-manipulators, brain impactors, and surgical accessories for rodent neurosurgery.",
    icon: "brain",
    subcategories: [
      "Automated Stereotaxic Instruments (71000)",
      "Digital Stereotaxic Frames (68025 / 68045)",
      "Standard Stereotaxic Frames (68001)",
      "Portable Rat & Mouse Stereotaxic Frames",
      "Precise Brain & Spinal Cord Impactors (PCI-68099)",
      "Brain & Heart Slicing Matrices",
      "Ear Bars, Adaptors & Multi-function Animal Holders",
    ],
  },
  {
    id: "anesthesia",
    name: "Inhalation Anesthesia Systems",
    shortName: "Anesthesia",
    description:
      "Safe, accurate isoflurane and sevoflurane vaporizers, multi-channel anesthesia workstations, ventilators, and active waste gas evacuation.",
    icon: "target",
    subcategories: [
      "Small Animal Anesthesia Machines (R500)",
      "Multi-channel Anesthesia Systems (R540)",
      "Intelligent Animal Ventilators (R415)",
      "Active Gas Evacuation Apparatus (R546Pro)",
      "RM-C2 Animal End-Tidal CO2 Monitors",
      "Induction Chambers & Low-Stress Cone Masks",
    ],
  },
  {
    id: "neural-circuit",
    name: "Neural Circuit Research & Fiber Photometry",
    shortName: "Neural Circuit",
    description:
      "Tricolor, four-color and fluorescence lifetime (FLiP) photometry systems, optogenetics stimulation, and micropipette pullers.",
    icon: "activity",
    subcategories: [
      "Tricolor Multichannel Fiber Photometry (R821)",
      "Four Color Multichannel Photometry (R830)",
      "Dual Color Fiber Photometry Systems (R810)",
      "Fluorescence Lifetime Photometry Systems (FLiP)",
      "Optogenetics Systems & Laser Light Sources",
      "Glass Micropipette Pullers (MP-500)",
      "Motorized Micromanipulators & Optical Commutators",
    ],
  },
  {
    id: "in-vivo-imaging",
    name: "In Vivo Imaging & Optical Systems",
    shortName: "In Vivo Imaging",
    description:
      "High-resolution laser speckle contrast imaging, small animal ultrasound, and surgical binocular operating microscopes.",
    icon: "microscope",
    subcategories: [
      "Laser Speckle Contrast Imaging Systems (RFLSI ZW / RFLSI Ⅲ)",
      "High Frequency Small Animal Ultrasound Imaging Systems",
      "Binocular Surgical Operating Microscopes (77002 / 77001S)",
      "Cerebral Blood Flow Perfusion Mapping",
    ],
  },
  {
    id: "cell-biology",
    name: "Cell & Molecular Biology",
    shortName: "Cell & Molecular",
    description:
      "Automated cell counters, single-cell suspension tissue dissociators, refrigerated microcentrifuges, CO2 incubators, and thermal cyclers.",
    icon: "flask",
    subcategories: [
      "Automated Cell Counters (C100 / C200FL Fluorescent)",
      "Single Cell Suspension Dissociators (DSC-800 / DSC-400)",
      "High-Speed Refrigerated Centrifuges (MX30R / M1324R)",
      "Air-Jacketed CO2 Incubators (D180 / D165HT)",
      "Gradient PCR Thermal Cyclers (M2-96SG / M2-32TG)",
    ],
  },
  {
    id: "histology",
    name: "Histology Equipment & Pathology",
    shortName: "Histology",
    description:
      "Minux rotary microtomes and cryostats for paraffin and frozen tissue sectioning, microtome disposable blades, and embedding compounds.",
    icon: "package",
    subcategories: [
      "Minux Research Cryostats (FS900 / FS800A)",
      "Minux Rotary Microtomes (S712 / S700A / S700)",
      "Disposable Microtome Blades (High & Low Profile)",
      "Frozen Section Embedding Compound (FS-EM)",
    ],
  },
  {
    id: "surgical-instruments",
    name: "Surgical Instruments & Tools",
    shortName: "Surgical",
    description:
      "Over 200 precision surgical instruments: micro-forceps, spring scissors, vascular clamps, bone rongeurs, microdrills, and homeothermic blankets.",
    icon: "check",
    subcategories: [
      "ThermoStar Homeothermic Monitoring Systems (68020)",
      "High-Speed Surgical Microdrills (78001)",
      "Dumont-Style Micro Forceps & Dressing Forceps",
      "Fine & Spring Scissors, Corneal & Dissecting Scissors",
      "Vascular Clamps, Retractors & Bone Rongeurs",
      "Sterile Sutures, Suture Needles & Scalpels",
    ],
  },
  {
    id: "veterinary",
    name: "Veterinary & Preclinical Medicine",
    shortName: "Veterinary",
    description:
      "Veterinary anesthesia workstations, patient ventilators, veterinary ICU cages, dental units, dental x-ray sensors, and urine sediment analyzers.",
    icon: "globe",
    subcategories: [
      "Veterinary Anesthesia Workstations (R650 / R620)",
      "Small Pet Ventilators (RSV)",
      "Veterinary ICU Cages & Warming Enclosures",
      "Veterinary Dental Units (D-Prime)",
      "Digital Dental X-Ray CMOS Sensors (D-S1 / D-S2)",
      "Veterinary Urine Sediment Analyzers",
    ],
  },
  {
    id: "reagents-consumables",
    name: "Reagents & Consumables",
    shortName: "Reagents",
    description:
      "High-activity enzymatic tissue dissociation kits, magnetic cell separation microbeads, LarSep columns, and counting slides.",
    icon: "file",
    subcategories: [
      "Tissue Enzymatic Dissociation Kits (Tumor, Neural, Cardiac, FFPE)",
      "Magnetic Microbeads & Cell Separation Kits",
      "Disposable & Reusable Cell Counting Slides (RS-100)",
      "Activated Charcoal Gas Scavenging Canisters",
    ],
  },
];

export const rwdProducts: RwdProduct[] = rawProducts as RwdProduct[];
