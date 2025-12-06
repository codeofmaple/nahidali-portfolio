import ConstellationEffect from './components/ConstellationEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative font-poppins text-brand-text selection:bg-custom-cyan selection:text-custom-dark-blue">
      {/* Background Canvas */}
      <ConstellationEffect />

      <Navbar />

      <div className="relative z-10 flex flex-col gap-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;