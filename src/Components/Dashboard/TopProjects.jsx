import React from 'react';
import { ChevronDown } from 'lucide-react';

const TopProjectsDashboard = () => {
  const projects = [
    { name: 'Sunil Joshi', role: 'Web Designer', project: 'Elite Admin', priority: 'Low', priorityColor: 'text-green-700 bg-green-100', budget: '$3.9k' },
    { name: 'John Doe', role: 'Web Developer', project: 'Flexy Admin', priority: 'Medium', priorityColor: 'text-yellow-700 bg-yellow-100', budget: '$24.5k' },
    { name: 'Mathew Anderson', role: 'Web Manager', project: 'Material Pro', priority: 'High', priorityColor: 'text-red-700 bg-red-100', budget: '$12.8k' },
    { name: 'Yuvraj Sheth', role: 'Project Manager', project: 'Xtreme Admin', priority: 'Very High', priorityColor: 'text-blue-700 bg-blue-100', budget: '$2.4k' },
  ];

  return (
    <div className="p-2 w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-black">Top Projects</h2>
          <h5 className='text-sm'>Best Products</h5>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm text-gray-700 focus:outline-none focus:border-blue-500">
            <option>March 2022</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      <table className="w-full text-sm  ml- mt-10">
        <thead>
          <tr className="text-left   text-xs font-bold text-black border-b ">
            <th className="pb-3 font-medium">Assigned</th>
            <th className="pb-3  font-medium">Project</th>
            <th className="pb-3   font-medium">Priority</th>
            <th className="pb-2 font-medium">Budget</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3">
                <div className="flex items-center">
                  <img className="w-8 h-8 rounded-full mr-3" src={`https://i.ibb.co/M7PR1QN/IMG-20210331-222352-817.jpg`} alt={project.name} />
                  <div>
                    <p className="font-medium text-xs text-gray-800">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.role}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-800 text-xs">{project.project}</td>
              <td className="py-3">
                <span style={{fontSize: '8px'}} className={`p-2 text-center rounded-lg text-xs font-medium ${project.priorityColor}`}>
                  {project.priority}
                </span>
              </td>
              <td className="py-3 text-gray-800 text-xs">{project.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProjectsDashboard;