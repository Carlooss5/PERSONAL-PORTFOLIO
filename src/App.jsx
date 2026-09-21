import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      id: 1,
      title: "SUELTO",
      category: "Software",
      // Imagen temporal (luego la cambiarás por '/images/tu-imagen-suelto.jpg')
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
      description: "App para gestionar dinero en efectivo de forma visual, privada e intuitiva. Simula billetes, divisas y depósitos para promover la libertad financiera en el día a día.",
      highlight: "Incluye modos Premium/Business con metas de ahorro, gráficas exportables, cierres de caja estructurados y un escáner con IA (OCR) entre otras funciones con el objetivo de facilitar la gestión financiera del cash.",
      status: "Versión Alpha",
      github: "https://github.com/tu-usuario" // Aquí pondrás tu enlace real
    },
    {
      id: 2,
      title: "FindCalisthenics",
      category: "Software",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800",
      description: "Aplicación de fisiología deportiva centrada en entrenamientos de peso corporal y mixto (barras y mancuernas), con un sistema avanzado de geolocalización.",
      highlight: "Integración nativa con OpenStreetMap que permite localizar parques cercanos por coordenadas, filtrando por instalaciones (zonas senior, tipos de barras) y sistema de reseñas comunitario.",
      status: "Prototipado",
      github: "https://github.com/tu-usuario"
    },
    {
      id: 3,
      title: "ROAD S&S (Road Safety & Sustainability)",
      category: "Ingeniería Mecánica",
      image: "https://images.unsplash.com/photo-1517299616551-7892330ebbe2?auto=format&fit=crop&q=80&w=800",
      description: "Diseño de una infraestructura vial para temporales invernales. Busca mejorar la seguridad, el flujo de tráfico y eliminar el uso de máquinas quitanieves y sal corrosiva mediante un sistema radiante.",
      highlight: "Aplicación de principios de transmisión de calor y mecánica de fluidos utilizando fluidos refrigerantes bajo el asfalto. Primeros modelados, prototipos y simulaciones realizadas en Autodesk Inventor.",
      status: "Prototipado",
      cadLink: "#" // Aquí podrás enlazar a un visor PDF o Drive con tus planos
    },
    {
      id: 4,
      title: "ASHRAE - 2027 HVAC Design Calculations",
      category: "Ingeniería Mecánica",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      description: "Proyecto de competición de ASHRAE para diseñar el sistema de climatización y eficiencia energética de un hotel en Taipei, Taiwán.",
      highlight: "Diseño y cálculo de instalaciones térmicas de alto rendimiento aplicando estándares normativos estadounidenses, con planos trazados en AutoCAD.",
      status: "Bases y Normativa",
      cadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-200">
      <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-32 px-6 relative overflow-hidden">
        {/* Un pequeño detalle visual de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-emerald-500 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Carlos</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">
            Ingeniero Mecánico & Desarrollador
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Fusiono los principios de la termodinámica y el diseño industrial con el desarrollo de software para crear soluciones integrales, eficientes y tangibles.
          </p>
          <a href="#proyectos" className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl inline-block">
            Explorar Proyectos
          </a>
        </div>
      </header>

      <main id="proyectos" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16 border-l-4 border-indigo-500 pl-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Portfolio en Desarrollo</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Una mirada transparente a mi proceso de trabajo. Desde el diseño en Autodesk hasta el despliegue de código en repositorios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p className="font-medium tracking-wide">© 2026 Carlos. Building in public.</p>
      </footer>
    </div>
  );
}

export default App;