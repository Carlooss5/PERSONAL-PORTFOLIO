import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isSoftware = project.category === 'Software';
  const badgeColor = isSoftware ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800';

  return (
    <>
      {/* TARJETA PRINCIPAL (Lo que se ve en la cuadrícula) */}
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col group border border-gray-100"
      >
        <div className="h-80 w-full overflow-hidden relative bg-gray-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md backdrop-blur-md bg-white/90 ${isSoftware ? 'text-blue-700' : 'text-emerald-700'}`}>
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
          {/* Aquí mostramos solo la descripción corta */}
          <p className="text-gray-600 mb-6 flex-grow line-clamp-2">
            {project.description}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-50">
            <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              {project.status}
            </span>
            <span className="text-indigo-600 font-bold text-sm group-hover:pr-2 transition-all">Ver más →</span>
          </div>
        </div>
      </div>

      {/* MODO PRESENTACIÓN (Ventana emergente) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors z-20 backdrop-blur-sm"
            >
              ✕
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <h2 className="absolute bottom-6 left-8 text-4xl md:text-5xl font-extrabold text-white">{project.title}</h2>
            </div>

            <div className="p-8">
              {/* Bloque de Descripción Larga (Párrafos) */}
              <div className="mb-8 space-y-4">
                {project.fullDescription ? (
                  project.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                )}
              </div>

              {/* Bloque de Características Clave (Viñetas) */}
              {project.features && (
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">ASPECTOS CLAVE DE LA APLICACIÓN</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="text-indigo-500 mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Detalles Técnicos & Tecnologías</h4>
                <p className="text-gray-700 leading-relaxed">{project.highlight}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-transform hover:-translate-y-1 font-semibold shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    Ver Código Fuente
                  </a>
                )}
                {project.cadLink && (
                  <a href={project.cadLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-transform hover:-translate-y-1 font-semibold shadow-md">
                    <span>📐</span> Visualizar Modelos
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;