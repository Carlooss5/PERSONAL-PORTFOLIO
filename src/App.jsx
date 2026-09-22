import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      id: 1,
      title: "SUELTO",
      category: "Software",
      image: "/images/suelto.jpg",
      description: "App para gestionar dinero en efectivo de forma visual, privada e intuitiva. Simula billetes, divisas y depósitos para promover la libertad financiera en el día a día.",
      
      // NUEVO: Array de párrafos para la ventana emergente
      fullDescription: [
        "Suelto nace de la necesidad de devolverle al usuario el control absoluto y la privacidad sobre sus finanzas físicas. En un mundo cada vez más digitalizado, la gestión del efectivo suele quedar relegada a hojas de cálculo complejas o notas mentales que acaban perdiéndose.",
        "El objetivo principal de esta aplicación es ofrecer una experiencia de usuario (UX) inmersiva donde el dinero físico se sienta real a través de la pantalla. El usuario interactúa con simulaciones visuales de billetes, organizándolos en 'depósitos' personalizables según sus necesidades cotidianas."
      ],
      
      // NUEVO: Puntos clave con estrellitas
      features: [
        "Privacidad integral: la base de datos opera de manera local en el dispositivo.",
        "Soporte multidivisa diseñado para facilitar los cálculos durante viajes internacionales.",
        "Arquitectura escalable preparada para integrar funcionalidades más avanzadas."
      ],
      
      highlight: "Incluye modos PREMIUM/BUSINESS con metas de ahorro, gráficas exportables, cierres de caja estructurados y un escáner con IA (OCR) entre otras funciones con el objetivo de facilitar la gestión financiera del cash.",
      status: "Versión Alpha",
      github: "https://github.com/Carlooss5/SUELTO"
    },
    {
      id: 2,
      title: "FindCalisthenics",
      category: "Software",
      image: "/images/findcalisthenics.png",
      description: "Aplicación de fisiología deportiva centrada en entrenamientos de peso corporal y mixto (barras y mancuernas), con un sistema avanzado de geolocalización.",
      // Puedes añadir fullDescription y features aquí cuando quieras...
      highlight: "Integración nativa con OpenStreetMap que permite localizar parques cercanos por coordenadas, filtrando por instalaciones (zonas senior, tipos de barras) y sistema de reseñas comunitario.",
      status: "Prototipado",
      github: "https://github.com/tu-usuario"
    },
    { 
      id: 3,
      title: "ROAD S&S (Road Safety & Sustainability)",
      category: "Ingeniería Mecánica",
      image: "/images/logo+diseño.PNG",
      description: "Diseño de una infraestructura vial para temporales invernales. Busca mejorar la seguridad, el flujo de tráfico y eliminar el uso de máquinas quitanieves y sal corrosiva mediante un sistema radiante.",
      
      // NUEVO: Array de párrafos para la ventana emergente basado en tu PDF
      fullDescription: [
        "Las condiciones meteorológicas adversas en zonas de montaña y viaductos generan graves consecuencias en la seguridad vial, requiriendo un alto gasto económico en el mantenimiento tradicional mediante sal y quitanieves. ROAD S&S nace como una solución de ingeniería avanzada para mitigar estos riesgos operativos en infraestructuras críticas[cite: 13].",
        "El núcleo tecnológico del proyecto radica en un diseño hidrónico instalado bajo la capa de rodadura[cite: 13]. Mediante el estudio exhaustivo de mecánica de fluidos y transmisión de calor, el sistema hace circular una mezcla de agua y propilenglicol (para evitar la rotura de tuberías por congelación)[cite: 13]. Este fluido opera a una temperatura de entrada de entre 35 °C y 45 °C, logrando mantener la superficie asfáltica a unos constantes 2 °C - 3 °C para asegurar la fusión inmediata de la nieve al contacto[cite: 13].",
        "Para superar el reto de la inercia térmica natural del asfalto (calentamiento lento), el sistema no solo reacciona al clima, sino que se anticipa[cite: 13]. Opera bajo un paradigma predictivo que cruza datos de sensores embebidos (temperatura y humedad) con APIs meteorológicas (IoT) para iniciar el ciclo de precalentamiento horas antes de la precipitación inminente[cite: 13]."
      ],
      
      // NUEVO: Puntos clave basados en la ingeniería del proyecto
      features: [
        "Diseño constructivo mediante 'Serpentina Densa' con tubos de PEX (Polietileno Reticulado) separados cada 15-30 cm, evitando bandas de hielo residuales[cite: 13].",
        "Automatización algorítmica predictiva (IoT) y sensores superficiales para optimizar la eficiencia energética del sistema[cite: 13].",
        "Viabilidad en modelos estratégicos adaptables: desde aplicación quirúrgica en puntos negros (rampas y curvas alpinas) hasta accesos B2B para estaciones de esquí[cite: 13].",
        "Alternativas eléctricas mediante mallas de resistencias diseñadas para áreas reducidas de intervención rápida, como pasos de cebra y helipuertos[cite: 13]."
      ],
      
      highlight: "Aplicación de principios de transmisión de calor y mecánica de fluidos utilizando fluidos refrigerantes bajo el asfalto. Primeros modelados, prototipos y simulaciones realizadas en Autodesk Inventor.",
      status: "Prototipado",
      cadLink: "#" // Aquí podrás enlazar a tu Google Drive con los PDFs de los planos
    },
    {
      id: 4,
      title: "ASHRAE - 2027 HVAC Design Calculations",
      category: "Ingeniería Mecánica",
      image: "/images/ashrae.jpg",
      description: "Proyecto de competición de ASHRAE para diseñar el sistema de climatización y eficiencia energética de un hotel en Taipei, Taiwán.",
      // Puedes añadir fullDescription y features aquí cuando quieras...
      highlight: "Diseño y cálculo de instalaciones térmicas de alto rendimiento aplicando estándares normativos estadounidenses, con planos trazados en AutoCAD.",
      status: "Bases y Normativa",
      cadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-200">
      <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-emerald-500 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Portfolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Carlos G.M.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">
            Ingeniero Mecánico | Desarrollador de apps junior
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Mis principales ideas e inquietudes tienen que ver con el desarrollo industrial sostenible y económicamente eficientes; asi como la creación de software que facilite la vida cotidiana. 
          </p>
          <a href="#proyectos" className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl inline-block">
            Explorar Proyectos
          </a>
        </div>
      </header>

      <main id="proyectos" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16 border-l-4 border-indigo-500 pl-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">PROYECTOS E INICIATIVAS</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Descubre e infórmate de cada uno de mis proyectos, desde aplicaciones de software hasta diseños mecánicos. Mis objetivos principales con estas iniciativas son mejorar la vida cotidiana de las personas, optimizar procesos, y promover la sostenibilidad y seguridad. Cada proyecto refleja mi pasión por la ingeniería y mi afán por la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p className="font-medium tracking-wide">© 2026 Carlos G.M. | Building in public.</p>
      </footer>
    </div>
  );
}

export default App;