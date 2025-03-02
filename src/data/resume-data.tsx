import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Abyaz",
  initials: "MA",
  location: "Karachi, Pakistan, PAK",
  locationLink: "https://www.google.com/maps/place/Karachi",
  about: "Software Engineering Sophomore",
  summary:
    "I am a software engineering student with a focus on backend development. I am learning Go, FastAPI, and NestJS to build APIs. On the frontend, I am exploring React, and Next.js for web development. I am learning about cloud services like AWS (CDK, S3, Lambda) and experimenting with event-driven architectures. I enjoy learning new things and applying them to projects. I am excited to work on new ideas and meet others who love technology.",
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
        url: "https://www.linkedin.com/in/muhammad-abyaz/",
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
      title: "Associate Software Engineer",
      logo: null,
      start: "November 2024",
      end: null,
      description: "",
    },
    {
      company: "ByteCorp",
      link: "https://www.bytecorp.io/",
      badges: [""],
      title: "Software Engineer Intern",
      logo: null,
      start: "August 2024",
      end: "October 2024",
      description: "",
    },
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
    "FastApi",
    "Golang",
    "NextJS",
    "NestJS",
    "AWS",
  ],
  projects: [
    {
      title: "Smart Attendance",
      techStack: ["Python3", "QT", "OpenCV", "Supabase"],
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
      techStack: ["C#", "Unity3d"],
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
      techStack: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      description:
        "InsightBot is designed to answer your queries, helps you to discover new ideas/information and many more!!",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/chat-bot",
      },
    },
    {
      title: "SummarizerAI",
      techStack: ["Golang", "Python", "AWS"],
      description:
        "Summarizer-AI is an API-based service that provides PDF summarization using serverless architecture. Built with Go and AWS CDK, it leverages modern cloud technologies to deliver efficient and scalable solutions.",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/summarizer-ai",
      },
    },
    {
      title: "WardrobeCare",
      techStack: ["NextJS", "HTML", "TailwindCSS", "TypeScript"],
      description:
        "Wardrobe Care is a platform designed to promote sustainability by simplifying the donation and disposal of unused clothes. It connects donors with registered NGOs while providing incentives through partnerships with clothing brands.",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/wardrobe-care",
      },
    },
    {
      title: "Task Management API",
      techStack: ["NestJS", "TypeScript"],
      description: "A basic task management API made using NestJS",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/MuhammadAbyaz/task-management-app",
      },
    },
  ],
} as const;
