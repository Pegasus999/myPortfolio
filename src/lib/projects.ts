import type { project } from "@/types";
import ims from "../assets/images/ims/exports";
import myorder from "../assets/images/myorder/exports";
import pegatv from "../assets/images/pegatv/exports";
import pegatvweb from "../assets/images/pegatvweb/exports";
import weCash from "../assets/images/weCash/exports";
import rayto from "../assets/images/rayto/exports";
import zanime from "../assets/images/zanime/exports";
import stockgg from "../assets/images/stockgg/exports";
import pegawears from "../assets/images/pegawears/exports";
import pharmacy from "../assets/images/pharmacy/exports";
import wasali from "../assets/images/wasali/exports";

const projects: project[] = [
  {
    title: "Uber like App",
    repo: "",
    tools: [
      "Flutter",
      "Node Js",
      "Express",
      "Typescript",
      "Prisma",
      "PostgreSQL",
    ],
    img: wasali,
  },
  {
    title: "Dropshipping Management System",
    repo: "",
    tools: [
      "React Js",
      "Node Js",
      "Squelize",
      "PostgreSQL",
      "Styled Components",
    ],
    img: stockgg,
  },
  {
    title: "Money Transfer App",
    repo: "",
    tools: [
      "Flutter",
      "Node Js",
      "Express",
      "Typescript",
      "Prisma ORM",
      "PostgreSQL",
    ],
    img: weCash,
  },
  {
    title: "Anime Watching App",
    repo: "",
    tools: [
      "Flutter",
      "Node Js",
      "Express",
      "Typescript",
      "Prisma ORM",
      "PostgreSQL",
    ],
    img: zanime,
  },
  {
    title: "Bus Management App",
    repo: "",
    tools: [
      "Flutter",
      "Node Js",
      "Express",
      "Typescript",
      "Prisma ORM",
      "PostgreSQL",
    ],
    img: rayto,
  },
  {
    title: "inventory management system",
    repo: "",
    tools: ["Python", "Qt", "SQLite"],
    img: ims,
  },
  {
    title: "App inventory management system",
    repo: "",
    tools: ["Flutter", "SQLite"],
    img: myorder,
  },
  {
    title: "App for Watching Movies Online",
    repo: "",
    tools: ["Flutter ", "Web Scrapping"],
    img: pegatv,
  },
  {
    title: "Website for Watching Movies Online",
    repo: "",
    tools: ["React Js", "Web Scrapping"],
    img: pegatvweb,
  },
  {
    title: "Medicine Store , Pharmacy Management",
    repo: "",
    tools: ["Flutter", "Node Js", "Prisma ORM", "Typescript", "Posgtresql"],
    img: pharmacy,
  },
  {
    title: "Small business management",
    repo: "",
    tools: ["Flutter", "Node Js", "Prisma ORM", "Typescript", "Posgtresql"],
    img: pegawears,
  },
];

export default projects;
