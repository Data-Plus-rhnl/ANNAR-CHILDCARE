export interface PolicySection {
  id: string;
  category: "communication" | "safety" | "health" | "conduct";
  categoryLabel: string;
  title: string;
  summary: string;
  subsections: {
    title: string;
    content: string | string[];
    isList?: boolean;
  }[];
}

export const policiesData: PolicySection[] = [
  {
    id: "parent-teacher-interaction",
    category: "communication",
    categoryLabel: "Communication & Partnership",
    title: "Approach to Parent-Teacher Interaction",
    summary:
      "At Annar ChildCare, we deeply value the partnership between parents and teachers in fostering the growth and development of our children through transparent, respectful communication.",
    subsections: [
      {
        title: "Ensuring Privacy and Respect in Discussions",
        content:
          "We maintain a strict policy of discussing any concerns about a child's behavior or development in private settings, away from the presence of children. This approach ensures confidentiality and respect for both the child and the family. Parents are encouraged to schedule appointments with teachers for in-depth discussions, either in person or via phone.",
      },
      {
        title: "Scheduled Parent-Teacher Conferences",
        content:
          "Annar ChildCare schedules formal parent-teacher conferences annually (typically in January or upon request) to discuss each child's progress. These meetings provide a comprehensive review of developmental milestones, social growth, and learning journeys. Parents may request additional meetings at any time.",
      },
      {
        title: "Regular Updates Through Newsletters and Calendars",
        content:
          "To keep parents informed about classroom activities, monthly themes, field trips, and special events, we distribute a monthly newsletter and calendar. These communications are crucial for staying updated on the happenings within our center.",
      },
      {
        title: "Smooth Transitions During Arrivals and Departures",
        content:
          "We emphasize punctuality in both arrivals and departures to ensure children can fully participate in morning circle time and maintain a consistent routine. Children are released only to pre-approved individuals.",
      },
      {
        title: "Phase-In Period for New Students",
        content:
          "Recognizing the importance of a positive start to the school year, Annar ChildCare implements a phase-in period. This allows children to gradually adjust to the new environment, especially after long breaks or for those new to a group care setting.",
      },
      {
        title: "Professional Development Days",
        content:
          "Our educators regularly participate in Professional Development Days to stay current with the latest research in Early Childhood Development and educational methodologies. Parents are notified well in advance of these scheduled dates.",
      },
      {
        title: "Field Trip Policies",
        content:
          "Field trips are an integral part of our curriculum, offering real-world learning experiences. Due to provincial childcare insurance regulations, unregistered siblings cannot accompany the class. Parents are informed of dates, departure times, and destination details in advance.",
      },
      {
        title: "Bathroom Independence Requirement",
        content:
          "Children enrolled in our preschool and daycare age groups are expected to be toilet trained. While we understand occasional accidents happen and our staff is prepared to handle them with sensitivity, any special circumstances should be discussed with our educators.",
      },
    ],
  },
  {
    id: "child-release-protocol",
    category: "safety",
    categoryLabel: "Safety & Security",
    title: "Secure Child-Release Protocol",
    summary:
      "Our Child Release Policy is meticulously designed to ensure that every child is safely handed over only to pre-authorized individuals, maintaining the highest standards of security.",
    subsections: [
      {
        title: "Rigorous Release Procedures",
        content:
          "Children will strictly and only be released to individuals who have been pre-designated by parents or legal guardians in the enrollment records. This policy is non-negotiable for child safety.",
      },
      {
        title: "Identification and Prior Notification",
        content:
          "Parents must inform us in advance if someone other than the primary guardians will be picking up their child. This individual must present a valid government-issued photo ID upon arrival for verification.",
      },
      {
        title: "Documentation of Minor Incidents",
        content:
          "In the event of minor playground scrapes or bumps, staff meticulously record the details in our communication log. Parents are promptly notified upon pickup with a written summary of the incident and actions taken.",
      },
      {
        title: "Handling Severe Situations",
        content:
          "For severe incidents requiring medical attention, we follow mandatory protocols involving immediate emergency response, parent contact, and reportable incident submissions to Fraser Health Child Care Licensing authorities.",
      },
      {
        title: "Protocol for Late Pick-ups",
        content:
          "If a child is not picked up by closing time (6:00 PM), educators will stay with the child and attempt to reach parents and secondary emergency contacts in sequence.",
      },
      {
        title: "Addressing Incapacitated Guardians",
        content:
          "If an educator assesses that a parent or guardian is unable to safely transport a child (e.g. under the influence), the educator will exercise discretion to contact an alternate emergency contact. If the individual insists and child safety is compromised, policy mandates calling 911.",
      },
    ],
  },
  {
    id: "medication-management",
    category: "health",
    categoryLabel: "Health & Wellness",
    title: "Medication Administration and Management",
    summary:
      "We maintain a clear, cautious policy regarding medication to ensure child safety and eliminate dosage errors in the group care setting.",
    subsections: [
      {
        title: "Limited Medication Administration",
        content:
          "Annar ChildCare does not administer routine oral medications, antibiotics, or non-prescription drugs. All scheduled daily doses must be given at home before or after childcare hours.",
      },
      {
        title: "Emergency Response with EpiPens & Inhalers",
        content:
          "The only exception is life-saving emergency medication for severe allergic reactions (EpiPens) or asthma inhalers with written parental authorization, physician care plans, and unexpired original packaging on file.",
      },
      {
        title: "Parental Responsibility for Routine Medication",
        content:
          "Any daily medical treatments must be administered by parents prior to arrival. If a child is acutely ill and requires frequent daytime doses, they must remain resting at home.",
      },
      {
        title: "Training and Emergency Preparedness",
        content:
          "All educators maintain current First Aid and CPR-C certification with dedicated pediatric anaphylaxis and EpiPen training.",
      },
    ],
  },
  {
    id: "outdoor-play-policy",
    category: "safety",
    categoryLabel: "Safety & Security",
    title: "Outdoor Exploration and Play Policy",
    summary:
      "Daily fresh air and physical movement are vital for physical health, gross motor skill development, and cognitive rejuvenation.",
    subsections: [
      {
        title: "Daily Outdoor Play Sessions",
        content:
          "Children engage in daily outdoor play for 15 to 30 minutes (or longer weather permitting), supporting active physical health and gross motor development.",
      },
      {
        title: "Safe and Supervised Play Areas",
        content:
          "Outdoor play takes place in our securely fenced and gated play areas with child-safe rubberized turf and age-appropriate climbing apparatus.",
      },
      {
        title: "Weather-Adaptive Playtime",
        content:
          "During severe rain, high winds, or extreme cold, indoor active movement sessions (obstacle courses, yoga, dance) are conducted in our spacious multipurpose rooms.",
      },
    ],
  },
  {
    id: "child-health-first",
    category: "health",
    categoryLabel: "Health & Wellness",
    title: "Child Health First Policy",
    summary:
      "Our comprehensive health policy protects all children and staff from communicable illnesses through clear attendance rules and hygiene standards.",
    subsections: [
      {
        title: "24-Hour Symptom-Free Attendance Rule",
        content:
          "Children must remain at home and be symptom-free for a full 24 hours without fever-reducing medication after exhibiting fever (38°C/100.4°F+), vomiting, diarrhea, unexplained rashes, or heavy discolored nasal discharge.",
      },
      {
        title: "Immediate Response to Illness at the Facility",
        content:
          "If a child becomes unwell during the day, they are cared for in a comfortable, quiet area by a dedicated educator while parents are contacted for timely pickup.",
      },
      {
        title: "Communicable Disease Notification",
        content:
          "Parents must promptly notify Annar ChildCare if a child is diagnosed with a contagious condition (e.g. chickenpox, strep throat, hand-foot-and-mouth) so anonymous exposure notices can be issued.",
      },
      {
        title: "Hygiene & Sanitation Standards",
        content:
          "Frequent handwashing, respiratory etiquette, and daily sanitization of toys, tables, and touchpoints are strictly integrated into the daily routine.",
      },
    ],
  },
  {
    id: "natural-disaster-plan",
    category: "safety",
    categoryLabel: "Safety & Security",
    title: "Natural Disaster Safety Assurance Plan",
    summary:
      "Detailed earthquake and emergency preparedness plans designed to keep every child safe, calm, and accounted for during unforeseen events.",
    subsections: [
      {
        title: "Immediate Duck-and-Cover Action",
        content:
          "Staff are trained to immediately guide children into 'Drop, Cover, and Hold On' positions under sturdy tables away from glass and falling fixtures.",
      },
      {
        title: "Roll Call and Headcount",
        content:
          "Once shaking stops, an immediate roll call and physical safety check are conducted with the attendance binder and emergency master list.",
      },
      {
        title: "Emergency Supplies Accessibility",
        content:
          "Our center is equipped with a complete emergency disaster kit containing 72-hour non-perishable food, bottled water, first aid supplies, blankets, flashlights, and a hand-crank emergency radio.",
      },
      {
        title: "Regular Drills & Preparedness",
        content:
          "Monthly fire evacuation drills and seasonal Great BC ShakeOut earthquake drills ensure that educators and children respond calmly and instinctively.",
      },
    ],
  },
  {
    id: "nutrition-guidelines",
    category: "health",
    categoryLabel: "Health & Wellness",
    title: "Nutrition Guidelines & Wholesome Eating Habits",
    summary:
      "Promoting healthy eating habits, allergy safety, and environmental responsibility through wholesome meal practices.",
    subsections: [
      {
        title: "Balanced Daily Nutrition",
        content: [
          "Variety & Balance: Meals include a healthy mix of fresh vegetables, fruits, whole grains, and lean proteins.",
          "Limit Processed Sugars: Candy, energy drinks, and heavily processed sugary snacks are not permitted.",
          "Hydration: Children are encouraged to bring reusable water bottles for regular hydration breaks throughout the day.",
        ],
        isList: true,
      },
      {
        title: "Strict Peanut-Free & Allergy Awareness",
        content: [
          "Peanut-Free Zone: To protect children with life-threatening anaphylactic allergies, our entire facility is strictly peanut and nut-aware.",
          "Allergy Profiles: Specific dietary allergies are clearly posted in food preparation areas with individualized educator awareness.",
        ],
        isList: true,
      },
      {
        title: "Waste Reduction & Eco-Awareness",
        content:
          "We encourage bento-style reusable containers and teach children the principles of composting, recycling, and caring for the environment.",
      },
    ],
  },
  {
    id: "disciplinary-guidance",
    category: "conduct",
    categoryLabel: "Behavior & Guidance",
    title: "Disciplinary Guidelines (Principles of Positive Guidance)",
    summary:
      "Nurturing child development through positive reinforcement, empathy, and clear boundaries rather than punishment.",
    subsections: [
      {
        title: "Principles of Positive Guidance",
        content: [
          "Teaching, Not Punishing: Discipline is focused on teaching constructive problem-solving, self-regulation, and emotional awareness.",
          "Respect and Self-Control: Fostering mutual respect, empathy, and positive peer communication.",
          "Realistic Expectations: Age-appropriate boundaries and predictable daily routines that give children security and confidence.",
        ],
        isList: true,
      },
      {
        title: "Calm Classroom Reflection Area",
        content:
          "Our classrooms feature cozy quiet spaces with soft cushions, books, and sensory tools where children can step back to reset their emotions safely and without humiliation.",
      },
      {
        title: "Parent-Educator Collaboration",
        content:
          "When persistent behavioral challenges arise, educators partner with parents through constructive meetings to build consistent support strategies between center and home.",
      },
    ],
  },
  {
    id: "abuse-prevention",
    category: "safety",
    categoryLabel: "Safety & Security",
    title: "Abuse Prevention & Child Protection Policy",
    summary:
      "Uncompromising zero-tolerance commitment to the safety, emotional well-being, and legal protection of every child in our care.",
    subsections: [
      {
        title: "Zero Tolerance & Mandatory Reporting",
        content:
          "Physical, emotional, verbal, or sexual abuse is strictly prohibited. By BC law, all childcare staff are designated mandatory reporters and must immediately report any suspected child maltreatment to the Ministry of Children and Family Development (MCFD).",
      },
      {
        title: "Staff Screening & Training",
        content:
          "All staff undergo rigorous criminal record checks via the Criminal Records Review Program (CRRP), reference verifications, and ongoing child safety training.",
      },
      {
        title: "Supportive and Transparent Environment",
        content:
          "We maintain open communication with families, clear reporting documentation in our incident logs, and close collaboration with licensing officials.",
      },
    ],
  },
  {
    id: "screen-time-policy",
    category: "conduct",
    categoryLabel: "Behavior & Guidance",
    title: "Balanced Digital Engagement - Screen-Time Policy",
    summary:
      "Prioritizing hands-on exploration, social engagement, and fine arts over passive digital screen consumption.",
    subsections: [
      {
        title: "Zero Screen-Time in Early Learning",
        content:
          "In our Infant/Toddler, Daycare (3–5), and Preschool programs, passive screen media is not incorporated. Our curriculum is 100% focused on sensory play, fine arts, motor skills, and social connection.",
      },
      {
        title: "Mindful After-School Media",
        content:
          "For school-age children in after-school care, optional educational media is limited to a maximum of 30 minutes on Friday afternoons only, focusing on curated learning topics or family-approved educational clips.",
      },
      {
        title: "Benefits of Reduced Screen Exposure",
        content:
          "Encourages imaginative free play, deeper peer relationships, better sleep quality, and active physical engagement throughout the day.",
      },
    ],
  },
];
