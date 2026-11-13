function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;

  return (
    <article className="card project">
      <img src={image} alt={`${title} screenshot`} className="project__image" loading="lazy" />
      <div className="project__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project__buttons">
          <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary btn--small">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--small">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
