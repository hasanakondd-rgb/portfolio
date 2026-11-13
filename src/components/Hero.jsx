import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{personalInfo.name}</h1>
          <h2 className="hero__title">{personalInfo.title}</h2>
          <p className="hero__intro">{personalInfo.intro}</p>
          <div className="hero__buttons">
            <a href={personalInfo.cvLink} download className="btn btn--primary">
              Download CV
            </a>
            <a href="#projects" className="btn btn--outline">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img src={personalInfo.profileImage} alt={`${personalInfo.name} profile`} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
