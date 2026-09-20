import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      id: 1,
      title: "Suelto",
      category: "Software",
      description: "App para gestionar dinero en efectivo de forma visual e intuitiva. Simula billetes, divisas y depósitos para promover la libertad financiera.",
      highlight: "Modos Premium/Business con metas de ahorro, cierres de caja y escáner IA para gestión fiscal.",
      status: "Código en GitHub"
    },
    {
      id: 2,
      title: "España Calistenia",
      category: "Software",
      description: "App de fisiología deportiva para entrenamientos de peso corporal y mixto (barras y mancuernas).",
      highlight: "Integración con OpenStreetMap para geolocalizar parques filtrando por tipo de barras, zonas senior y reseñas.",
      status: "En desarrollo"
    },
    {
      id: 3,
      title: "Road S&S",
      category: "Ingeniería",
      description: "Diseño de carretera para climas adversos que reduce accidentes y contaminación (evitando el uso de sal y quitanieves).",
      highlight: "Sistema radiante que utiliza principios de mecánica de fluidos con refrigerante para derretir hielo y nieve.",
      status: "Modelos en Autodesk"
    },
    {
      id: 4,
      title: "ASHRAE Hotel Taipei",
      category: "Ingeniería",
      description: "Concurso internacional para el diseño de las instalaciones de climatización y eficiencia energética de un hotel en Taipei.",
      highlight: "Aplicación de normativas ASHRAE y trazado de instalaciones térmicas de alto rendimiento usando AutoCAD.",
      status: "Bases y Planificación"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Carlos</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mb-10 leading-relaxed">
            Desarrollador de Software & Ingeniero. Construyendo aplicaciones móviles y soluciones técnicas sostenibles.
          </p>
        </div>
      </header>

      <main id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600">
            Una selección de mis trabajos en desarrollo, combinando programación y diseño de ingeniería.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;