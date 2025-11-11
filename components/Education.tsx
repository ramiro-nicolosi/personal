export default function Education() {
  const education = [
    {
      degree: "Título Universitario / Carrera",
      institution: "Universidad / Institución",
      period: "2018 - 2022",
      description: "Descripción de tus estudios principales y logros académicos."
    },
    {
      degree: "Certificación / Curso Especializado",
      institution: "Plataforma / Institución",
      period: "2023",
      description: "Cursos adicionales o certificaciones relevantes."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Educación y Formación
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-r-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {edu.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
