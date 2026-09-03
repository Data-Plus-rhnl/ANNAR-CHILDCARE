import { ProgramItem } from "@/types";

export const programs: ProgramItem[] = [
  // ==================== 1. TODDLER & INFANT CARE (0 - 3 YRS) ====================
  {
    id: "infant-toddler",
    slug: "infant-toddler",
    route: "/programs/infant-toddler",
    title: "Infant & Toddler Care Program",
    shortTitle: "Toddler & Infant Care",
    ageRange: "0 – 3 Years (18m – 3y)",
    category: "core",
    tagline: "Nurturing the First Steps with personalized care, gentle milestone guidance, and sensory discovery.",
    summary:
      "Our Infant and Toddler Care Program at Annar Child Care offers an enriching start to your child's educational journey. Designed for children aged 0-3 years, this program focuses on nurturing early development through sensory exploration, emotional bonding, and foundational learning.",
    description:
      "We offer a safe, stimulating environment tailored to each child's needs that encourages infants and toddlers to explore, bond, and grow with loving, certified Early Childhood Educators.",
    image: "/images/resource/class-details-tinytod.jpg",
    headerBgImage: "/images/background/page-title-programs-1.jpg",
    icon: "Baby",
    badge: "Ages 0 - 3 yrs",
    seats: "12 Licensed Spaces",
    hours: "Monday – Friday: 7:00 AM – 6:00 PM",
    schedule: "Monday – Friday: 7:00 AM – 6:00 PM",
    ccfriPrice: "$1,070 / month",
    fullPrice: "$1,970 / month",
    highlights: [
      "Low child-to-educator ratio for personalized, responsive attention",
      "Sensory development activities stimulating sight, sound, touch, and movement",
      "Healthy routine building for feeding, nap time, and calm play transitions",
      "Daily communication logs and photo updates for parents",
    ],
    curriculum: [
      {
        title: "Tailored Infant & Toddler Care",
        points: [
          "Individualized attention to each child's daily rhythm and emotional comfort",
          "Smooth transition support into the childcare center setting",
          "Gentle language stimulation through nursery rhymes, songs, and baby sign language",
        ],
      },
      {
        title: "Sensory & Cognitive Development",
        points: [
          "Multi-textured toys, soft blocks, bead mazes, and water/sand sensory bins",
          "Fine and gross motor skill enhancement through crawling tunnels and push walkers",
          "Introduction to basic shapes, colors, and spatial awareness through joyful play",
        ],
      },
      {
        title: "Emotional Bonding & Social Milestones",
        points: [
          "Secure attachment with primary caregivers in a warm, loving atmosphere",
          "Early peer awareness, sharing gestures, and empathy modeling",
          "Toilet training readiness guidance tailored to each toddler's developmental pace",
        ],
      },
    ],
    subStreams: [
      {
        title: "Infant Care Stream",
        age: "9 Months – 2 Years",
        desc: "A warm, peaceful haven catering to the unique sleeping, feeding, and sensory needs of infants with daily outdoor stroller walks and responsive cuddling.",
        image: "/images/resource/about-11.jpg",
        amenities: [
          "Dedicated quiet sleep room with natural wood cribs",
          "Stroller walks around Port Moody nature trails",
          "Tactile sensory play & soft-surface exploration",
          "Tailored feeding and bottle-warming routines",
        ],
      },
      {
        title: "Toddler Care Stream",
        age: "2 Years – 3 Years",
        desc: "Fosters early independence, active movement, and curiosity through guided group games, fine motor pegboards, beginner art, and toilet training readiness.",
        image: "/images/resource/about-12.jpg",
        amenities: [
          "Individual rolled nap mats in cozy resting corners",
          "Creative beginner finger-painting & clay modeling",
          "Secure outdoor turf play area with toddler slides",
          "Language-rich circle times and storybook reading",
        ],
      },
    ],
    infrastructure: [
      {
        title: "Dedicated Nap Rooms",
        desc: "Comfortable wooden cribs and cushioned mats in a separate, sound-softened sleeping room ensuring tranquil, undisturbed rest.",
        icon: "Bed",
      },
      {
        title: "Fenced Outdoor Playground",
        desc: "Expansive, safety-fenced artificial turf play yard with child-safe climbers, sandboxes, and shade canopies for daily outdoor fresh air.",
        icon: "Trees",
      },
      {
        title: "Health & Safety Measures",
        desc: "Fraser Health licensed facility equipped with air purifiers, child-height sanitizing sinks, and strict daily disinfection protocols.",
        icon: "ShieldCheck",
      },
      {
        title: "Interactive Sensory Spaces",
        desc: "Well-equipped indoor play zones featuring Montessori sensory toys, soft foam climbing blocks, and age-appropriate tactile materials.",
        icon: "Sparkles",
      },
    ],
    wellBeingPillars: [
      {
        title: "Personalized Nap Routines",
        desc: "Adapting to each child's home nap schedules for restful, stress-free sleep and healthy circadian rhythm building.",
        icon: "Moon",
      },
      {
        title: "Wholesome Nutrition & Snacks",
        desc: "Healthy, age-tailored morning and afternoon fruit, grain, and dairy snacks meeting provincial nutritional guidelines.",
        icon: "Apple",
      },
      {
        title: "Regular Health Monitoring",
        desc: "Attentive wellness checks throughout the day to ensure optimal comfort, hydration, and immediate care when needed.",
        icon: "HeartPulse",
      },
      {
        title: "Responsive Caregiving",
        desc: "Loving, empathetic care from licensed ECE-certified educators attuned to every cry, smile, and milestone.",
        icon: "HeartHandshake",
      },
    ],
    dailySchedule: [
      { time: "08:00 AM – 09:00 AM", activity: "Arrival & Free Sensory Play", desc: "Warm welcome, quiet greetings, soft toy exploration" },
      { time: "09:00 AM – 10:00 AM", activity: "Sensory & Movement Activities", desc: "Crawling tunnels, tactile sensory bins, music & rhythm" },
      { time: "10:00 AM – 10:30 AM", activity: "Morning Snack Time", desc: "Fresh organic fruit, whole grain snacks, milk/water" },
      { time: "10:30 AM – 11:30 AM", activity: "Outdoor Play (Weather Permitting)", desc: "Fenced turf playground exploration, stroller walks" },
      { time: "11:30 AM – 12:00 PM", activity: "Story Time & Nursery Rhymes", desc: "Interactive board books, puppet play, baby sign language" },
      { time: "12:00 PM – 12:30 PM", activity: "Nutritious Lunch", desc: "Family-style lunch seating with self-feeding practice" },
      { time: "12:30 PM – 01:00 PM", activity: "Wind Down & Transition to Nap", desc: "Soft lullabies, diapering, cozy sleeping room settling" },
      { time: "01:00 PM – 02:30 PM", activity: "Rest & Nap Time", desc: "Quiet restorative sleep in dedicated cribs / mats" },
      { time: "02:30 PM – 03:00 PM", activity: "Wake Up, Diapering & Quiet Play", desc: "Gentle wake-up, puzzles, soft fabric books" },
      { time: "03:00 PM – 03:30 PM", activity: "Afternoon Snack Time", desc: "Healthy wholesome afternoon refuel and hydration" },
      { time: "03:30 PM – 04:30 PM", activity: "Fine Arts & Exploration", desc: "Finger painting, non-toxic clay squishing, block stacking" },
      { time: "04:30 PM – 05:00 PM", activity: "Quiet Reflection & Pick-Up", desc: "Story wind down, parent daily log handover and departure" },
    ],
  },

  // ==================== 2. DAYCARE PROGRAM (AGES 3 - 5 YRS) ====================
  {
    id: "daycare-3-5",
    slug: "daycare-3-to-5",
    route: "/programs/daycare-3-to-5",
    title: "DayCare Program (Ages 3–5)",
    shortTitle: "Ages 3–5 Program",
    ageRange: "3 – 5 Years",
    category: "core",
    tagline: "Childcare and Fine Arts Education fostering creativity, ABCs, numeracy, French, and kindergarten readiness.",
    summary:
      "At Annar Childcare, our program for 3-5 year olds is designed to foster creativity and foundational skills through engaging Fine Arts education. We focus on developing essential literacy and numeracy while promoting healthy communication, cooperation, and artistic self-expression.",
    description:
      "Our Fine Arts curriculum includes daily painting, sketching, drawing, and clay modeling. In addition to arts, we incorporate French immersion basics, Sign Language, and movement activities to enhance holistic cognitive and physical development.",
    image: "/images/resource/class-details-littlelearners.jpg",
    headerBgImage: "/images/background/page-title-programs-1.jpg",
    icon: "GraduationCap",
    badge: "Ages 3 - 5 yrs",
    seats: "18 Licensed Spaces",
    hours: "Monday – Friday: 7:00 AM – 6:00 PM",
    schedule: "Monday – Friday: 7:00 AM – 6:00 PM",
    ccfriPrice: "$886 / month",
    fullPrice: "$1,431 / month",
    highlights: [
      "Signature Fine Arts integration: acrylic canvas painting, sketching, and clay pottery",
      "Kindergarten readiness curriculum: phonics, early math, and pre-writing skills",
      "Bilingual exposure: French immersion songs & vocabulary plus basic Sign Language",
      "Social-emotional learning emphasizing collaboration, conflict resolution, and self-regulation",
    ],
    curriculum: [
      {
        title: "Fine Arts & Creative Atelier",
        points: [
          "Hands-on painting techniques (tempera, watercolor, acrylic canvas art)",
          "Clay sculpting, coil pottery modeling, and paper collage construction",
          "Color theory exploration, famous artist appreciation, and annual student art exhibitions",
        ],
      },
      {
        title: "Early Literacy & Language Immersion",
        points: [
          "Phonics, alphabet recognition, letter-sound correspondence, and storytelling",
          "Weekly French vocabulary lessons: greetings, colors, numbers, and animals",
          "Sign Language integration for inclusive, multi-modal communication",
        ],
      },
      {
        title: "Numeracy, STEM & Science Discovery",
        points: [
          "Hands-on counting, pattern recognition, spatial geometry, and balance weighing",
          "Nature science experiments: plant growth, life cycles, and weather tracking",
          "Logic puzzles, building blocks, and tactile problem-solving challenges",
        ],
      },
    ],
    infrastructure: [
      {
        title: "Modern Classroom Atmosphere",
        desc: "Well-equipped, sunlit learning rooms organized with Montessori-style open shelves, reading nooks, and dramatic play centers.",
        icon: "School",
      },
      {
        title: "Dedicated Art & Craft Atelier",
        desc: "Purpose-designed creative art studio stocked with easels, pottery tools, brushes, non-toxic clay, and gallery display walls.",
        icon: "Palette",
      },
      {
        title: "Comfort Rest Spaces",
        desc: "Quiet, serene nap and meditation area with individual clean floor mats and soothing white noise for afternoon recharge.",
        icon: "Bed",
      },
      {
        title: "Expansive Outdoor Playland",
        desc: "Large, gated outdoor artificial turf playground with sandboxes, trike tracks, and garden beds for energetic gross motor play.",
        icon: "Trees",
      },
    ],
    wellBeingPillars: [
      {
        title: "Early Childhood Educator (ECE) Mentorship",
        desc: "High staff ratios with certified ECEs providing individualized scaffolding and positive behavior encouragement.",
        icon: "GraduationCap",
      },
      {
        title: "Balanced Daily Rhythm",
        desc: "Harmonious balance between structured educational circle time and child-directed exploratory free play.",
        icon: "Clock",
      },
      {
        title: "Music & Movement Expression",
        desc: "Daily dance, rhythm instruments, yoga stretching, and gross motor obstacle games to build physical coordination.",
        icon: "Music",
      },
      {
        title: "Kindergarten Confidence",
        desc: "Instilling social independence, self-help skills (dressing, handwashing), and public speaking during show-and-tell.",
        icon: "Smile",
      },
    ],
    dailySchedule: [
      { time: "08:00 AM – 09:00 AM", activity: "Arrival & Morning Exploration Time", desc: "Greeting educators, table puzzles, free interest choice" },
      { time: "09:00 AM – 10:00 AM", activity: "Circle Time & Interactive Play", desc: "Calendar, weather, morning greeting, French songs & stories" },
      { time: "10:00 AM – 10:30 AM", activity: "Nutritious Snack Time", desc: "Fresh fruit, yogurt, whole grain crackers, milk/water" },
      { time: "10:30 AM – 11:30 AM", activity: "Educational Learning Centers", desc: "Literacy, numeracy, phonetic games, fine motor sorting" },
      { time: "11:30 AM – 12:00 PM", activity: "Outdoor Play & Physical Activity", desc: "Playground games, trikes, gross motor obstacle courses" },
      { time: "12:00 PM – 12:30 PM", activity: "Healthy Lunch Time", desc: "Social lunch conversation, table manners, handwashing" },
      { time: "12:30 PM – 01:00 PM", activity: "Quiet Story Time & Nap Preparation", desc: "Dim lights, soothing audio story, settling on nap mats" },
      { time: "01:00 PM – 02:00 PM", activity: "Nap & Quiet Rest Time", desc: "Restful sleep; quiet tabletop books for non-nappers" },
      { time: "02:00 PM – 03:00 PM", activity: "Fine Arts Studio & Craft Exploration", desc: "Canvas painting, clay modeling, collage, and sketches" },
      { time: "03:00 PM – 03:30 PM", activity: "Afternoon Snack Time", desc: "Wholesome snack refuel and hydration" },
      { time: "03:30 PM – 04:30 PM", activity: "Science & Nature Exploration", desc: "STEM experiments, magnifying glass discovery, sensory bins" },
      { time: "04:30 PM – 05:30 PM", activity: "Educational Games & Free Play", desc: "Board games, dramatic play kitchen, building blocks" },
      { time: "05:30 PM – 06:00 PM", activity: "Wrap Up, Story & Pick-Up", desc: "Classroom tidy up, educator review, parent departure" },
    ],
  },

  // ==================== 3. BEFORE / AFTER SCHOOL CARE (K - GR 5) ====================
  {
    id: "before-after-school",
    slug: "before-after-school",
    route: "/programs/before-after-school",
    title: "Before & After School Program",
    shortTitle: "Before/After School Care",
    ageRange: "5 – 12 Years (Kindergarten to Grade 5)",
    category: "core",
    tagline: "Personalized attention for elementary students with safe school shuttle, homework club, and fine arts enrichment.",
    summary:
      "Annar ChildCare's Before/After School Program, designed for children aged 5-12 years, offers a comprehensive solution for busy families—providing a safe, nurturing, and engaging environment both before and after regular school hours.",
    description:
      "We currently offer dedicated before and after school transportation and care for families from Moody Elementary School and surrounding local elementary schools. Children enjoy homework help, STEAM projects, fine arts workshops, and energized outdoor recreation.",
    image: "/images/resource/about-15.jpg",
    headerBgImage: "/images/background/page-title-about-us-annar-childcare-center.webp",
    icon: "BookOpen",
    badge: "K – Grade 5",
    seats: "12 Licensed Spaces",
    hours: "Before: 7:00 AM – Bell | After: Bell – 6:00 PM",
    schedule: "Before School: 7:00 AM – School Bell | After School: School Bell – 6:00 PM",
    ccfriPrice: "$311 / month",
    fullPrice: "$631 / month",
    highlights: [
      "Safe, reliable pick-up and drop-off shuttle service to Moody Elementary School",
      "Dedicated Homework Club with staff coaching and quiet study space",
      "Full-day Pro-D Day care included with engaging fine arts & science projects",
      "Spacious outdoor sports, cooperative team challenges, and healthy snacks",
    ],
    curriculum: [
      {
        title: "Dedicated Homework Club & Academic Scaffolding",
        points: [
          "Quiet, distraction-free study environment equipped with reference books and supplies",
          "Educator assistance with reading logs, spelling, and math comprehension",
          "Encourages independent work habits and positive academic confidence",
        ],
      },
      {
        title: "Fine Arts & Creative Enrichment",
        points: [
          "Advanced studio art: mixed media, acrylic landscapes, and sculpted clay ceramics",
          "Creative DIY engineering, woodworking crafts, and seasonal holiday creations",
          "Open-ended drama, puppet productions, and collaborative murals",
        ],
      },
      {
        title: "STEM Challenges & Team Sports",
        points: [
          "Hands-on robotics kits, coding logic games, and physics construction blocks",
          "Outdoor group sports: soccer, basketball, relay challenges, and tag games",
          "Leadership development, mentorship of younger peers, and teamwork skills",
        ],
      },
    ],
    infrastructure: [
      {
        title: "The Happiness Shuttle Transport",
        desc: "Licensed, commercially insured school transport shuttle driven by certified staff for secure door-to-door school transit.",
        icon: "Bus",
      },
      {
        title: "Dedicated Homework & Study Lounge",
        desc: "Special quiet area with comfortable seating, study tables, and reference materials for focused homework completion.",
        icon: "BookOpen",
      },
      {
        title: "Pro-D Day Fine Arts Camps",
        desc: "All-day care coverage on provincial Pro-D school closures packed with exciting art masterclasses and outdoor park outings.",
        icon: "Calendar",
      },
      {
        title: "Spacious Outdoor Recreation Grounds",
        desc: "Fenced outdoor athletic turf ground perfect for energetic ball games, group sports, and fresh air relaxation after school.",
        icon: "Trees",
      },
    ],
    wellBeingPillars: [
      {
        title: "Stress-Free Transition",
        desc: "Seamless bridge between formal elementary classroom hours and home life with warm greeting and nutritious snacks.",
        icon: "Coffee",
      },
      {
        title: "Wholesome Snacks Provided",
        desc: "Energizing after-school snack station with fresh fruits, raw veggies, whole grain sandwiches, and fresh water.",
        icon: "Apple",
      },
      {
        title: "Positive Social Community",
        desc: "Supportive multi-age friendships where older children mentor younger peers in a family-like atmosphere.",
        icon: "Users",
      },
      {
        title: "Pro-D Day & Holiday Continuity",
        desc: "Full-day coverage available during school professional development days and early dismissals.",
        icon: "ShieldCheck",
      },
    ],
    dailySchedule: [
      { time: "07:00 AM – 08:30 AM", activity: "Morning Arrival & Brain Games", desc: "Warm greeting, light breakfast/snack, quiet board games" },
      { time: "08:30 AM – 08:45 AM", activity: "Shuttle Walk / Transit to School", desc: "Safe escorted transit to Moody Elementary morning bell" },
      { time: "08:45 AM – 03:00 PM", activity: "Elementary School Hours", desc: "Children attend regular school classes" },
      { time: "03:00 PM – 03:20 PM", activity: "School Bell Pick-Up & Shuttle Transit", desc: "Prompt greeting at school dismissal point and safe return to center" },
      { time: "03:20 PM – 03:45 PM", activity: "Nutritious Afternoon Snack & Social Chat", desc: "Healthy refuel, fresh fruit, crackers, sharing about their school day" },
      { time: "03:45 PM – 04:30 PM", activity: "Dedicated Homework Club", desc: "Quiet study lounge time with educator assistance and reading practice" },
      { time: "04:30 PM – 05:15 PM", activity: "Fine Arts, STEM & Outdoor Sports", desc: "Pottery, acrylic canvas art, robotics kits, and soccer on turf" },
      { time: "05:15 PM – 06:00 PM", activity: "Free Choice Clubs & Parent Pick-Up", desc: "Strategy board games, puzzles, quiet reading, departure with parents" },
    ],
  },
];

export const signatureServices = [
  {
    id: "shuttle",
    title: "Hop on the Happiness Shuttle",
    tagline: "Licensed School Pick-Up & Drop-Off",
    desc: "Wave goodbye to hectic commute mornings! Our cheerful, licensed school shuttle whisks your child safely to and from Moody Elementary School and local centers with comfort, punctuality, and certified drivers.",
    image: "/images/resource/daycare-bus.jpg",
    icon: "Bus",
    badge: "Safe Transportation",
  },
  {
    id: "kingdom",
    title: "Step into Kiddie Kingdom",
    tagline: "Interactive Indoor Dreamscape",
    desc: "A vibrant wonderland where every corner sparks curiosity. Filled with soft play foam blocks, dollhouses, Montessori sensory toys, dramatic play kitchens, and cozy reading nooks tailored for joyful growth.",
    image: "/images/resource/about-annar-daycare-center.jpg",
    icon: "Sparkles",
    badge: "Indoor Wonderland",
  },
  {
    id: "adventure-garden",
    title: "Adventure Garden Playland",
    tagline: "Secure Outdoor Turf & Nature Explorers",
    desc: "A lush, fully fenced playground where laughter and learning meet. Children explore the open sky, build sandcastles, race on mini trikes, examine plant life, and develop gross motor coordination in fresh air.",
    image: "/images/gallery/10.jpg",
    icon: "Trees",
    badge: "Outdoor Playground",
  },
];
