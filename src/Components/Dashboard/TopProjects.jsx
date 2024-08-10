import React from 'react';
import { ChevronDown } from 'lucide-react';

const TopProjectsDashboard = () => {
  const projects = [
    { name: 'Sunil Joshi', role: 'Web Designer', project: 'Elite Admin', priority: 'Low', priorityColor: 'text-green-500', budget: '$3.9k' },
    { name: 'John Doe', role: 'Web Developer', project: 'Flexy Admin', priority: 'Medium', priorityColor: 'text-yellow-500', budget: '$24.5k' },
    { name: 'Mathew Anderson', role: 'Web Manager', project: 'Material Pro', priority: 'High', priorityColor: 'text-red-500', budget: '$12.8k' },
    { name: 'Yuvraj Sheth', role: 'Project Manager', project: 'Xtreme Admin', priority: 'Very High', priorityColor: 'text-blue-500', budget: '$2.4k' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Top Projects</h2>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm text-gray-700 focus:outline-none focus:border-blue-500">
            <option>March 2022</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs font-medium text-gray-500 border-b">
            <th className="pb-2 font-medium">Assigned</th>
            <th className="pb-2 font-medium">Project</th>
            <th className="pb-2 font-medium">Priority</th>
            <th className="pb-2 font-medium">Budget</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3">
                <div className="flex items-center">
                  <img className="w-8 h-8 rounded-full mr-3" src={`/api/placeholder/32/32`} alt={project.name} />
                  <div>
                    <p className="font-medium text-gray-800">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.role}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-800">{project.project}</td>
              <td className={`py-3 ${project.priorityColor}`}>{project.priority}</td>
              <td className="py-3 text-gray-800">{project.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProjectsDashboard;