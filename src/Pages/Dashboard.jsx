import ActivityCard from "../Components/Dashboard/Activity";
import OverviewCard from "../Components/Dashboard/Overview";
import CardInfo from "../Components/Dashboard/RecurringRevenue";
import ProjectCard from "../Components/Dashboard/TopProjects";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview Section */}
          <div className="grid grid-cols-3 gap-4">
            <OverviewCard title="Earnings" value="128k" change="3.2% this week" isPositive={true} icon="chart-line" />
            <OverviewCard title="Customers" value="512" change="3.7% this week" isPositive={false} icon="users" />
            <OverviewCard title="Payouts" value="64k" change="2.7% this week" isPositive={true} icon="credit-card" />
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Top Projects</h2>
              <select className="border rounded px-2 py-1">
                <option>March 2022</option>
              </select>
            </div>
            <div className="space-y-4">
              <ProjectCard name="Sunil Joshi" role="Web Designer" project="Elite Admin" priority="Low" budget="$3.9k" priorityColor="text-green-500" />
              <ProjectCard name="John Deo" role="Web Developer" project="Flexy Admin" priority="Medium" budget="$24.5k" priorityColor="text-yellow-500" />
              <ProjectCard name="Mathew Anderson" role="Web Manager" project="Material Pro" priority="High" budget="$12.8k" priorityColor="text-red-500" />
              <ProjectCard name="Yuvraj Sheth" role="Project Manager" project="Xtreme Admin" priority="Very High" budget="$2.4k" priorityColor="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ActivityCard />
          {/* <ComparisonChart /> */}
          <CardInfo cardHolder="Dinda Anggita" expires="03/23" cardNumber="1234" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;