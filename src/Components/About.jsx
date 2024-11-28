const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Hello! My name is [Rijal Kamal], and I am a software developer
          specializing in full-stack web development. With [2 years] of
          experience in the industry, I have honed my skills in JavaScript,
          React, and Node.js. I love creating elegant, user-friendly interfaces
          and efficient backend systems.
        </p>
        <ul className="mt-6 text-lg space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            <strong>📧 Email:</strong> raka.prawira@gmail.com
          </li>
          <li>
            <strong>📞 Phone:</strong> +62 821-1798-7453
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a href="https://www.youtube.com/@Knathh">youtube.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
