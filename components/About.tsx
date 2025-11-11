export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Sobre Mí
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Soy un profesional apasionado por la tecnología y el desarrollo de software.
            Me encanta crear soluciones innovadoras que marquen la diferencia.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Mi enfoque se centra en escribir código limpio, mantenible y escalable,
            siempre buscando las mejores prácticas y las tecnologías más actuales.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías,
            contribuyendo a proyectos de código abierto y compartiendo conocimientos
            con la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}
