export interface SpringBreakHighlight {
  title: string;
  desc: string;
  iconClass: string;
  iconColor: string;
  blobImage: string;
}

export interface SpringBreakData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    bgImage: string;
    locationText: string;
    ageGroupText: string;
    hoursText: string;
    weeklyRate: number;
    description: string;
    subDescription: string;
  };
  details: {
    schedule: { label: string; value: string }[];
    feeIncludes: string[];
  };
  highlights: {
    title: string;
    subtitle: string;
    intro: string;
    items: SpringBreakHighlight[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const springBreakData: SpringBreakData = {
  hero: {
    title: "Spring Break Camp 2026 at Annar Childcare!",
    subtitle: "Join us for a spring full of fun, creativity, and new friendships!",
    badge: "🌸 Spring Break Camp 2026",
    bgImage: "/images/background/page-title-programs-spring-break.jpg",
    locationText: "📍 Located in the heart of Port Moody, BC (3013 Spring St)",
    ageGroupText: "👶 Kindergarten to Grade 5",
    hoursText: "⏰ Drop-off: 9:00 AM • Pick-up: 4:30 PM",
    weeklyRate: 385,
    description:
      "Looking for a fun, engaging, and worry-free spring break for your child? Annar Childcare is offering an exciting Spring Camp filled with adventure, creativity, and nutritious meals provided daily.",
    subDescription:
      "Activities include outdoor adventures, park visits, clay and ceramic art, movie days, swimming pool days, and healthy, delicious meals and snacks. Spaces are limited, so be sure to secure your spot early!",
  },
  details: {
    schedule: [
      { label: "Age Group", value: "Kindergarten through Grade 5" },
      { label: "Daily Hours", value: "Drop-off at 9:00 AM • Pick-up at 4:30 PM" },
      { label: "Weekly Tuition", value: "$385 / week (All-Inclusive)" },
      { label: "Location", value: "3013 Spring Street, Port Moody, BC" },
    ],
    feeIncludes: [
      "All nutritious hot lunches and healthy morning/afternoon snacks",
      "Clay, ceramic art, and fine art supplies provided daily",
      "Park outings, nature walks & playground adventures",
      "Swimming pool days & relaxing cinema afternoons",
      "Full supervision by certified educators and assistants",
    ],
  },
  highlights: {
    title: "Spring Camp Highlights & Activities",
    subtitle: "What Your Child Will Experience",
    intro:
      "Our spring curriculum combines active outdoor exploration with enriching fine arts and wholesome chef-crafted nutrition.",
    items: [
      {
        title: "Outdoor Adventures & Parks",
        desc: "Exciting nature walks, local Port Moody park visits, and structured outdoor playground games.",
        iconClass: "flaticon-playground",
        iconColor: "#ff7162",
        blobImage: "/images/icons/icon-1.png",
      },
      {
        title: "Clay & Ceramic Art Projects",
        desc: "Hands-on pottery sculpting, ceramic painting, and imaginative fine arts crafts led by specialized instructors.",
        iconClass: "flaticon-harvest",
        iconColor: "#b350ff",
        blobImage: "/images/icons/icon-5.png",
      },
      {
        title: "Movie Days & Swimming Fun",
        desc: "Fun splash pool excursions and cozy movie screenings with healthy homemade popcorn.",
        iconClass: "flaticon-championship",
        iconColor: "#43b3d9",
        blobImage: "/images/icons/icon-2.png",
      },
      {
        title: "Nutritious Meals & Snacks",
        desc: "Wholesome, balanced, and delicious chef-prepared hot meals and organic fruit snacks served daily.",
        iconClass: "flaticon-abc-block",
        iconColor: "#fbb419",
        blobImage: "/images/icons/icon-3.png",
      },
    ],
  },
  cta: {
    title: "Secure Your Child's Spot for Spring Break!",
    description:
      "Spaces for our Spring Break Camp are strictly limited to ensure attentive, personalized care. Get in touch with our team today to reserve your child's spot.",
    buttonText: "Contact Us to Reserve a Spot",
    buttonHref: "/contact-us",
  },
};
