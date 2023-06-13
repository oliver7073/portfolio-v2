import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "UnitedHealth Group",
    position: "Software Engineer Intern",
    time: "06/2023 - 08/2023",
    location: "Eden Prarie, MN",
    description:
      "- Streamlined the process of automating the creation of remediation instructions for critical security vulnerabilities in internal applications\n\n - Implemented AI-powered features on internal cloud security web app using React.js, JavaScript, and GraphQL to increase functionality\n\n - Contributed to an Agile team, utilizing Microsoft Teams to create and update team board to enhance communication and facilitate effective project management",
    tech: [
      "JavaScript",
      "GraphQL",
      "React.js",
      "Node.js",
      "Git",
      "GitHub",
      "Figma",
    ],
  },
];
