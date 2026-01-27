function Skills() {
  const skills = ['React.js', 'Nodejs', 'TailwindCSS', 'JavaScript', 'Bun ', 'Vite']

  return (
    <section id="skills" className="py-16 bg-gray-950 text-white px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-gray-800 text-sm border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
