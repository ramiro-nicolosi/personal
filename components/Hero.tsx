export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold">
            {/* Aquí puedes poner tu inicial o una imagen */}
            R
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Hola! Soy <span className="text-blue-600 dark:text-blue-400">Tu Nombre</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Desarrollador | Creador | Apasionado por la tecnología
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            Conoce más
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
