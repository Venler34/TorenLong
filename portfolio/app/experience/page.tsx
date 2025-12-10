import Section from "../components/Section";
import ExperienceItem from "../components/ExperienceItem";
import experienceData from "../../data/experience.json";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-6">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            company={item.company}
            role={item.role}
            year={item.year}
            details={item.details}
          />
        ))}
      </div>
    </Section>
  );
}
