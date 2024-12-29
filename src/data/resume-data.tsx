import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Abyaz",
  initials: "MA",
  location: "Karachi, Pakistan, PAK",
  locationLink: "https://www.google.com/maps/place/Karachi",
  about:
    "Software Engineering Sophomore",
  summary: "I am a software engineering student learning the MERN stack. I am working with MongoDB, Express.js, React, and Node.js. I am very interested in backend development and want to get better at it. I enjoy learning new things and applying them to projects. I am excited to work on new ideas and meet others who love technology.",
  avatarUrl: "https://avatars.githubusercontent.com/u/58655276?v=4",
  personalWebsiteUrl: "https://www.abyaz.dev",
  contact: {
    email: "abyaz[dot]dev[at]gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MuhammadAbyaz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-abyaz-khalid-302172204/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/MuhammadAbyaz1",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "NED University Of Engineering And Technology",
      degree: "Bachelor of Software Engineering",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "ByteCorp",
      link: "https://www.bytecorp.io/",
      badges: [""],
      title: "Software Engineer Intern",
      logo: null,
      start: "August 2024",
      end: "October 2024",
      description: ""
    },
    {
      company: "ByteCorp",
      link: "https://www.bytecorp.io/",
      badges: [""],
      title: "Associate Software Engineer",
      logo: null,
      start: "November 2024",
      end: null,
      description: ""
    }
  ],
  skills: [
    "Python3",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "FastApi"
  ],
  projects: [
    {
      title: "Smart Attendance",
      techStack: [
        "Python3",
        "QT",
        "OpenCV",
        "Supabase",
      ],
      description:
        "The Smart Attendance is an innovative software application that utilizes cutting-edge facial recognition technology to effortlessly monitor attendance in diverse settings like schools, universities, and offices.",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/facial-recognition-based-attendance",
      },
    },
    {
      title: "MetaSphere",
      techStack: [
        "C#",
        "Unity3d",
      ],
      description:
        "MetaSphere is an innovative virtual environment designed to offer users an interactive and immersive experience",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/meta-sphere",
      },
    },
    {
      title: "InsightBot",
      techStack: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
      ],
      description: "InsightBot is designed to answer your queries, helps you to discover new ideas/information and many more!!",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/chat-bot",
      },
    },
  ],
} as const;
