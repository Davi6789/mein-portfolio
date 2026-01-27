interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <p className="text-xs text-gray-400 mb-2">
        Tech: {project.tech?.join(', ')}
      </p>
      {project.link && (
        <a
          href={project.link}
          className="text-blue-400 text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Projekt 
        </a>
      )}
    </article>
  )
}

export default ProjectCard
