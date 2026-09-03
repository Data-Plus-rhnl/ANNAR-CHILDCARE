import { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    id: "educational-philosophy",
    category: "Philosophy & Learning",
    question: "What unique educational philosophies does Annar Child Care adopt?",
    answer:
      "Annar Child Care integrates the Reggio Emilia and Montessori methodologies, emphasizing child-centered learning, creativity, and independence. Our approach nurtures each child's natural curiosity and individual learning style, ensuring a holistic, creative, and enriching educational experience.",
  },
  {
    id: "safety-and-wellbeing",
    category: "Health & Safety",
    question: "How does Annar Child Care ensure the safety and well-being of the children?",
    answer:
      "Child safety is our top priority. Our facility is equipped with state-of-the-art security systems, secure keypad entry, and fenced outdoor grounds. All staff undergo rigorous background checks and continuous training in child safety, CPR, and first aid. We maintain a high staff-to-child ratio to ensure personalized care and continuous supervision.",
  },
  {
    id: "special-learning-needs",
    category: "Philosophy & Learning",
    question: "Are there any special programs for children with different learning needs?",
    answer:
      "Yes, Annar Child Care offers inclusive programs tailored for children with diverse learning needs. Our certified educators provide personalized support, differentiated activities, and adaptive teaching methods to ensure every child receives the best possible care and developmental growth.",
  },
  {
    id: "age-groups",
    category: "Programs & Ratios",
    question: "What age groups does Annar Child Care cater to?",
    answer:
      "Annar Child Care offers licensed programs for children aged 0 to 12 years old, divided into developmentally tailored groups: Infant & Toddler Care Program (18 months to 3 years), Ages 3–5 Preschool & Daycare Program, and Before & After School Care Program (Kindergarten to Grade 5). We also run seasonal Summer and Spring camps.",
  },
  {
    id: "meal-plans",
    category: "Health & Safety",
    question: "Does Annar Child Care offer meal plans for children?",
    answer:
      "Yes, we provide wholesome, nutritious morning and afternoon snacks along with fresh water and milk. Our snack menus cater to a variety of dietary preferences and allergies. Parents provide lunch packed to their child's dietary preferences.",
  },
  {
    id: "technology-learning",
    category: "Philosophy & Learning",
    question: "How does Annar Child Care incorporate technology into learning?",
    answer:
      "We integrate technology thoughtfully and in moderation into our curriculum, using curated educational apps, interactive media, and STEM tools to enhance learning experiences, particularly for our older daycare and Before/After School Care students.",
  },
  {
    id: "extracurricular-activities",
    category: "Philosophy & Learning",
    question: "What extracurricular activities are available at Annar Child Care?",
    answer:
      "We offer a rich array of daily enrichment activities including Fine Arts & Painting, Pottery & Clay Sculpting, Music & Rhythm, Dance & Movement, Outdoor Nature Discovery, and STEM-based exploration—all integrated directly into our curriculum at no extra cost.",
  },
  {
    id: "parent-participation",
    category: "Parent Partnership",
    question: "Can parents visit or participate in Annar Child Care activities?",
    answer:
      "Absolutely! We encourage parent involvement and maintain an open-door philosophy. We organize regular classroom celebrations, seasonal art exhibitions, parent-teacher check-ins, and events where families can celebrate their child's learning journey.",
  },
  {
    id: "teacher-child-ratio",
    category: "Programs & Ratios",
    question: "What is the teacher-to-child ratio at Annar Child Care?",
    answer:
      "Our teacher-to-child ratios strictly meet and often exceed BC Child Care Licensing standards to ensure attentive, individualized care: Infants & Toddlers Program (1:4), Preschool Program (1:6), 3–5 DayCare Program (1:8), and Before/After School Care Program (1:10).",
  },
  {
    id: "literacy-numeracy",
    category: "Philosophy & Learning",
    question: "How does Annar Child Care support early literacy and numeracy skills?",
    answer:
      "We incorporate fun, structured, and age-appropriate activities including phonics storytelling, interactive language games, alphabet tracing, and everyday math exercises. This creates strong foundational pre-reading and numeracy readiness for Kindergarten.",
  },
  {
    id: "outdoor-play",
    category: "Health & Safety",
    question: "Does Annar Child Care offer outdoor play and learning opportunities?",
    answer:
      "Yes! Our center features secure, fenced outdoor play spaces and artificial turf playgrounds. Children enjoy daily 15 to 30-minute supervised outdoor exploration (weather permitting) for physical exercise, sensory discovery, and nature-based learning.",
  },
  {
    id: "parent-communication",
    category: "Parent Partnership",
    question: "Are there any parent-teacher communication platforms at Annar Child Care?",
    answer:
      "Yes. We use a dedicated digital parent communication platform that allows parents to receive real-time updates, activity photos, monthly newsletters, and developmental reports, fostering transparent partnership between home and school.",
  },
  {
    id: "allergies-dietary",
    category: "Health & Safety",
    question: "How does Annar Child Care handle allergies and special dietary requirements?",
    answer:
      "We maintain a strict Peanut-Aware facility. All educators are certified in First Aid and EpiPen administration. We collaborate closely with families to establish individualized care plans for children with allergies or specific dietary restrictions.",
  },
  {
    id: "educator-qualifications",
    category: "Parent Partnership",
    question: "What qualifications do the educators at Annar Child Care have?",
    answer:
      "Our educators are certified Early Childhood Educators (ECE/ECEA/Infant-Toddler certified) registered with the BC ECE Registry. All staff undergo background/criminal record checks and engage in ongoing professional development in early childhood pedagogy.",
  },
  {
    id: "subsidies-ccfri",
    category: "Programs & Ratios",
    question: "Do you accept government childcare fee subsidies (CCFRI and ACCB)?",
    answer:
      "Yes! Annar Child Care is approved under the BC Child Care Fee Reduction Initiative (CCFRI), which significantly lowers monthly tuition fees directly on your invoice. We also assist eligible families with the provincial Affordable Child Care Benefit (ACCB).",
  },
];

export const faqCategories = [
  "All",
  "Philosophy & Learning",
  "Programs & Ratios",
  "Health & Safety",
  "Parent Partnership",
] as const;
