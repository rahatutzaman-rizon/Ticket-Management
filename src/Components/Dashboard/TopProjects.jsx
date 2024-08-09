
const ProjectCard = ({ name, role, project, priority, budget, priorityColor }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/150?u=${name}`} alt={name} />
        <div className="ml-3">
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="text-sm text-gray-500">{project}</div>
      <div className={`text-sm ${priorityColor}`}>{priority}</div>
      <div className="text-sm text-gray-800">${budget}k</div>
    </div>
  );
};

export default ProjectCard;
