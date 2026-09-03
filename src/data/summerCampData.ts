export interface SummerCampFee {
  category: string;
  ageGroup: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  badge?: string;
  features: string[];
}

export interface SummerCampHighlight {
  title: string;
  desc: string;
  iconClass: string;
  iconColor: string;
  blobImage: string;
}

export interface SummerCampData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    bgImage: string;
    locationText: string;
    ageGroupText: string;
    description: string;
    subDescription: string;
  };
  fees: {
    title: string;
    subtitle: string;
    monthlyBase: number;
    plans: SummerCampFee[];
    note: string;
  };
  highlights: {
    title: string;
    subtitle: string;
    intro: string;
    items: SummerCampHighlight[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const summerCampData: SummerCampData = {
  hero: {
    title: "Summer Break Camp 2026 at Annar Childcare!",
    subtitle: "A Summer of Joy, Fine Arts & Lifelong Friendships",
    badge: "🌞 Summer Camp 2026",
    bgImage: "/images/SUMMER-CAMP.webp",
    locationText: "📍 Located in the heart of Port Moody, BC (3013 Spring St)",
    ageGroupText: "👶 For Children in Kindergarten to Grade 5 (Ages 5 – 12 years old)",
    description:
      "Looking for a fun, enriching, and worry-free summer for your child? At Annar Childcare, our Summer Camp offers adventure, fine arts creativity, and nutritious chef-prepared meals in a warm, welcoming, and secure environment.",
    subDescription:
      "Give your child an unforgettable summer filled with park discoveries, ceramic painting, splash pool fun, and daily inspiration guided by certified educators.",
  },
  fees: {
    title: "Transparent Camp Fees & Provincial Reductions",
    subtitle: "All-inclusive tuition with nutritious meals, field trips, and fine art supplies provided daily.",
    monthlyBase: 1200,
    plans: [
      {
        category: "Kindergarten Children",
        ageGroup: "Entering Kindergarten / Age 5",
        originalPrice: 1200,
        discount: 320,
        finalPrice: 880,
        badge: "Maximum Savings • $320 Off",
        features: [
          "Full-time summer care (Mon – Fri)",
          "All organic snacks & hot lunches included",
          "Fine arts, clay & ceramic materials provided",
          "Park outings, splash days & field trips",
          "Certified ECE and Assistant supervision",
        ],
      },
      {
        category: "Grade 1 to 12-Year-Olds",
        ageGroup: "School-Age Children (Grades 1 – 5)",
        originalPrice: 1200,
        discount: 115,
        finalPrice: 1085,
        badge: "Popular • $115 Discount",
        features: [
          "Full-time summer care (Mon – Fri)",
          "All organic snacks & hot lunches included",
          "Ceramic art, painting & creative design",
          "Outdoor adventures & swimming pool days",
          "Leadership, group team-building & STEM",
        ],
      },
    ],
    note: "All fees include nutritious chef-prepared lunches, morning/afternoon snacks, and all activity & art supply fees. No hidden equipment or registration add-ons.",
  },
  highlights: {
    title: "Camp Highlights & Daily Adventures",
    subtitle: "What Makes Summer at Annar Truly Special",
    intro:
      "Every day at Annar Summer Camp is thoughtfully balanced between dynamic outdoor energy, calm creative fine arts focus, social play, and wholesome nutrition.",
    items: [
      {
        title: "Outdoor Adventures & Parks",
        desc: "Nature discovery walks, visits to local Port Moody parks, and active outdoor group games.",
        iconClass: "flaticon-playground",
        iconColor: "#ff7162",
        blobImage: "/images/icons/icon-1.png",
      },
      {
        title: "Clay & Ceramic Art Projects",
        desc: "Specialized fine arts workshops featuring hands-on clay sculpting, pottery painting, and mixed media.",
        iconClass: "flaticon-harvest",
        iconColor: "#b350ff",
        blobImage: "/images/icons/icon-5.png",
      },
      {
        title: "Movie Days & Swimming Fun",
        desc: "Exciting cooling swimming pool outings and cozy cinema afternoons with healthy homemade popcorn.",
        iconClass: "flaticon-championship",
        iconColor: "#43b3d9",
        blobImage: "/images/icons/icon-2.png",
      },
      {
        title: "Nutritious Meals & Snacks",
        desc: "Fresh, healthy, and wholesome lunches with morning and afternoon fruit snacks prepared daily.",
        iconClass: "flaticon-abc-block",
        iconColor: "#fbb419",
        blobImage: "/images/icons/icon-3.png",
      },
    ],
  },
  cta: {
    title: "Reserve Your Child's Spot for Summer 2026!",
    description:
      "Spaces for our Summer Camp are strictly limited to ensure individualized attention and the highest care standards. Get in touch with our team today to confirm availability and schedule a visit.",
    buttonText: "Contact Us to Reserve a Spot",
    buttonHref: "/contact-us",
  },
};
