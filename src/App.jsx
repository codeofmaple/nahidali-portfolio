import ConstellationEffect from './components/ConstellationEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="relative font-poppins text-brand-text selection:bg-custom-cyan selection:text-custom-dark-blue">
      {/* Background Canvas */}
      <ConstellationEffect />

      <Navbar />

      <div className="relative z-10 flex flex-col gap-10">
        <Hero />
        {/* You can create an About component similar to others or include it here */}
        <Skills />
        <Projects />
        <Contact />

        <footer className="bg-brand-dark border-t border-brand-border py-8 text-center text-gray-500 text-sm">
          <p>© 2025 MD NIROB SARKAR. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;