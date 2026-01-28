import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen py-80 bg-slate-950 text-white"
      >
        <h3 className="text-8xl font-bold text-center mb-80">Projekte</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
