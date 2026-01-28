import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function Home() {
  return (
    <div className="min-h-screen  bg-gray-950 text-white">
      <Hero />
     {/*  <Projects />
      <Skills />
      */} 
    </div>
  );
}

export default Home;
