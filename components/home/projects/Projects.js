import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "StockX Marketplace Price Checker",
    imgSrc: "project-imgs/stockxbot.png",
    code: "https://github.com/oliver7073/stockxDiscord",
    projectLink: "",
    tech: ["Python", "Discord API", "StockX API", "Git"],
    description:
      "Discord bot that outputs information of products on Stockx",
    modalContent: (
      <>
        <p>
          Developed a Discord bot that works with the StockX and Discord API to return up to date statistics and details of a product on the StockX marketplace through Discord webhooks
        </p>
        <p>
          Worked in a team using Agile techniques to achieve daily and weekly goals
        </p>
        <p>
          Published the application in 20+ private organizations with 50K+ users
        </p>
      </>
    ),
  },
  {
    title: "Account Generator",
    imgSrc: "project-imgs/accountgenerator.jpg",
    code: "https://github.com/oliver7073/accoutngen",
    projectLink: "",
    tech: ["Python", "SeleniumLibrary", "ChromeDriver", "Git"],
    description:
      "Creates user accounts for web applications using Chrome and Selenium",
    modalContent: (
      <>
        <p>
          Developed an automatic system that accurately processes and creates several user accounts for web services using ChromeDriver
        </p>
        <p>
          Designed the automation using Python Selenium module to create the script
        </p>
        <p>
          Creates 1K+ user accounts in 10 minutes
        </p>
      </>
    ),
  },
  {
    title: "Package Tracker",
    imgSrc: "project-imgs/packagetracker.jpg",
    code: "https://github.com/oliver7073/packageTracker",
    projectLink: "",
    tech: ["Python", "AfterShip API", "Git"],
    description:
      "Application that fetches information of tracking numbers",
    modalContent: (
      <>
        <p>
          Developed an automatic system that can fetch up to date information of tracking numbers through AfterShip networking API
        </p>
        <p>
          Allows users to add, modify, and delete package details
        </p>
        <p>
          Supports 1K+ carriers worldwide
        </p>
      </>
    ),
  },
  {
    title: "This Portfolio website",
    imgSrc: "project-imgs/portfolio.jpg",
    code: "https://github.com/oliver7073/portfolio-v2",
    projectLink: "https://oliverpham.vercel.app/",
    tech: ["Javascript", "react.js",  "CSS"],
    description:
      "The portfolio website that you're looking at right now",
    modalContent: (
      <>
        <p>Idk what else to say.</p>
      </>
    ),
  },
];
