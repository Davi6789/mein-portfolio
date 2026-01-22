export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Lass uns vernetzen</h2>
          <p className="text-slate-600 mt-4 text-lg">Hinterlasse eine Nachricht oder besuche meine Profile.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Linke Seite: Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Kontaktinfos</h3>
            
            {/* E-Mail Direkt-Link */}
            <a href="mailto:deine-email@beispiel.de" 
               className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-blue-500 group">
              <span className="text-2xl mr-4 group-hover:scale-110 transition">✉️</span>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold">E-Mail</p>
                <p className="text-slate-900 font-medium">deine-email@beispiel.de</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/dein-profil" target="_blank" rel="noreferrer"
               className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-blue-700 group">
              <span className="text-2xl mr-4 group-hover:scale-110 transition">🔗</span>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold">LinkedIn</p>
                <p className="text-slate-900 font-medium">linkedin.com/in/dein-name</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/dein-username" target="_blank" rel="noreferrer"
               className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-slate-800 group">
              <span className="text-2xl mr-4 group-hover:scale-110 transition">💻</span>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold">GitHub</p>
                <p className="text-slate-900 font-medium">github.com/dein-username</p>
              </div>
            </a>
          </div>

          {/* Rechte Seite: Kontaktformular */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="DEIN-SCHLÜSSEL-VON-WEB3FORMS" />
              
              <div>
                <input type="text" name="name" placeholder="Name" required 
                  className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              
              <div>
                <input type="email" name="email" placeholder="Deine E-Mail" required 
                  className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              
              <div>
                <textarea name="message" rows="4" placeholder="Deine Nachricht" required 
                  className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>

              <button type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition">
                Nachricht senden
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}