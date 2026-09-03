export interface ScheduleEntry {
  time: string;
  activity: string;
  desc?: string;
}

export interface InfrastructureItem {
  title: string;
  desc: string;
  icon?: string;
}

export interface WellBeingPillar {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProgramSubStream {
  title: string;
  age: string;
  desc: string;
  image: string;
  amenities: string[];
}

export interface ProgramItem {
  id: string;
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  ageRange: string;
  category: "core" | "seasonal" | "events";
  tagline: string;
  summary: string;
  description: string;
  image: string;
  headerBgImage?: string;
  icon: string;
  badge: string;
  seats?: string;
  hours: string;
  ccfriPrice?: string;
  fullPrice?: string;
  highlights: string[];
  schedule: string;
  dailySchedule?: ScheduleEntry[];
  infrastructure?: InfrastructureItem[];
  wellBeingPillars?: WellBeingPillar[];
  subStreams?: ProgramSubStream[];
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
