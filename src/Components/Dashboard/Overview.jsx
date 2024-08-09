
const OverviewCard = ({ title, value, change, isPositive }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
      <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </div>
    </div>
  );
};

export default OverviewCard;
