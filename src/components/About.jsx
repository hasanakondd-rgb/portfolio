import SectionTitle from "./SectionTitle";
import { aboutInfo } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="Who I am" title="About Me" />

        <div className="about__grid">
          <div className="about__main">
            <p>{aboutInfo.description}</p>

            <h3>Education</h3>
            <ul className="about__education">
              {aboutInfo.education.map((item) => (
                <li key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>{item.institute}</span>
                </li>
              ))}
            </ul>

            <h3>Career Goals</h3>
            <p>{aboutInfo.goals}</p>
          </div>

          <aside className="card about__profile">
            <h3>Profile</h3>
            <dl>
              {aboutInfo.profile.map((item) => (
                <div key={item.label} className="about__profile-row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
