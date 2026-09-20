import React from 'react';

const ProjectCard = ({ project }) => {
  const isSoftware = project.category === 'Software';
  const badgeColor = isSoftware ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800';
  const borderColor = isSoftware ? 'border-blue-500' : 'border-emerald-500';

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 ${borderColor}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
          {project.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-6 min-h-[80px]">
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Lo destacado</h4>
        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
          {project.highlight}
        </p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">
          ⚙️ {project.status}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;