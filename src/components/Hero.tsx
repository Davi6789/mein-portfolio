import backgroundImage from "../assets/5.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bbg-black/40"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl font-bold mb-250">
          Willkommen zu meinem Portfolio
        </h1>
        <p className="text-sm text-blue-400 mb-2">Hallo, ich bin</p>
        <h2 className="text-6xl font-bold mb-6">David Ong</h2>
        <p className="max-w-2xl text-gray-200 mx-auto text-lg leading-relaxed">
          Junior Frontend Developer | React & Tailwind CSS | DCI Digital Career
          Institute (DCI), Abschluss im September. Motiviert, praxisnah und mit
          Leidenschaft für sauberen Code und gutes UI.
        </p>
      </div>
    </section>
  );
}

export default Hero;
