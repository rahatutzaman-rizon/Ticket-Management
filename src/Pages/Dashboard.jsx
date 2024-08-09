import ActivityCard from "../Components/Dashboard/Activity";
import CardInfo from "../Components/Dashboard/CardInfo";
import CostBreakdown from "../Components/Dashboard/CostBreakdown";
import OverviewCard from "../Components/Dashboard/Overview";
import RecurringRevenue from "../Components/Dashboard/RecurringRevenue";
import ProjectCard from "../Components/Dashboard/TopProjects";
import MostOrderByCountry from "../Components/Dashboard/MostOrderByCountry";

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Overview Section */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Overview</h1>
              <select className="border rounded px-2 py-1 text-sm">
                <option>This week</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <OverviewCard
                title="Earnings"
                value="128k"
                change="37.8% this week"
                isPositive={true}
                bgColor="bg-green-100"
                chartColor="rgba(34, 197, 94, 1)"
              />
              <OverviewCard
                title="Customers"
                value="512"
                change="37.8% this week"
                isPositive={false}
                bgColor="bg-blue-100"
                chartColor="rgba(59, 130, 246, 1)"
              />
              <OverviewCard
                title="Payouts"
                value="64k"
                change="37.8% this week"
                isPositive={true}
                bgColor="bg-purple-100"
                chartColor="rgba(139, 92, 246, 1)"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Top Projects</h2>
              <select className="border rounded px-2 py-1 text-sm">
                <option>March 2022</option>
              </select>
            </div>

            {/* Table Headers */}
            <div className="hidden sm:flex justify-between items-center text-gray-500 text-sm font-medium border-b pb-2">
              <div className="w-1/4">Assigned</div>
              <div className="w-1/4">Project</div>
              <div className="w-1/4">Priority</div>
              <div className="w-1/4">Budget</div>
            </div>

            <div className="space-y-2 mt-2">
              <ProjectCard
                name="Sunil Joshi"
                role="Web Designer"
                project="Elite Admin"
                priority="Low"
                budget="$3.9k"
                priorityColor="text-green-500"
              />
              <ProjectCard
                name="John Deo"
                role="Web Developer"
                project="Flexy Admin"
                priority="Medium"
                budget="$24.5k"
                priorityColor="text-yellow-500"
              />
              <ProjectCard
                name="Mathew Anderson"
                role="Web Manager"
                project="Material Pro"
                priority="High"
                budget="$12.8k"
                priorityColor="text-red-500"
              />
              <ProjectCard
                name="Yuvraj Sheth"
                role="Project Manager"
                project="Xtreme Admin"
                priority="Very High"
                budget="$2.4k"
                priorityColor="text-blue-500"
              />
            </div>
          </div>

          {/* Recurring Revenue and Cost Breakdown */}
          <div className="flex gap-2 ">
            <RecurringRevenue />
            <CostBreakdown />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <ActivityCard />
          <CardInfo cardHolder="Dinda Anggita" expires="03/23" cardNumber="1234" />
          <MostOrderByCountry />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;