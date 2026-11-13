import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionTitle eyebrow="What I know" title="Skills" />

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="card skill">
              <div className="skill__header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div
                className="skill__bar"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={skill.name}
              >
                <div className="skill__fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
