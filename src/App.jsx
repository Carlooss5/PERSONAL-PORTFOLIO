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
      
      fullDescription: [
        "Suelto nace de la necesidad de devolverle a las personas el control absoluto y la privacidad sobre su dinero real. En un mundo cada vez más digitalizado, la gestión del efectivo suele quedar relegada a hojas de cálculo complejas o notas mentales que acaban perdiéndose.",
        "El objetivo principal de esta aplicación es ofrecer una experiencia de usuario (UX) inmersiva donde el dinero físico se sienta real a través de la pantalla. El usuario interactúa con simulaciones visuales de billetes, organizándolos en 'depósitos' personalizables según sus necesidades cotidianas."
      ],
      
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
      highlight: "Integración nativa con OpenStreetMap que permite localizar parques cercanos por coordenadas, filtrando por instalaciones (zonas senior, tipos de barras) y sistema de reseñas comunitario.",
      status: "Prototipado",
      github: "https://github.com/tu-usuario"
    },
    { 
      id: 3,
      title: "ROAD S&S (Road Safety & Sustainability)",
      category: "Ingeniería Mecánica",
      image: "/images/logoydiseno.png", 
      description: "Diseño de una infraestructura vial para temporales invernales. Busca mejorar la seguridad, el flujo de tráfico y eliminar el uso de máquinas quitanieves y sal corrosiva mediante un sistema radiante.",
      
      fullDescription: [
        "Las condiciones meteorológicas adversas en zonas de montaña y viaductos generan graves consecuencias en la seguridad vial, requiriendo un alto gasto económico en el mantenimiento tradicional mediante sal y quitanieves. ROAD S&S nace como una solución de ingeniería avanzada para mitigar estos riesgos operativos en infraestructuras críticas.",
        "El núcleo tecnológico del proyecto radica en un diseño hidrónico instalado bajo la capa de rodadura. Mediante el estudio exhaustivo de mecánica de fluidos y transmisión de calor, el sistema hace circular una mezcla de agua y propilenglicol (para evitar la rotura de tuberías por congelación). Este fluido opera a una temperatura de entrada de entre 35 °C y 45 °C, logrando mantener la superficie asfáltica a unos constantes 2 °C - 3 °C para asegurar la fusión inmediata de la nieve al contacto.",
        "Para superar el reto de la inercia térmica natural del asfalto (calentamiento lento), el sistema no solo reacciona al clima, sino que se anticipa. Opera bajo un paradigma predictivo que cruza datos de sensores embebidos (temperatura y humedad) con APIs meteorológicas (IoT) para iniciar el ciclo de precalentamiento horas antes del efecto climático inminente."
      ],
      
      features: [
        "Diseño constructivo mediante 'Serpentina' con tubos de PEX (Polietileno Reticulado) separados cada 15-30 cm, evitando así bandas de hielo residuales.",
        "Automatización algorítmica predictiva (IoT) y sensores superficiales para optimizar la eficiencia energética del sistema.",
        "Viabilidad en modelos estratégicos adaptables: desde aplicación quirúrgica en puntos negros de carreteras alpinas, hasta accesos B2B y parkings para estaciones de esquí.",
        "Alternativas eléctricas (en desarrollo) mediante mallas de resistencias diseñadas para áreas reducidas de intervención rápida, como pasos de cebra y helipuertos."
      ],
      
      highlight: "Aplicación de principios de transmisión de calor y mecánica de fluidos utilizando fluidos refrigerantes bajo el asfalto. Primeros modelados, prototipos y simulaciones realizadas en Autodesk Inventor.",
      status: "Prototipado",
      cadLink: "#"
    },
    {
      id: 4,
      title: "ASHRAE - 2027 HVAC Design Calculations",
      category: "Ingeniería Mecánica",
      image: "/images/ashrae.jpg",
      description: "Proyecto de competición de ASHRAE para diseñar el sistema de climatización y eficiencia energética de un hotel en Taipei, Taiwán.",
      highlight: "Diseño y cálculo de instalaciones térmicas de alto rendimiento aplicando estándares normativos estadounidenses, con planos trazados en AutoCAD.",
      status: "Bases y Normativa",
      cadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-200">
      <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-32 px-6 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-indigo-500 blur-3xl animate-float"></div>
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-emerald-500 blur-3xl animate-float-delayed"></div>
        </div>

        {/* CAMBIO AQUÍ: max-w-7xl para ensanchar la cabecera */}
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Portfolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Carlos G.M.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">
            Ingeniero Mecánico | Desarrollador de apps junior
          </h2>
          {/* CAMBIO AQUÍ: max-w-4xl para que el párrafo se expanda más a lo ancho */}
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mb-12 leading-relaxed">
            Mis principales ideas e inquietudes tienen que ver con el desarrollo industrial sostenible y económicamente eficientes; asi como la creación de software que facilite la vida cotidiana. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#proyectos" className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto text-center">
              EXPLORAR PROYECTOS
            </a>
            
            <div className="flex gap-4">
              {/* Tus enlaces de redes sociales igual... */}
              <a href="https://www.linkedin.com/in/carlos-garc%C3%ADa-mu%C3%B1oz-1370753ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-emerald-400 hover:-translate-y-1 transition-all" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/Carlooss5" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-emerald-400 hover:-translate-y-1 transition-all" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:carloosssg5@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-emerald-400 hover:-translate-y-1 transition-all" title="Enviar Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CAMBIO AQUÍ: max-w-7xl para ensanchar la sección de proyectos */}
      <main id="proyectos" className="max-w-7xl mx-auto px-6 py-24">
        
        {/* HEMOS ELIMINADO EL LÍMITE DE ANCHO EN ESTE DIV */}
        <div className="mb-16 border-l-4 border-indigo-500 pl-6 animate-fade-in-up w-full" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">PROYECTOS E INICIATIVAS</h2>
          {/* CAMBIO AQUÍ: Quitamos el max-w-5xl y ponemos w-full para que ocupe todo el ancho */}
          <p className="text-xl text-gray-600 w-full">
            Descubre e infórmate de cada uno de mis proyectos, desde aplicaciones de software hasta diseños mecánicos. Mis objetivos principales con estas iniciativas son mejorar la vida cotidiana de las personas, optimizar procesos, y promover la sostenibilidad y seguridad. Cada proyecto refleja mi pasión por la ingeniería y mi afán por la innovación.
          </p>
        </div>

        {/* Las tarjetas siguen de 2 en 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p className="font-medium tracking-wide">© 2026 Carlos G.M. | Building in public.</p>
        <p className="text-sm text-gray-500 mt-2">Ingeniería Mecánica & Desarrollo de Software</p>
      </footer>
    </div>
  );
}

export default App;