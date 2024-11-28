import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.68, -0.55, 0.27, 1.55],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial="hidden"
          animate={scrollY > 100 ? "visible" : "hidden"}
          variants={containerVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial="hidden"
          animate={scrollY > 100 ? "visible" : "hidden"}
          variants={itemVariants}
        >
          Hello! My name is [Rijal Kamal], and I am a software developer
          specializing in full-stack web development. With 2 years of experience
          in the industry, I have honed my skills in JavaScript, React, and
          Node.js. I love creating elegant, user-friendly interfaces and
          efficient backend systems.
        </motion.p>
        <motion.ul
          className="mt-6 text-lg space-y-2 text-gray-800 dark:text-gray-200"
          initial="hidden"
          animate={scrollY > 100 ? "visible" : "hidden"}
        >
          {[...Array(1)].map((_, index) => (
            <motion.li key={index} variants={listItemVariants} custom={index}>
              <strong>📧 Email:</strong> raka.prawira@gmail.com
            </motion.li>
          ))}
          <motion.li variants={listItemVariants} custom={3}>
            <strong>📞 Phone:</strong> +62 821-1798-7453
          </motion.li>
          <motion.li variants={listItemVariants} custom={4}>
            <strong>🌐 Website:</strong>{" "}
            <a href="https://www.youtube.com/@Knathh">youtube.com</a>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
