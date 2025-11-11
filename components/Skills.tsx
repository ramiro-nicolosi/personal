export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "APIs RESTful", "Bases de datos"]
    },
    {
      category: "Herramientas",
      items: ["Git", "Docker", "VS Code", "Linux"]
    },
    {
      category: "Soft Skills",
      items: ["Trabajo en equipo", "Resolución de problemas", "Comunicación", "Aprendizaje continuo"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Habilidades y Cualidades
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-500">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
