// ============================================================
// K9 FITNESS MADHAPAR — SITE CONFIGURATION
// Edit this file to update contact, pricing, trainers, etc.
// ============================================================

export const siteConfig = {
  branches: [
    {
      name: "Madhapar Branch",
      address: "K9 Fitness Madhapar - Unisex GYM, Near Gandhi Circle, Junavas, Madhapar, Bhuj, Gujarat 370020",
      mapUrl: "https://www.google.com/maps/search/K9+Fitness+Madhapar+Gandhi+Circle"
    },
    {
      name: "Bhuj Branch",
      address: "K9 Fitness - Unisex GYM, Near Domino's Pizza Bhuj-Mirzapar Road, Near R R Lalan College, Bhuj, Gujarat 370001",
      mapUrl: "https://www.google.com/maps/search/K9+Fitness+Bhuj+Domino's+Pizza"
    }
  ],
  phone: "+91 8154029369",
  whatsapp: "918154029369",
  instagram: "k9_fitness_madhapar",
  instagramUrl: "https://www.instagram.com/k9_fitness_madhapar/",
  email: "k9fitnessmadhapar@gmail.com",

  stats: [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 3700, suffix: "+", label: "Happy Clients" },
    { value: 470, suffix: "+", label: "Transformations" },
    { value: 365, suffix: "", label: "Days Open/Year" },
  ],

  programs: [
    {
      id: "weight-training",
      title: "Weight Training",
      description: "Build raw power with our Olympic lifting platforms, free weights, and premium machine stations.",
      tag: "STRENGTH",
      color: "#FF6B00",
    },
    {
      id: "cardio",
      title: "Cardio Zone",
      description: "State-of-the-art treadmills, cycles, and ellipticals for every endurance goal.",
      tag: "ENDURANCE",
      color: "#FF3D00",
    },
    {
      id: "crossfit",
      title: "CrossFit",
      description: "High-intensity functional movements. Burn fat, build muscle, conquer every workout.",
      tag: "FUNCTIONAL",
      color: "#FF6B00",
    },
    {
      id: "hiit",
      title: "HIIT Training",
      description: "Maximum calorie burn in minimum time. Perfect for busy professionals.",
      tag: "FAT BURN",
      color: "#E64A19",
    },
    {
      id: "yoga",
      title: "Yoga & Flexibility",
      description: "Restore balance, improve mobility, and build a stronger core with our expert instructors.",
      tag: "WELLNESS",
      color: "#FF6B00",
    },
    {
      id: "zumba",
      title: "Zumba",
      description: "Dance your way to fitness. High-energy classes with K9's certified Zumba instructor.",
      tag: "DANCE",
      color: "#FF3D00",
    },
  ],

  trainers: [
    {
      id: "trainer-1",
      name: "Trainer 01",
      role: "Head Trainer & Founder",
      specialty: "Muscle Gain & Strength",
      experience: "10+ Years",
      rating: 5,
      tags: ["Strength", "Bodybuilding", "Nutrition"],
      image: null,
    },
    {
      id: "trainer-2",
      name: "Trainer 02",
      role: "Female Certified Trainer",
      specialty: "Weight Loss & Toning",
      experience: "5+ Years",
      rating: 5,
      tags: ["Weight Loss", "Yoga", "Zumba", "HIIT"],
      image: null,
      isFemale: true,
    },
    {
      id: "trainer-3",
      name: "Trainer 03",
      role: "Crossfit & Cardio Coach",
      specialty: "CrossFit & Endurance",
      experience: "4+ Years",
      rating: 5,
      tags: ["CrossFit", "Cardio", "HIIT"],
      image: null,
    },
  ],

  membership: [
    {
      tier: "Standard",
      price: "₹999",
      period: "/month",
      color: "#888",
      features: [
        "Full Gym Access",
        "Locker Room",
        "Basic Fitness Assessment",
        "2 Guest Passes/Month",
        "Open 365 Days",
      ],
      popular: false,
    },
    {
      tier: "Pro",
      price: "₹2,499",
      period: "/month",
      color: "#FF6B00",
      features: [
        "Everything in Standard",
        "4 PT Sessions/Month",
        "Nutrition Guidance",
        "Body Composition Analysis",
        "Priority Booking",
        "Transformation Tracking",
      ],
      popular: true,
    },
    {
      tier: "Elite",
      price: "₹4,999",
      period: "/month",
      color: "#FFD700",
      features: [
        "Everything in Pro",
        "Unlimited PT Sessions",
        "Personalized Diet Plan",
        "Supplement Discounts 20%",
        "Corporate Access",
        "24/7 Trainer WhatsApp Support",
        "VIP Badge",
      ],
      popular: false,
    },
  ],

  supplements: [
    { id: "whey", name: "Whey Protein", price: "₹2,800", weight: "1kg", color: "#FF6B00", description: "Premium whey isolate for fast muscle recovery" },
    { id: "creatine", name: "Creatine Monohydrate", price: "₹799", weight: "300g", color: "#E64A19", description: "Pure creatine for explosive strength gains" },
    { id: "preworkout", name: "Pre-Workout", price: "₹1,299", weight: "250g", color: "#FF3D00", description: "High-stim formula for maximum energy and focus" },
    { id: "bcaa", name: "BCAA Complex", price: "₹1,099", weight: "400g", color: "#FF6B00", description: "Essential amino acids for endurance and recovery" },
  ],

  // Gym Traffic Schedule — edit times as needed
  // Scale: 0 = empty, 10 = peak
  gymTraffic: {
    monday: [1, 1, 1, 1, 1, 1, 8, 9, 7, 5, 4, 3, 2, 3, 4, 5, 7, 9, 10, 8, 5, 3, 1, 1],
    tuesday: [1, 1, 1, 1, 1, 1, 8, 9, 7, 5, 4, 3, 2, 3, 4, 5, 7, 9, 10, 8, 5, 3, 1, 1],
    wednesday: [1, 1, 1, 1, 1, 1, 8, 9, 7, 5, 4, 3, 2, 3, 4, 5, 7, 9, 10, 8, 5, 3, 1, 1],
    thursday: [1, 1, 1, 1, 1, 1, 8, 9, 7, 5, 4, 3, 2, 3, 4, 5, 7, 9, 10, 8, 5, 3, 1, 1],
    friday: [1, 1, 1, 1, 1, 1, 8, 9, 7, 5, 4, 3, 2, 3, 4, 5, 7, 9, 10, 8, 5, 3, 1, 1],
    saturday: [1, 1, 1, 1, 1, 1, 9, 10, 8, 6, 5, 4, 3, 4, 5, 6, 7, 9, 9, 7, 4, 2, 1, 1],
    sunday: [1, 1, 1, 1, 1, 1, 7, 9, 8, 6, 5, 4, 3, 3, 4, 5, 6, 8, 8, 6, 4, 2, 1, 1],
  },

  timeSlots: [
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
  ],

  corporateBenefits: [
    { icon: "🏋️", title: "Group Sessions", desc: "Customised group fitness sessions for your entire team" },
    { icon: "📊", title: "Health Reports", desc: "Monthly fitness progress reports for HR & management" },
    { icon: "💳", title: "Bulk Discounts", desc: "Special corporate rates — up to 40% off standard pricing" },
    { icon: "⏰", title: "Flexible Timings", desc: "Sessions scheduled around your business hours" },
    { icon: "👩‍⚕️", title: "Wellness Workshops", desc: "Nutrition, posture, and stress-relief workshops" },
    { icon: "🤝", title: "Dedicated Manager", desc: "Single point of contact for all corporate queries" },
  ],
};

export type SiteConfig = typeof siteConfig;
