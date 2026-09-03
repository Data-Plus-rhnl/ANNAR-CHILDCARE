export interface PartyHighlight {
  title: string;
  desc: string;
  iconClass: string;
  iconColor: string;
  blobImage: string;
}

export interface PartyData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    statusBadge: string;
    bgImage: string;
    locationText: string;
    description: string;
    subDescription: string;
  };
  highlights: {
    title: string;
    subtitle: string;
    intro: string;
    items: PartyHighlight[];
  };
  inquiry: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const partyData: PartyData = {
  hero: {
    title: "Book A Birthday Party at Annar!",
    subtitle: "Magical Celebrations Filled with Creativity, Fine Arts & Joy",
    badge: "🎂 Private Weekend Celebrations",
    statusBadge: "Details Coming Soon • Early Booking Open",
    bgImage: "/images/background/page-title-childcare.jpg",
    locationText: "📍 3013 Spring Street, Port Moody, BC",
    description:
      "Looking for a unique, vibrant, and stress-free venue for your child's next birthday party? At Annar Childcare Academy, our private weekend facility rental offers an inspiring blend of fine arts workshops, creative play, and spacious celebration areas.",
    subDescription:
      "Full package details and themed packages are launching soon! We are currently accepting advance weekend booking inquiries and custom party reservations.",
  },
  highlights: {
    title: "What's in Store for Your Party",
    subtitle: "The Ultimate Birthday Experience",
    intro:
      "Celebrate your little one's special day in a private, clean, and inspiring environment designed specifically for children.",
    items: [
      {
        title: "Fine Arts & Ceramic Workshops",
        desc: "Exciting hands-on painting, clay sculpting, and creative art projects where every guest takes home their own finished masterpiece.",
        iconClass: "flaticon-harvest",
        iconColor: "#b350ff",
        blobImage: "/images/icons/icon-5.png",
      },
      {
        title: "Exclusive Private Facility Access",
        desc: "Enjoy private weekend access to our bright classrooms, dining/cake area, and safe fenced outdoor play facilities for your guests only.",
        iconClass: "flaticon-playground",
        iconColor: "#ff7162",
        blobImage: "/images/icons/icon-1.png",
      },
      {
        title: "Stress-Free Party Setup",
        desc: "Spacious tables and clean areas ready for your cake, catering, balloons, and customized birthday decorations.",
        iconClass: "flaticon-championship",
        iconColor: "#43b3d9",
        blobImage: "/images/icons/icon-2.png",
      },
      {
        title: "Dedicated On-Site Host",
        desc: "Warm and caring staff available to assist with workshop guidance, activity coordination, and seamless party flow.",
        iconClass: "flaticon-abc-block",
        iconColor: "#fbb419",
        blobImage: "/images/icons/icon-3.png",
      },
    ],
  },
  inquiry: {
    title: "Plan Your Child's Birthday Celebration",
    subtitle: "Get in touch with our team to inquire about available weekend dates, custom art themes, and early booking perks.",
    description:
      "Have a specific date or theme in mind? Fill out the quick inquiry form below or call us directly. Our team will get back to you promptly to discuss your party vision.",
  },
};
