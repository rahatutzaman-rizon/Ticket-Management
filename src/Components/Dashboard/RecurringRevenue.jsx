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
                    <h2 className="text-sm font-medium text-black mb-1">Recurring Revenue</h2>
                 <div className="flex gap-4">
                 <h1 className="text-2xl font-bold">$156,098</h1>
                    <span className="text-xs mt-2 p-1 rounded bg-green-200 text-green-600 font-medium">
                        10% ↑
                    </span>
                 </div>
                </div>
                <button className="flex items-center border border-gray-300 px-3 py-1.5 rounded text-black bold bg-white text-sm">
                    <AiOutlineCalendar className="mr-1" />
                    This Week
                </button>
            </div>
            <ResponsiveContainer width="100%" height={130}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#4b5563" }} />
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
