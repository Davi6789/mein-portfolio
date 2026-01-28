const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-slate-950 text-white py-90">
      <h2 className="text-4xl font-bold mb-20 text-center">Kontakt</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"
        />
        <textarea
          placeholder="Nachricht"
          className="px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm min-h-30"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400"
        >
          Senden
        </button>
      </form>
    </section>
  )
}

export default Contact
