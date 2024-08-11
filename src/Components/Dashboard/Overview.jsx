import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaShoppingBag, FaCreditCard } from 'react-icons/fa';

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
          className={`  mr-10 bg-white  flex items-center rounded  ${isPositive ? 'text-green-600' : 'text-red-600'}`}
          style={{ fontSize: '12px' }}
        >
          {isPositive ? <FaArrowUp className="ml-1" /> : <FaArrowDown className="ml-1 " />}
          <span style={{ fontSize: '6px' }}>{change} <span className='text-black font-semibold'> this week</span></span>
        </div>
      </div>
      
      {/* Right side with SVG line chart */}
      <div className="flex justify-center items-center w-1/3">
        <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q25 10, 50 20 T100 30" stroke={chartColor} strokeWidth="2" fill="transparent" />
        </svg>
      </div>
    </div>
  );
};

export default OverviewCard;
