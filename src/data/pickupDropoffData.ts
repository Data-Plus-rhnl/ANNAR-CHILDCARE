export interface TransportService {
  title: string;
  desc: string;
  iconClass: string;
  iconColor: string;
  blobImage: string;
}

export interface TransportRule {
  title: string;
  desc: string;
}

export interface PickupDropoffData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    bgImage: string;
    locationText: string;
    description: string;
    schoolsNote: string;
  };
  services: TransportService[];
  guidelines: TransportRule[];
  commitment: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const pickupDropoffData: PickupDropoffData = {
  hero: {
    title: "Pick-up & Drop-Off Facility",
    subtitle: "Ensuring Safety, Reliability & Convenience for Busy Families",
    badge: "🚌 Dedicated Transportation Services",
    bgImage: "/images/background/dropoff-bg.jpg",
    locationText: "📍 Serving Port Moody, BC • Moody Elementary & Pinetree Way Elementary",
    description:
      "At Annar Child Care, we understand the importance of safe and reliable transportation for the children in our care. Our Pick Up and Drop Off Services, including a dedicated center vehicle and van facility, are designed to provide convenient and secure transit for children enrolled in our after-school programs.",
    schoolsNote:
      "Annar Childcare currently provides specialized afterschool pick-up and transportation for Pinetree Way Elementary and Moody Elementary.",
  },
  services: [
    {
      title: "Van for Safe Transit",
      desc: "Our center van is fully inspected, maintained, and equipped with child safety restraints to ensure secure and comfortable transit to and from our academy.",
      iconClass: "flaticon-bus-1",
      iconColor: "#ff7162",
      blobImage: "/images/icons/icon-1.png",
    },
    {
      title: "Available for Multiple Locations",
      desc: "Our services cover key school zones and accessible neighborhood points across Port Moody, ensuring seamless afterschool access.",
      iconClass: "flaticon-tick",
      iconColor: "#43b3d9",
      blobImage: "/images/icons/icon-2.png",
    },
  ],
  guidelines: [
    {
      title: "Pre-Registration for Transportation",
      desc: "Parents must pre-register their children for our Pick Up and Drop Off Services. This allows us to plan daily routes efficiently and ensure dedicated seating allocations.",
    },
    {
      title: "Fixed Pick-Up and Drop-Off Points",
      desc: "To maintain consistency, punctuality, and security, children are received and released at predetermined, designated school pickup zones.",
    },
    {
      title: "Timely Arrival at Pick-Up Points",
      desc: "Parents are responsible for ensuring that their children are ready at the designated dismissal locations on time. Delays can impact the schedule for all families on the route.",
    },
    {
      title: "Authorized Person for Drop-Off",
      desc: "Children will only be released to individuals pre-authorized in writing by the parent or guardian. Government-issued photo identification is required for identity verification.",
    },
    {
      title: "Notification of Absence",
      desc: "If your child will be absent or not using transportation on a particular day (due to illness or parent pickup), please notify our office in advance by 1:00 PM.",
    },
    {
      title: "Safety Rules on the Bus",
      desc: "Children are expected to observe all vehicle safety rules, including wearing seatbelts at all times, remaining seated, and following the instructions of the driver and monitor.",
    },
    {
      title: "Emergency Contact Information",
      desc: "Parents must ensure that current, reachable emergency contact numbers are on file with our transportation coordinator at all times.",
    },
    {
      title: "Feedback and Concerns",
      desc: "We welcome ongoing feedback regarding our transit routes. Open communication helps us continually enhance convenience and comfort for our families.",
    },
  ],
  commitment: {
    title: "Commitment to Safety and Convenience",
    subtitle: "A Seamless Extension of Annar ChildCare",
    description:
      "Our Pick Up and Drop Off Services at Annar Child Care are an integral part of our commitment to providing a comprehensive childcare experience. We strive to ensure that every aspect of our service meets the highest standards of safety, convenience, and punctuality for our families.",
  },
};
