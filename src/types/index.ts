export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  ageRange: string;
  category: "core" | "seasonal" | "events";
  tagline: string;
  summary: string;
  description: string;
  image: string;
  icon: string;
  badge: string;
  seats?: string;
  ccfriPrice?: string;
  fullPrice?: string;
  highlights: string[];
  schedule: string;
  curriculum?: {
    title: string;
    points: string[];
  }[];
}

export interface FAQItem {
  id: string;
  category: "All" | "Philosophy & Learning" | "Programs & Ratios" | "Health & Safety" | "Parent Partnership" | string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "All" | "Fine Arts" | "Classroom" | "Activities" | "Outdoor" | "Facility" | string;
  src: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}
