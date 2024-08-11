import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CostBreakdown = () => {
  const percentage = 48;
  const budget = 594;
 
  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Cost Breakdown</h2>
        <span className="bg-green-500 text-white rounded text-sm font-medium">+48%</span>
      </div>
      <div className="relative h-32">
        <CircularProgressbar
          value={percentage}
          text={`$${budget}`}
          strokeWidth={12}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: '#4338ca',
            textColor: '#000',
            trailColor: '#e5e7eb',
          })}
          circleRatio={0.50}
        />
      </div>
      <p className="text-sm text-black mt-2">Marketing Budget</p>
    </div>
  );
};

export default CostBreakdown;