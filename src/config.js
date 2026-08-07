// Portfolio Configuration
export const portfolioConfig = {
  name: "OMAR KHLIFI",
  title: "Creative Developer",
  tagline: "Crafting immersive 3D experiences, building scalable web applications, and leveraging AI to create innovative solutions.",
  profilePicture: "/ProfilePic.png",
  
  skills: [
    "3D Game Dev",
    "Full Stack",
    "AI Expert"
  ],
  
  about: {
    whoIAm: "I'm a passionate developer who brings ideas to life through code and creativity. With expertise spanning 3D game development, full-stack web applications, and cutting-edge AI solutions, I create experiences that push boundaries.",
    journey: "My journey combines technical excellence with artistic vision, resulting in projects that are not only functional but also visually stunning and user-friendly."
  },
  
  contact: {
    email: "omarkhlifi.contact@gmail.com",
    github: "https://github.com/omarkhlifi",
    linkedin: "https://linkedin.com/in/omarkhlifi4",
    youtube: "https://youtube.com/@OmarDevTN"
  }
};

// Education Data
export const educationData = [
  {
    id: 1,
    degree: "Fiber Optic Technician",
    field: "Fiber Optic Technology",
    institution: "Centre NEJMA de Formation Professionnelle",
    location: "Tunisia",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    description: "Professional training program specialized in fiber optic technology, including installation, splicing, testing, and network infrastructure maintenance.",
    achievements: [
      "Certified in fiber optic installation and splicing",
      "Trained in advanced network testing techniques",
      "Hands-on experience with industry-standard equipment"
    ]
  },
  {
    id: 2,
    degree: "IT Management Technician",
    field: "IT Management",
    institution: "CSFMT Hammam-Lif",
    location: "Tunisia",
    startDate: "2019",
    endDate: "2022",
    description: "Comprehensive IT management program covering computer systems, networking, technical support, and business technology solutions.",
    achievements: [
      "Specialized in IT infrastructure management",
      "Trained in hardware and software troubleshooting",
      "Developed expertise in business technology solutions"
    ]
  }
];

// Certifications Data
export const certificationsData = [
    {
      id: 1,
      name: "Teaching English as a Foreign Language",
      issuer: "TEFL Professional Institute - Teacher Record",
      date: "August 2026",
      credentialId: "TR3100501509",
      skills: [
        "Teaching English as a Foreign Language (TEFL)",
        "English as a Second Language (ESL)",
        "Lesson Planning",
        "Language Acquisition"
      ],
      logo: "🎓"
  },  
  {
    id: 2,
    name: "Fiber Optic Connection and Measurement Technician (D1, D2, D3)",
    issuer: "Nejma Professional Training School",
    date: "August 2024",
    credentialId: "12689817",
    skills: [
      "Fiber Optic Installation",
      "Fiber Optic Testing",
      "Fiber Optic Measurement",
      "Telecommunications",
      "Network Cabling"
    ],
    logo: "📡"
  }, 
  {
    id: 3,
    name: "EF SET English Certificate (B2 Upper Intermediate)",
    issuer: "EF Standard English Test (EF SET)",
    date: "February 2024",
    credentialId: "VuumvJ",
    skills: [
      "English Proficiency",
      "Reading",
      "Listening",
      "Business English",
      "Professional Communication"
    ],
    logo: "🗣️"
  },
  {
    id: 4,
    name: "English for Career Development Self-Paced MOOC",
    issuer: "Canvas Credentials (Badgr)",
    date: "July 2023",
    credentialId: "64ac6ce2779bed52b77fd5c3",
    skills: [
      "Professional English",
      "Career Development",
      "Workplace Communication",
      "Business English",
      "Employability Skills"
    ],
    logo: "🗣️"
  },
  {
      id: 5,
      name: "Professional Technician Qualification Certificate (Level III)",
      issuer: "Tunisian Agency for Vocational Training (ATFP), Tunisia",
      date: "February 2022",
      credentialId: "2022-14",
      skills: [
        "Management Information Systems",
        "IT Support",
        "Computer Systems",
        "Office Applications",
        "Technical Support"
      ],
      logo: "🎓"
    }
];

// Work Experience Data
export const experienceData = [
  {
    id: 1,
    position: "VR Specialist",
    company: "VR MANIA under Q8 Tech Company",
    location: "Kuwait",
    type: "Full-time",
    startDate: "Dec 2024",
    endDate: "Present",
    current: true,
    description: "Managing IT infrastructure and developing VR applications and interactive experiences using game development technologies.",
    responsibilities: [
      "Manage and maintain the company's IT infrastructure, including computers, networks, and technical support",
      "Develop and maintain VR applications and interactive experiences using game development technologies",
      "Design, develop, and maintain the company website and web-based solutions",
      "Create and edit promotional videos, trailers, and digital marketing content",
      "Troubleshoot hardware and software issues and provide technical support to staff and customers",
      "Install, configure, and maintain VR hardware and equipment",
      "Collaborate with the team on new products, events, and technology solutions",
      "Assist with graphic design, multimedia content creation, and social media assets",
      "Research and implement new technologies to improve business operations and customer experience"
    ],
    technologies: ["VR Development", "Unity", "Web Development", "Video Editing", "IT Management"]
  },
  {
    id: 2,
    position: "Fiber Optic Splicer",
    company: "Ste Entreprises Rabaoui Telecom",
    location: "Nabeul, Tunisia",
    type: "Internship",
    startDate: "19 Aug 2024",
    endDate: "19 Sept 2024",
    current: false,
    description: "Installing, splicing, and maintaining fiber optic cable infrastructure for telecom network deployments.",
    responsibilities: [
      "Install, splice, and terminate fiber optic cables",
      "Perform fiber optic testing, troubleshooting, and fault diagnosis",
      "Maintain and repair fiber optic network infrastructure",
      "Ensure compliance with safety and quality standards during installations",
      "Collaborate with field technicians to complete network deployment projects"
    ],
    technologies: ["Fiber Optics", "Network Testing", "Cable Splicing", "Fault Diagnosis"]
  },
  {
    id: 3,
    position: "Telecom Site Supervisor",
    company: "Rabaoui TELECOM",
    location: "Tunisia",
    type: "Full-time",
    startDate: "Feb 2023",
    endDate: "Jun 2024",
    current: false,
    description: "Supervised telecommunications infrastructure projects, coordinating field operations and ensuring work was completed safely, on schedule, and according to project specifications.",
    responsibilities: [
      "Supervised daily telecommunications installation and maintenance activities",
      "Coordinated field teams and subcontractors",
      "Monitored project progress and ensured compliance with technical requirements",
      "Prepared work reports and maintained project documentation",
      "Ensured workplace safety and quality standards",
      "Communicated with clients and project stakeholders"
    ],
    technologies: [
      "Telecommunications",
      "Project Supervision",
      "Field Operations",
      "Technical Documentation",
      "Quality Control"
    ]
  },
  {
    id: 4,
    position: "Computer Technician",
    company: "IT SERVICES CENTER (THALA)",
    location: "Tunisia",
    type: "Full-time",
    startDate: "Sep 2021",
    endDate: "Jan 2023",
    current: false,
    description: "Providing comprehensive IT support and maintenance services for computer hardware, software, and business applications.",
    responsibilities: [
      "Diagnose and repair computer hardware and software issues",
      "Install, configure, and maintain operating systems and business applications",
      "Manage relationships with customers and suppliers",
      "Provide technical support and maintenance services",
      "Work with accounting, printing, and office software",
      "Support Microsoft Office applications, including Word and Excel"
    ],
    technologies: ["Hardware Repair", "Windows OS", "Microsoft Office", "Technical Support"]
  },
  {
    id: 5,
    position: "Post Office Teller",
    company: "La Poste Tunisienne",
    location: "Tunisia",
    type: "Internship",
    startDate: "Feb 2020",
    endDate: "Jun 2021",
    current: false,
    description: "Completed multiple internship placements at La Poste Tunisienne, providing postal, financial, and electronic banking services while assisting with IT support and daily branch operations.",
    responsibilities: [
      "Processed postal, financial, and electronic banking transactions",
      "Provided customer service and support for postal and financial services",
      "Assisted customers with electronic banking services",
      "Supported IT equipment maintenance and basic technical troubleshooting",
      "Maintained accurate transaction records and followed operational procedures",
      "Collaborated with staff to ensure efficient daily branch operations"
    ],
    technologies: [
      "Banking Systems",
      "Customer Service",
      "Electronic Banking",
      "IT Support",
      "Microsoft Office",
      "Postal Services"
    ]
  }
];
