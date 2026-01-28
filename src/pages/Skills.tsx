function Skills() {
  const skills = ['React.js', 'Nodejs', 'TailwindCSS', 'JavaScript', 'Bun ', 'Vite']

  return (
    <section id="skills" className="min-h-screen bg-gray-950 text-white py-80">
      <h3 className="text-6xl text-amber-400 font-bold text-center mb-50">Skills</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-gray-800 text-ms border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
