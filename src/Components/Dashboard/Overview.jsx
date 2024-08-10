
import { FaArrowUp, FaArrowDown, FaChartLine, FaShoppingBag, FaCreditCard } from 'react-icons/fa';
import LineChart from './LineChart';

const OverviewCard = ({ icon, title, value, change, isPositive, bgColor, chartColor }) => {

  const getIcon = () => {
    switch (icon) {
      case 'earnings':
        return <FaChartLine />;
      case 'customer':
        return <FaShoppingBag />;
      case 'payouts':
        return <FaCreditCard />;
      default:
        return <FaChartLine />;
    }
  };


  return (
    <div className={`p-4 shadow-sm rounded-lg flex ${bgColor}`}>
      {/* Left side with text content */}
      <div className="flex flex-col justify-between w-2/3">
      <div className="flex items-center">
         
      <div className="p-2 rounded-full bg-black text-white mr-2">
            {getIcon()}
          </div>

          
        </div>
        <div className="mt-1">
          <h4 className="font-medium text-black text-xs">{title}</h4>
        </div>
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        <div
        className={`mt-1 p-1 bg-white flex items-center rounded-full ${isPositive ? 'text-green-600' : 'text-red-600'}`}
        style={{ fontSize: '12px' }} // Replace '12px' with your desired font size
      >
        {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
        <span style={{ fontSize: '8px' }}>{change} <span className='text-black'> this week</span></span> {/* Replace '12px' with your desired font size */}
      </div>
      </div>
      
      {/* Right side with line chart */}
      <div className="flex justify-center items-center w-1/3  ">
        <LineChart chartColor={chartColor} />
      </div>
    </div>
  );
};

export default OverviewCard;