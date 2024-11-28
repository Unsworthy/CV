const Portfolio = () => {
  const projects = [
    { title: "Project 1", link: "#", description: "Description for Project 1" },
    { title: "Project 2", link: "#", description: "Description for Project 2" },
    { title: "Project 3", link: "#", description: "Description for Project 3" },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
