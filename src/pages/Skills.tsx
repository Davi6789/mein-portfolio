import backgroundImage from "../assets/background.jpg";

function Skills() {
  const skills = [
    "React.js",
    "Nodejs",
    "TailwindCSS",
    "JavaScript",
    "Bun ",
    "Vite",
    "HTML & CSS",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white py-80 bg-cover bg-center bg-norepeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <h3 className="text-6xl text-amber-400 font-bold text-center mb-50">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-4xl text-red-500 px-4 py-2 rounded-full bg-gray-800 text-ms border border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
