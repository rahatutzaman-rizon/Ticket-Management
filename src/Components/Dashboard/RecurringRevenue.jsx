import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { AiOutlineCalendar } from "react-icons/ai";

const data = [
    { name: "Dec 28", value: 55000 },
    { name: "Dec 29", value: 145000 },
    { name: "Dec 30", value: 150000 },
    { name: "Dec 31", value: 148000 },
    { name: "Jan 1", value: 152000 },
    { name: "Jan 2", value: 147000 },
    { name: "Jan 3", value: 156098 },
];

const RecurringRevenue = () => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
                

            <div>
  <h2 style={{
    fontSize: '12px',
    color: '#4B5563',
    marginBottom: '4px',
    fontWeight: '700'
  }}>
    Recurring Revenue
  </h2>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
    <span style={{
      fontSize: '28px',
      fontWeight: '800',
      color: '#111827'
    }}>
      $156,098
    </span>
    <span style={{
      fontSize: '14px',
      fontWeight: '600',
      color: '#059669',
      backgroundColor: '#D1FAE5',
      padding: '2px 8px',
      borderRadius: '8px',
      display: 'inline-flex',
      alignItems: 'center'
    }}>
      10% <svg style={{width: '12px', height: '12px', marginLeft: '2px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </div>
</div>



                <button style={{
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  padding: '6px  6px ',
  fontSize: '10px',
  color: '#374151',
  backgroundColor: 'white',
  fontWeight: 'normal'
}}>
  <svg style={{width: '14px', height: '14px', marginRight: '4px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <span style={{fontWeight: '900', fontSize:"10px"}}>This Week</span>
  <svg style={{width: '14px', height: '14px', marginLeft: '6px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>


            </div>
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#4b5563",fontWeight:"900" }} />
                    {/* <YAxis tick={{ fontSize: 10, fill: "#4b5563" }} /> */}
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#7c3aed"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RecurringRevenue;
