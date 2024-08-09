import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CostBreakdown = () => {
  const percentage = 48;
  const budget = 594;

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">Cost Breakdown</h2>
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
          circleRatio={0.5}
        />
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {percentage}%
        </div>
      </div>
      <p className="text-center mt-2 text-gray-600">Marketing Budget</p>
    </div>
  );
};
export default CostBreakdown;