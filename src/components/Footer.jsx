import { personalInfo, socialLinks } from "../data/portfolioData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{personalInfo.name}</p>
        <ul className="footer__social">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__copy">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
