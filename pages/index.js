import Navbar from '../components/Nav';
import Home from '../components/Home';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Album from '../components/Album';
import Contact from '../components/Contact';

export default function Index() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="scroll-mt-20 h-screen">
          <Home />
        </section>
        <section id="experience" className="scroll-mt-20 h-screen">
          <Experience />
        </section>
        <section id="projects" className="scroll-mt-20 h-screen">
          <Projects />
        </section>
        <section id="album" className="scroll-mt-20 h-screen">
          <Album />
        </section>
        <section id="contact" className="scroll-mt-20 h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}
