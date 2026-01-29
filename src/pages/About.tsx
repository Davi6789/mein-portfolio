import backgroundImage from "../assets/chieu.jpg";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen text-white flex flex-col justify-center py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-950/70"></div>
      <div className="relative z-10 px-6">
        <h3 className="text-6xl font-bold text-center p-60">Über mich</h3>
        <div className="space-y-8">
          <p className="max-w-3xl mx-auto text-gray-300 text-center">
            Ich bin ein motivierter Frontend Developer und studiere aktuell am
            Digital Career Institute (DCI), wo ich meine Weiterbildung im
            September abschließen werde. Mein Schwerpunkt liegt auf der
            Entwicklung moderner, performanter Webanwendungen mit React,
            Tailwind CSS und modernen JavaScript-Technologien. Besonderen Wert
            lege ich auf klares Design, sauberen, wartbaren Code und eine gute
            User Experience.
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 text-center">
            Aktuell suche ich nach Möglichkeiten, praktische Erfahrung zu
            sammeln und an realen Projekten mitzuwirken. Meine Skills baue ich
            aktiv aus – unter anderem durch den Aufbau moderner Landing Pages
            mit React und Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
