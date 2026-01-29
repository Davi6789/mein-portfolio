import backgroundImage from "../assets/4.jpg";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-slate-950/60"></div>
      <div className="relative z-10 w-full px-4">
      <h2 className="text-white text-4xl font-bold mb-10 text-center">Kontakt</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4 bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 rounded text-white bg-slate-950 border border-slate-700 text-sm"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="px-3 py-2 rounded text-white bg-slate-950 border border-slate-700 text-sm"
        />
        <textarea
          placeholder="Nachricht"
          className="px-3 py-2 rounded text-white bg-slate-950 border border-slate-700 text-sm min-h-30"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400"
        >
          Senden
        </button>
      </form>
      </div>
    </section>
  )
}

export default Contact
