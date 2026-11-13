import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useTheme from "./hooks/useTheme";
import useActiveSection from "./hooks/useActiveSection";
import { navLinks } from "./data/portfolioData";

const sectionIds = navLinks.map((link) => link.id);

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
