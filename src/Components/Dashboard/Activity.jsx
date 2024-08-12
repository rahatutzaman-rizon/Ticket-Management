import React from 'react';

const demoData = [
  { name: 'Online Shop', amount: 4.32, color: '#4F46E5' },
  { name: 'Application', amount: 1.64, color: '#DC2626' },
  { name: 'Tax', amount: 0.24, color: '#111827' },
];

const ActivityCard = () => {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1rem', maxWidth: '20rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1rem', marginLeft: '0.5rem', fontWeight: 'bold', color: '#1F2937' }}>Activity</h2>
        <svg style={{ width: '2rem', height: '1.5rem', color: '#4B5563' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM10 10a2 2 0 110-4 2 2 0 010 4zM14 10a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
      
      <div style={{ position: 'relative', marginBottom: '1rem',}}>
        <svg viewBox="0 0 100 60" style={{ width: '100%' }}>
          <circle cx="30" cy="30" r="28" fill={demoData[0].color} />
          <circle cx="70" cy="20" r="20" fill={demoData[1].color} />
          <circle cx="60" cy="45" r="13" fill={demoData[2].color} />
          
          <text x="30" y="28" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '10px', fontWeight: '600' }}>
            ${demoData[0].amount}
          </text>
          <text x="30" y="38" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '4px' }} className='text-gray-500'>
            {demoData[0].name}
          </text>
          
          <text x="70" y="18" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '10px', fontWeight: '600' }}>
            ${demoData[1].amount}
          </text>
          <text x="70" y="26" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '4px' }}>
            {demoData[1].name}
          </text>
          
          <text x="60" y="45" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '8px', fontWeight: '600' }}>
            ${demoData[2].amount}
          </text>
          <text x="60" y="52" textAnchor="middle" dy=".3em" fill="white" style={{ fontSize: '4px' }}>
            {demoData[2].name}
          </text>
        </svg>
      </div>
      
      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1rem', maxWidth: '20rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '900', color: '#1F2937', marginBottom: '1rem' }}>Comparison (Month)</h3>
        <div style={{ spaceY: '0.75rem' ,  }} className='space-y-2'>
          {[
            { label: 'This month', widths: [25, 15, 10], total: 60 },
            { label: 'Last month', widths: [45, 15, 15], total: 80 }
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '6rem', fontSize: '16px', color: '#4B5563',fontWeight:"800" }}>{item.label}</div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ position: 'relative', width: '100%', height: '1.5rem', backgroundColor: '#E5E7EB', borderRadius: '100px', overflow: 'hidden' }}>
                  {item.widths.map((width, index) => (
                    <div
                      key={index}
                      style={{
                        width: `${(width / item.total) * 100}%`,
                        left: `${(item.widths.slice(0, index).reduce((a, b) => a + b, 0) / item.total) * 100}%`,
                        backgroundColor: index === 0 ? '#4F46E5' : index === 1 ? '#DC2626' : '#111827',
                        zIndex: item.widths.length - index,
                        position: 'absolute',
                        height: '100%',
                        borderRadius: index === 0 ? '9999px 0 0 9999px' : index === item.widths.length - 1 ? '0 9999px 9999px 0' : '0'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
