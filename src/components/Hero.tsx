function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-4"
    >
      <div className="mb-150">
        <h1 className="text-5xl">Willkommen zu meinem Portfolio</h1>
      </div>
      <p className="text-sm text-blue-400 mb-10">Hallo, ich bin</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">David Ong</h2>
      <p className="max-w-xl text-gray-300">
        Junior Frontend Developer | React & Tailwind CSS | DCI Digital Career
        Institute (DCI), Abschluss im September. Motiviert, praxisnah und mit
        Leidenschaft für sauberen Code und gutes UI.
      </p>
    </section>
  );
}

export default Hero;
