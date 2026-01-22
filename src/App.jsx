// src/App.jsx
export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between bg-white shadow-sm sticky top-0">
        <span className="font-bold text-xl">David Ong</span>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-blue-500">Projekte</a>
          <a href="#contact" className="hover:text-blue-500">Kontakt</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900">Frontend Developer</h1>
        <p className="text-xl text-slate-600 mt-4">Ich lerne React, Tailwind und Bun.</p>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Meine Arbeit sehen
        </button>
      </header>

      {/* Projekt-Vorschau */}
      <section id="projects" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8">Projekte</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold">Projekt 1</h3>
            <p className="text-slate-600 mt-2">Beschreibung deines ersten coolen Projekts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}