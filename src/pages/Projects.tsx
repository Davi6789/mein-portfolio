import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import backgroundImage from "../assets/2.jpg";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen py-80 text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h3 className="text-8xl font-bold text-center mb-80">Projekte</h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
