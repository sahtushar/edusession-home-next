import { JEE } from "./data/Jee";
import { NEETUG } from "./data/NeetUg";
import React from "react";
import { SpokenEnglish } from "./data/SpokenEnglish";

export const WhatsAppNo = +918237815800;
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
JEE Mains and Advanced(MH-CET and GCET),
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
        "Vocabulary Building",
        "Pronunciation",
        "Conversation Practice",
      ],
    },
    "JEE Mains and Advanced(MH-CET and GCET)": {
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
    subjectsData[course].Subjects.map((item, index) => {
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

export const activeCities = {
  goa: {
    state: "Goa",
  },
  pune: {
    state: "Maharashtra",
  },
  panaji: {
    state: "Goa",
  },
  margao: {
    state: "Goa",
  },
  mumbai:{
    state: "Maharashtra",
  },
  delhi:{
    state: "Delhi",
  },
  kolhapur:{
    state: "Maharashtra",
  },
  nashik:{
    state: "Maharashtra",
  },
  belgaum:{
    state:"Karnataka"
  }
};

export const getCourseData = {
  "jee-mains-and-advanced(mh-cet-and-gcet)":
    "JEE Mains and Advanced(MH-CET and GCET)",
  "neet-ug": "NEET UG",
  "spoken-english": "Spoken English",
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

];

export const getCourseDataResult = {
  "jee-mains-and-advanced(mh-cet-and-gcet)": JEE,
  "neet-ug":NEETUG,
  "spoken-english": SpokenEnglish
};

export const homepagestructuredata= {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": "1",
      "item": {
        "@type": "Course",
        "url": "https://edusession.live/courses?course=spoken-english",
        "name": "Spoken English",
        "description": "Online Live one to one Spoken English Class",
        "provider": {
          "@type": "Organization",
          "name": "Edusession",
          "sameAs": "https://edusession.live/"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "2",
      "item": {
        "@type": "Course",
        "url": "https://edusession.live/courses?course=jee-mains-and-advanced(mh-cet-and-gcet)",
        "name": "JEE Mains and Advanced (MH-CET and GCET) ",
        "description": "Online Live one to one JEE Mains and Advanced (MH-CET and GCET) ",
        "provider": {
          "@type": "Organization",
          "name": "Edusession",
          "sameAs": "https://edusession.live/"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "3",
      "item": {
        "@type": "Course",
        "url": "https://edusession.live/courses?course=neet-ug",
        "name": "NEET UG",
        "description": "Online Live one to one NEET UG",
        "provider": {
          "@type": "Organization",
          "name": "Edusession",
          "sameAs": "https://edusession.live/"
        }
      }
    }
  ]
}