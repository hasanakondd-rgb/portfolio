import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

const ALL_FILTER = "All";


const filterOptions = [
  ALL_FILTER,
  ...new Set(projects.flatMap((project) => project.technologies)),
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const visibleProjects =
    activeFilter === ALL_FILTER
      ? projects
      : projects.filter((project) => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle eyebrow="My work" title="Projects" />

        <div className="filters" role="group" aria-label="Filter projects by technology">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`filters__button ${activeFilter === option ? "is-active" : ""}`}
              onClick={() => setActiveFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
