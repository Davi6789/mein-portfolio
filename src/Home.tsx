import Hero from "./components/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  return (
    <div className="min-h-screen  bg-gray-950 text-white">
      <Hero />
      <Projects />
      <Skills />
      <About/>
      <Contact />
      
    </div>
  );
}

export default Home;
