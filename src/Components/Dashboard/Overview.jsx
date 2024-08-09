import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import LineChart from './Linechart';

const OverviewCard = ({ title, value, change, isPositive, bgColor, chartColor }) => {
  return (
    <div className={`p-4 shadow-sm rounded-lg flex ${bgColor}`}>
      {/* Left side with text content */}
      <div className="flex flex-col justify-between w-2/3">
        <div className="text-xl font-bold text-gray-800 mt-2">{value}</div>
        <div className="mt-1">
          <h4 className="font-medium text-gray-500">{title}</h4>
        </div>
        <div className={`text-base mt-2 flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
          {change}
        </div>
      </div>
      
      {/* Right side with line chart */}
      <div className="flex justify-center items-center w-1/3">
        <LineChart />
      </div>
    </div>
  );
};

export default OverviewCard;
