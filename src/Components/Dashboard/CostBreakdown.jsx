
import { FaArrowUp } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CostBreakdown = () => {
  const data = [
   
    { name: 'Gray Segment', value: 48 },
    { name: 'Blue Segment', value: 594 },
  ];

  const COLORS = [ '#e5e7eb','#4338ca',]; // Blue and Gray colors

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <p style={{fontSize:"18px", fontWeight: '600', }} >Cost Breakdown</p>
        <span
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#22a31e', // Tailwind equivalent: bg-green-500
        color: '#ffffff',           // Tailwind equivalent: text-white
        borderRadius: '9999px',     // Tailwind equivalent: rounded-full
        padding: '2px 6px',         // Tailwind equivalent: px-2 py-0.5
        fontSize: '10px',           // Tailwind equivalent: text-xs
        fontWeight: '500',          // Tailwind equivalent: font-medium
      }}
    >
      <FaArrowUp style={{ marginRight: '4px', fontSize: '10px' }} />
      48%
    </span>
      </div>
      <div className="relative flex justify-center items-center h-26 mt-4">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              paddingAngle={6}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex justify-center items-center  mb-12">
          <span className="text-black text-3xl font-bold mt-16">${data[1].value}k</span>
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-500 mt-[-86px] text-center">Marketing Budget</p>
    </div>
  );
};

export default CostBreakdown;
