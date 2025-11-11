export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: tu@email.com</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Ubicación: Tu Ciudad, País</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">
                  Educación
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
