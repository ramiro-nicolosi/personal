export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto y las tecnologías utilizadas.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Proyecto 2",
      description: "Otro proyecto interesante que has desarrollado.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Proyecto 3",
      description: "Un tercer proyecto que muestra tus habilidades.",
      tech: ["Python", "Flask", "PostgreSQL"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Proyectos Personales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver proyecto →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
