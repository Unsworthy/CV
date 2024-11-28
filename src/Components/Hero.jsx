import pp from "../assets/pp.jpg"; // Ganti dengan lokasi foto Anda

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-white text-black text-center px-4 dark:bg-gray-900 dark:text-white"
    >
      <img
        src={pp}
        alt="Your Name"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-3xl sm:text-4xl font-bold">
        Hi, I'm [Rijal Kamal Kadi]
      </h1>
      <p className="mt-4 text-lg sm:text-xl max-w-2xl">
        I am a passionate developer with expertise in crafting modern web
        applications. My goal is to deliver impactful results through creative
        and innovative solutions.
      </p>
      <a
        href="/portfolio"
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        View My Portfolio
      </a>
    </section>
  );
};

export default Hero;
