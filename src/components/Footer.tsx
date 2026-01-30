

export default function Footer() {
  return (
    <footer className="w-full py-5 text-center text-xs text-slate-400 bg-slate-900">
  © {new Date().getFullYear()} David Ong. Alle Rechte vorbehalten
  <span className="mx-3">·</span>
  <a href="/impressum" className="hover:text-slate-200 transition-colors">Impressum</a>
  <span className="mx-3">·</span>
  <a href="/datenschutz" className="hover:text-slate-200 transition-colors">Datenschutz</a>
</footer>
  );
}
