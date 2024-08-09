
const demoData = [
  { name: 'Online Shop', amount: 4.32, color: '#4F46E5' },
  { name: 'Application', amount: 1.64, color: '#DC2626' },
  { name: 'Tax', amount: 0.24, color: '#111827' },
];

const ActivityCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <div className="relative mb-4">
        <svg viewBox="0 0 100 60" className="w-full">
          <circle cx="30" cy="30" r="28" fill={demoData[0].color} />
          <circle cx="70" cy="30" r="20" fill={demoData[1].color} />
          <circle cx="60" cy="45" r="13" fill={demoData[2].color} />
          
          <text x="30" y="28" textAnchor="middle" dy=".3em" fill="white" className="text-[10px] font-semibold">
            ${demoData[0].amount}
          </text>
          <text x="30" y="38" textAnchor="middle" dy=".3em" fill="white" className="text-[6px]">
            {demoData[0].name}
          </text>
          
          <text x="70" y="22" textAnchor="middle" dy=".3em" fill="white" className="text-[10px] font-semibold">
            ${demoData[1].amount}
          </text>
          <text x="70" y="30" textAnchor="middle" dy=".3em" fill="white" className="text-[4px]">
            {demoData[1].name}
          </text>
          
          <text x="60" y="45" textAnchor="middle" dy=".3em" fill="white" className="text-[8px] font-semibold">
            ${demoData[2].amount}
          </text>
          <text x="60" y="52" textAnchor="middle" dy=".3em" fill="white" className="text-[4px]">
            {demoData[2].name}
          </text>
        </svg>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Comparison (Month)</h3>
        <div className="space-y-2">
          {['This month', 'Last month'].map((label, index) => (
            <div key={label}>
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 flex overflow-hidden">
                {demoData.map((item, i) => (
                  <div 
                    key={i}
                    className="h-2.5 rounded-full" 
                    style={{
                      width: `${index === 0 ? 70 - i * 20 : 60 - i * 10}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;