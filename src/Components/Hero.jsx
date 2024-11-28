import pp from "../assets/pp.jpg"; // Ganti dengan lokasi foto Anda

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-teal-400 text-white text-center"
    >
      <img
        src={pp}
        alt="Your Name"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold">Hi, im [Rijal Kamal Kadi]</h1>
      <p className="mt-4 text-xl max-w-2xl">
        I am a passionate developer with expertise in crafting modern web
        applications. My goal is to deliver impactful results through creative
        and innovative solutions.
      </p>
      <a
        href="/portfolio"
        className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        View My Portfolio
      </a>
    </section>
  );
};

export default Hero;
