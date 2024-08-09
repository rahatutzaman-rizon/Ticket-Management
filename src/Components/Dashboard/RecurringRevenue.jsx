import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { AiOutlineCalendar } from "react-icons/ai"; // Importing an icon for the button

const data = [
    { name: "Dec 28", value: 140000 },
    { name: "Dec 29", value: 145000 },
    { name: "Dec 30", value: 150000 },
    { name: "Dec 31", value: 148000 },
    { name: "Jan 1", value: 153000 },
    { name: "Jan 2", value: 155000 },
    { name: "Jan 3", value: 156098 },
];

const RecurringRevenue = () => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-lg font-medium text-gray-700">Recurring Revenue</h1>
                    <h1 className="text-2xl font-bold">$156,098</h1>
                    <div className="flex items-center mt-1">
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded">
                            10% &#x2191;
                        </span>
                    </div>
                </div>
                <div>
                    <button className="flex items-center border border-gray-300 px-3 py-1.5 rounded text-gray-600 bg-gray-50 text-sm">
                        <AiOutlineCalendar className="mr-1" />
                        This Week
                    </button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={120}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#4b5563" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#4b5563" }} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#5b21b6"
                        strokeWidth={3} // Slightly thinner line
                        dot={false} // Removes dots on the line
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RecurringRevenue;
