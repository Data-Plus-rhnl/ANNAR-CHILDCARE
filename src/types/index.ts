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
  category: "General" | "Enrollment" | "Daily Life & Health" | "Curriculum";
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "Fine Arts" | "Activities" | "Facility";
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
