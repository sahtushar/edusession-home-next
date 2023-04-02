import { CA } from "./data/CA";
import { Class6 } from "./data/class6";
import { Class7 } from "./data/class7";
import { Class9 } from "./data/class9";
import { IELTS } from "./data/Ielts";
import { JEE } from "./data/Jee";
import { JEEFoundation } from "./data/JEEFoundation";
import { NEETUG } from "./data/NeetUg";
import React from "react";
import { SpokenEnglish } from "./data/SpokenEnglish";

export const jokes = [
  "Why did the math book look so sad? Because it had too many problems.",
  "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
  "Why did the English teacher refuse to teach about numbers? They wanted to stick to the plot.",
  "Why was the history book always repeating itself? Because it had a lot of chapters.",
  "Why did the music teacher need a ladder? To reach the high notes.",
  "Why did the student bring a ladder to school? To reach the top of the class.",
  "Why did the geography teacher go on a date with the history teacher? They wanted to put their worlds together.",
  "Why did the teacher wear sunglasses to class? Because their students were too bright.",
  "Why did the biology teacher cross the road? To get to the other side of the food chain.",
  "Why did the physics teacher need a therapist? To work out their energy problems.",
  "Why did the teacher wear a waterproof jacket? Because their class was so good, it made them want to jump for joy!",
  "Why did the geography teacher break up with the history teacher? There was no future in it.",
  "What did the math teacher say when they finished their workout? 'I'm two-thirds of the way there!'",
  "Why did the teacher put a bell on their chair? Because they wanted to hear their lesson plan!",
  "What did the history teacher say when asked about their dating life? 'I'm still looking for my perfect match - I hear there's a lot of chemistry between us!'",
  "What's a teacher's favorite kind of sandwich? PB and J-okes!",
  "Why did the biology teacher go on a blind date? To see if they had chemistry!",
  "What do you call a teacher who doesn't let their students nap in class? A nap-timist!",
  "Why did the music teacher keep hitting themselves on the head with a tuning fork? Because they wanted to find the right note!",
];

export const WhatsAppNo = +918237815800;
// export const getCourseDataUrl = {
//   "JEE Mains and Advanced (MH-CET and GCET)":
//     "jee-mains-advanced-mhcet-gcet",
//   "NEET UG": "neet-ug",
//   "Spoken English": "spoken-english",
//   "IELTS (UKVI - Academic - General)": "ielts-ukvi-academic-general",
//   "Class 7 (CBSE / ICSE / State Boards)": "class-7",
// };
export const COURSES_GRADES = () => {
  const courses = `Class 6,
  Class 7,
Class 8,
Class 9,
Class 10,
Class 11,
Class 12,
JEE Foundation,
CA Foundation and Intermediate,
IELTS (UKVI - Academic - General),
Spoken English,
JEE Mains and Advanced (MH-CET and GCET),
NEET UG`;
  let arr = courses.split(",");
  let res = [];
  arr.map((item, index) => {
    res.push({
      label: item.trim(),
      value: item.trim(),
      index: index,
    });
  });
  return res;
};

export const removeSpacesAndReplaceSymbols = (str) => {
  let strCleaned = str?.toLowerCase()?.replace(/\s/g, "-").replace(/\(\)/g, "");
  return strCleaned;
};

export const SUBJECTS = (course) => {
  let subjectsData = {
    "Class 6": {
      Subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Sanskrit",
      ],
    },
    "Class 7": {
      Subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Sanskrit",
      ],
    },
    "Class 8": {
      Subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Hindi",
        "Sanskrit",
      ],
    },
    "Class 9": {
      Subjects: [
        "English",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies (History, Geography, Civics)",
        "Hindi",
        "Sanskrit",
      ],
    },
    "Class 10": {
      Subjects: [
        "English",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies (History, Geography, Civics)",
        "Hindi",
        "Sanskrit",
      ],
    },
    "Class 11": {
      Subjects: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Accountancy",
        "Business Studies",
        "Economics",
        "Informatics Practices",
        "Computer Science",
      ],
    },
    "Class 12": {
      Subjects: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Accountancy",
        "Business Studies",
        "Economics",
        "Informatics Practices",
        "Computer Science",
      ],
    },
    "JEE Foundation": {
      Subjects: ["Mathematics", "Physics", "Chemistry"],
    },
    "CA Foundation and Intermediate": {
      Subjects: [
        "Accounting",
        "Mercantile Law",
        "General Economics",
        "Quantitative Aptitude",
      ],
    },
    "IELTS (UKVI - Academic - General)": {
      Subjects: [
        "Listening",

        "Reading",

        "Writing",

        "Speaking",

        "Grammar",

        "Vocabulary",

        "Pronunciation",

        "Test Strategies",
      ],
    },
    "Spoken English": {
      Subjects: [
        "Basic Grammar",
        "Pronunciation",
        "Personality Development",
        "Mock interviews",
        "Vocabulary",
        "Professional Development",
      ],
    },
    "JEE Mains and Advanced (MH-CET and GCET)": {
      Subjects: ["Mathematics", "Physics", "Chemistry"],
    },
    "NEET UG": {
      Subjects: ["Physics", "Chemistry", "Biology (Botany and Zoology)"],
    },
  };
  let res = [
    {
      label: "All Subjects/Topics Covered",
      value: "All Subjects/Topics Covered",
      index: 0,
    },
  ];

  subjectsData[course] &&
    subjectsData[course]?.Subjects?.map((item, index) => {
      res.push({
        label: item.trim(),
        value: item.trim(),
        index: index + 1,
      });
    });
  return res;
};

export const verifyIsUserAuthenticated = () => {
  if (typeof window !== "undefined") {
    if (
      localStorage.getItem("auth-token") &&
      localStorage.getItem("username")
    ) {
      return true;
    }
  }
  return false;
};
export const setLoginItems = (res, window, localStorage) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth-token", res.data.accessToken);
    localStorage.setItem("username", res.data.email);
    localStorage.setItem("mobile", res.data.mobile);
    localStorage.setItem("name", res.data.name);
  }
};

export const getLoginItems = (window) => {
  if (typeof window !== "undefined") {
    return {
      accessToken: localStorage.getItem("auth-token"),
      email: localStorage.getItem("username"),
      mobile: localStorage.getItem("mobile"),
      name: localStorage.getItem("name"),
    };
  }
};
export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export const getCourseData = {
  "jee-mains-advanced-mhcet-gcet": "JEE Mains and Advanced (MH-CET and GCET)",
  "neet-ug": "NEET UG",
  "spoken-english": "Spoken English",
  "ielts-ukvi-academic-general": "IELTS (UKVI - Academic - General)",
  "class-7": "Class 7",
  "ca-foundation-intermediate": "CA Foundation and Intermediate",
  "jee-foundation": "JEE Foundation",
  "class-6": "Class 6",
  "class-8": "Class 8",
  "class-9": "Class 9",
  "class-10": "Class 10",
  "class-11": "Class 11",
  "class-12": "Class 12",
};

export const getCourseDataResult = {
  "jee-mains-advanced-mhcet-gcet": JEE,
  "neet-ug": NEETUG,
  "spoken-english": SpokenEnglish,
  "ielts-ukvi-academic-general": IELTS,
  "ca-foundation-intermediate": CA,
  "jee-foundation": JEEFoundation,
  "class-6": Class6,
  "class-9": Class9,
};

export const makeBold = (item, keyword) => {
  let res = item;
  keyword?.map((word) => {
    var re = new RegExp(word, "gi");
    res = res?.replace(re, "<strong>" + capitalize(word) + "</strong>");
  });
  return res;
};

export const getCourseMetaTags = {
  "spoken-english": {
    title: "Best Spoken English Classes Online | Edusession",
    desc: "Edusession offers Best Spoken English Classes Online - Live One to One Personalised Class for English Speaking with a level-wise training.",
  },
};
export const getCourseKeywords = {
  // "jee-mains-advanced-mhcet-gcet": JEE,
  // "neet-ug": NEETUG,
  "spoken-english": {
    courseContentWords: [
      "Spoken English",
      "Grammar",
      "Online",
      "Vocabulary",
      "one-on-one",
      "classroom",
      "personalized",
      "fluency",
      "english",
      "pronunciation",
      "Edusession",
      "live",
    ],
    subheaderWords: [
      "Spoken English",
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
    ],
    sectionHeaderDesc: [
      "Spoken English",
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Grammar",
      "Vocabulary",
      "pronunciation",
      "Edusession",
      "live",
    ],
  },
  "jee-mains-advanced-mhcet-gcet": {
    courseContentWords: [
      "Online",
      "one-on-one",
      "classroom",
      "personalized",
      "Edusession",
      "live",
      "Mains",
      "MH-CET",
      "JEE",
      "Advanced",
      "one-to-one",
      "parent-teacher",
      "post-exam",
      "Mock tests",
      "motivational",
    ],
    subheaderWords: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "Mains",
      "MH-CET",
      "JEE",
      "Advanced",
      "GCET",
      "personalized",
    ],
    sectionHeaderDesc: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "live",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Mains",
      "MH-CET",
      "JEE",
      "Advanced",
      "GCET",
    ],
  },
  "neet-ug": {
    courseContentWords: [
      "Online",
      "one-on-one",
      "classroom",
      "personalized",
      "Edusession",
      "live",
      "one-to-one",
      "parent-teacher",
      "post-exam",
      "Mock tests",
      "motivational",
      "NEET UG",
      "NEET",
      "UG",
      "NEET-UG",
      "study material",
    ],
    subheaderWords: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "personalized",
      "NEET UG",
      "NEET",
    ],
    sectionHeaderDesc: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "live",
      "Physics",
      "Chemistry",
      "Mathematics",
      "NEET UG",
      "NEET",
    ],
  },
  "class-6": {
    courseContentWords: [
      "Online",
      "one-on-one",
      "classroom",
      "personalized",
      "Edusession",
      "live",
      "one-to-one",
      "parent-teacher",
      "post-exam",
      "Mock tests",
      "motivational",
      "English",
      "Mathematics",
      "Science",
      "Social",
      "Hindi",
      "Civics",
      "History",
      "Computer",
      "Geography",
      "study material",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "deliver",
      "Environmental",
      "Applications",
      "Class 6",
    ],
    subheaderWords: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "personalized",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "Class 6",
      "Doubt clearance",
    ],
    sectionHeaderDesc: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "live",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "online",
      "learning",
      "platform",
      "Class 6",
    ],
  },
  "class-9": {
    courseContentWords: [
      "Online",
      "one-on-one",
      "classroom",
      "personalized",
      "Edusession",
      "live",
      "one-to-one",
      "parent-teacher",
      "post-exam",
      "Mock tests",
      "motivational",
      "English",
      "Mathematics",
      "Science",
      "Socialism",
      "Social",
      "Hindi",
      "Civics",
      "History",
      "Computer",
      "Geography",
      "study material",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "deliver",
      "Environmental",
      "Applications",
      "Class 9",
    ],
    subheaderWords: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "personalized",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "Class 9",
      "Doubt clearance",
    ],
    sectionHeaderDesc: [
      "one-on-one",
      "one-to-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "live",
      "CBSE",
      "ICSE",
      "State",
      "Boards",
      "online",
      "learning",
      "platform",
      "Class 6",
    ],
  },
  homepage: {
    subheaderWords: [
      "Spoken English",
      "one-on-one",
      "1-on-1",
      "online tutors",
      "CBSE",
      "ICSE",
      "JEE",
      "NEET",
    ],
  },

  "ielts-ukvi-academic-general": {
    courseContentWords: [
      "Online",
      "one-on-one",
      "classroom",
      "personalized",
      "Edusession",
      "live",
      "one-to-one",
      "parent-teacher",
      "post-exam",
      "Mock tests",
      "motivational",
      "IELTS",
      "study material",
      "UKVI",
      "Academic",
      "General",
      "one on one",
      "one to one",
      "1 on 1",
      "reading",
      "writing",
      "listening",
      "speaking",
      "English",
      "work",
      "abroad",
      "UK",
      "universities",
      "colleges",
      "videos",
      "quizzes",
      "exercises",
      "candidates",
      "instructors",
    ],
    subheaderWords: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "personalized",
      "IELTS",
      "UKVI",
      "Academic",
      "General",
      "Doubt clearance",
      "one to one",
    ],
    sectionHeaderDesc: [
      "one-on-one",
      "1-on-1",
      "online tutors",
      "Edusession",
      "live",
      "IELTS",
      "UKVI",
      "Academic",
      "General",
      "English",
      "International",
    ],
  },
  // "ielts-ukvi-academic-general": IELTS,
  // "class-7": Class7,
  // "ca-foundation-intermediate": CA,
  // "jee-foundation": JEEFoundation,
};

export const getCourseDataUrl = {
  "JEE Mains and Advanced (MH-CET and GCET)": "jee-mains-advanced-mhcet-gcet",
  "NEET UG": "neet-ug",
  "Spoken English": "spoken-english",
  "IELTS (UKVI - Academic - General)": "ielts-ukvi-academic-general",
  "Class 7": "class-7",
  "CA Foundation and Intermediate": "ca-foundation-intermediate",
  "JEE Foundation": "jee-foundation",
  "Class 6": "class-6",
  "Class 8": "class-8",
  "Class 9": "class-9",
  "Class 10": "class-10",
  "Class 11": "class-11",
  "Class 12": "class-12",
};

export const URL = "https://edusession.live/";
export const canonicalPath = (path) => {
  return `https://edusession.live${path}`;
};
export const coursesPaths = [
  { params: { course: "neet-ug" } },
  { params: { course: "jee-mains-and-advanced(mh-cet-and-gcet)" } },
  { params: { course: "spoken-english" } },
];

export const activeCities = {
  goa: {
    state: "Goa",
    display: "Goa",
  },
  panaji: {
    state: "Goa",
    display: "Panajim - Goa",
  },
  margao: {
    state: "Goa",
    display: "Margao - Goa",
  },
  morjim: {
    state: "Goa",
    display: "Morjim - Goa",
  },
  mormugao: {
    state: "Goa",
    display: "Mormugao - Goa",
  },
  mapusa: {
    state: "Goa",
    display: "Mapusa - Goa",
  },
  dabolim: {
    state: "Goa",
    display: "Dabolim - Goa",
  },
  vasco: {
    state: "Goa",
    display: "Vasco da Gama - Goa",
  },
  ponda: {
    state: "Goa",
    display: "Ponda - Goa",
  },
  pune: {
    state: "Maharashtra",
    display: "Pune",
  },
  "pimpri-chinchwad": {
    state: "Maharashtra",
    display: "Pimpri - Chinchwad - Pune",
  },
  mumbai: {
    state: "Maharashtra",
    display: "Mumbai",
  },
  delhi: {
    state: "Delhi",
    display: "Delhi",
  },
  kolhapur: {
    state: "Maharashtra",
    display: "Kolhapur",
  },
  nashik: {
    state: "Maharashtra",
    display: "Nashik",
  },
  belgaum: {
    state: "Karnataka",
    display: "Belgaum",
  },
  "gangtok-sikkim": {
    state: "Sikkim",
    display: "Gangtok - Sikkim",
  },
  malda: {
    state: "West Bengal",
    display: "Malda - West Bengal",
  },
};

export const cityPaths = [
  { params: { city: "goa" } },
  { params: { city: "pune" } },
  { params: { city: "pimpri-chinchwad" } },
  { params: { city: "mumbai" } },
  { params: { city: "delhi" } },
  { params: { city: "kolhapur" } },
  { params: { city: "nashik" } },
  { params: { city: "belgaum" } },
  { params: { city: "panaji" } },
  { params: { city: "margao" } },
  { params: { city: "morjim" } },
  { params: { city: "mapusa" } },
  { params: { city: "mormugao" } },
  { params: { city: "dabolim" } },
  { params: { city: "vasco" } },
  { params: { city: "ponda" } },
  { params: { city: "gangtok-sikkim" } },
  { params: { city: "malda" } },
];

export const adminCreds = [
  {
    username: "admin@edusession.live",
  },
];
export const isAdminCred = (username) => {
  return adminCreds.find((item) => item.username == username);
};
export const homepagestructuredata = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: "1",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=spoken-english",
        name: "Spoken English",
        description: "Online Live one to one Spoken English Class",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "2",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=jee-mains-advanced-mhcet-gcet",
        name: "JEE Mains and Advanced (MH-CET and GCET) ",
        description:
          "Online Live one to one JEE Mains and Advanced (MH-CET and GCET) ",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "3",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=neet-ug",
        name: "NEET UG",
        description: "Online Live one to one NEET UG",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "4",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=jee-foundation",
        name: "NEET UG",
        description: "Online Live one to one JEE Foundation Classes",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "5",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=ca-foundation-intermediate",
        name: "NEET UG",
        description:
          "Online Live one to one CA Foundation and Intermediate Classes",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "6",
      item: {
        "@type": "Course",
        url: "https://edusession.live/courses?course=ielts-ukvi-academic-general",
        name: "IELTS (UKVI - Academic - General)",
        description:
          "Online Live one to one IELTS (UKVI - Academic - General) Class",
        provider: {
          "@type": "Organization",
          name: "Edusession",
          sameAs: "https://edusession.live/",
        },
      },
    },
  ],
};

export const highlightedCourseList = [
  {
    label: <span className="highlightedCourse">JEE</span>,
    link: `/courses?course=${getCourseDataUrl["JEE Mains and Advanced (MH-CET and GCET)"]}`,
    identifier: getCourseDataUrl["JEE Mains and Advanced (MH-CET and GCET)"],
  },
  {
    label: <span className="highlightedCourse">NEET</span>,
    link: `/courses?course=${getCourseDataUrl["NEET UG"]}`,
    identifier: getCourseDataUrl["NEET UG"],
  },
  {
    label: <span className="highlightedCourse">Spoken English</span>,
    link: `/courses?course=${getCourseDataUrl["Spoken English"]}`,
    identifier: getCourseDataUrl["Spoken English"],
  },
  {
    label: <span className="highlightedCourse">IELTS</span>,
    link: `/courses?course=${getCourseDataUrl["IELTS (UKVI - Academic - General)"]}`,
    identifier: getCourseDataUrl["IELTS (UKVI - Academic - General)"],
  },
  // {
  //   label: <span className="highlightedCourse">Class 7</span>,
  //   link: `/courses?course=${getCourseDataUrl["Class 7 (CBSE / ICSE / State Boards)"]}`,
  //   identifier: getCourseDataUrl["Class 7 (CBSE / ICSE / State Boards)"],
  // },
  {
    label: <span className="highlightedCourse">CA</span>,
    link: `/courses?course=${getCourseDataUrl["CA Foundation and Intermediate"]}`,
    identifier: getCourseDataUrl["CA Foundation and Intermediate"],
  },
  {
    label: <span className="highlightedCourse">JEE Foundation</span>,
    link: `/courses?course=${getCourseDataUrl["JEE Foundation"]}`,
    identifier: getCourseDataUrl["JEE Foundation"],
  },
  {
    label: <span className="highlightedCourse">Class 6</span>,
    link: `/courses?course=${getCourseDataUrl["Class 6"]}`,
    identifier: getCourseDataUrl["Class 6"],
  },
  {
    label: <span className="highlightedCourse">Class 9</span>,
    link: `/courses?course=${getCourseDataUrl["Class 9"]}`,
    identifier: getCourseDataUrl["Class 9"],
  },
];
export const checkauthfailed = (err, setIsLoading, history) => {
  if (`${err?.response?.status}`?.match(/40/)) {
    if (history) history.push("/sign-in");
    localStorage.removeItem("auth-token");
    localStorage.removeItem("username");
    localStorage.removeItem("mobile");
    setIsLoading(false);
    return true;
  }
};
