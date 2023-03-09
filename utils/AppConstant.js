import { CA } from "./data/CA";
import { Class7 } from "./data/class7";
import { IELTS } from "./data/Ielts";
import { JEE } from "./data/Jee";
import { JEEFoundation } from "./data/JEEFoundation";
import { NEETUG } from "./data/NeetUg";
import React from "react";
import { SpokenEnglish } from "./data/SpokenEnglish";

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
  Class 7 (CBSE / ICSE / State Boards),
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
    "Class 7 (CBSE / ICSE / State Boards)": {
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
  "class-7": "Class 7 (CBSE / ICSE)",
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
  "class-7": Class7,
  "ca-foundation-intermediate": CA,
  "jee-foundation": JEEFoundation,
};

export const makeBold = (item, keyword) => {
  let res = item;
  keyword?.map((word) => {
    var re = new RegExp(word, "gi");
    res = res?.replace(re, "<strong>" + capitalize(word) + "</strong>");
  });
  return res;
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
  "Class 7 (CBSE / ICSE / State Boards)": "class-7",
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
  pune: {
    state: "Maharashtra",
    display: "Pune",
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
};

export const cityPaths = [
  { params: { city: "goa" } },
  { params: { city: "pune" } },
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
  {
    label: <span className="highlightedCourse">Class 7</span>,
    link: `/courses?course=${getCourseDataUrl["Class 7 (CBSE / ICSE / State Boards)"]}`,
    identifier: getCourseDataUrl["Class 7 (CBSE / ICSE / State Boards)"],
  },
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
