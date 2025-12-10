import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../../data/projects.json";

export default function Projects() {
  return (
    <Section title="Projects">
      {/* Grid with padding/gap between cards */}
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            attributes={project.attributes}
            links={project.links}
          />
        ))}
        </div>
    </Section>
  );
}
