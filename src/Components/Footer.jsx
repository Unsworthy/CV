const Footer = () => {
  return (
    <footer id="contact" className="py-6 bg-gray-800 text-white text-center">
      <p className="text-sm">&copy; 2024 Your Name. All Rights Reserved.</p>
      <p>
        Connect on{" "}
        <a href="#" className="text-blue-400 hover:underline">
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/Unsworthy"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
