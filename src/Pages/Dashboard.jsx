import ActivityCard from "../Components/Dashboard/Activity";
import CardInfo from "../Components/Dashboard/CardInfo";
import CostBreakdown from "../Components/Dashboard/CostBreakdown";
import OverviewCard from "../Components/Dashboard/Overview";
import RecurringRevenue from "../Components/Dashboard/RecurringRevenue";
import ProjectCard from "../Components/Dashboard/TopProjects";
import MostOrderByCountry from "../Components/Dashboard/MostOrderByCountry";
import TopProjectsDashboard from "../Components/Dashboard/TopProjects";

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-0">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview Section */}
          <div className="p-4 bg-gray-100 rounded-lg shadow ">
            <div className="flex justify-between items-center mb-4">
             <div className="flex gap-2">
              <h2 className="p-2 bg-purple-300"></h2>
              <p className="text-lg font-bold text-black  style={{
  fontWeight: 700,
  fontSize: '240px'
}} ">Overview</p>
             </div>
              <select className="border rounded px-2 py-1 text-xs font-bold">
                <option>This week</option>
              </select>
            </div>
         
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <OverviewCard
       icon="earnings"
        title="Earnings"
        value="128k"
        change="37.8% "
        isPositive={true}
        bgColor="bg-green-100"
        chartColor="rgba(34, 197, 94, 1)"
      />
      <OverviewCard
        icon="customer"
        title="Customers"
        value="512k"
        change="37.8% "
        isPositive={false}
        bgColor="bg-blue-100"
        chartColor="rgba(59, 130, 246, 1)"
      />
      <OverviewCard
        icon="payouts"
        title="Payouts"
        value="64k"
        change="37.8%"
        isPositive={true}
        bgColor="bg-purple-100"
        chartColor="rgba(139, 92, 246, 1)"
      />
    </div>



          </div>

          {/* Projects Section */}
<div className="bg-white rounded-lg shadow p-2">
  <div className="flex justify-between items-center mb-2">
    <TopProjectsDashboard></TopProjectsDashboard>
  </div>

  {/* Table Headers */}
 
</div>


          {/* Recurring Revenue and Cost Breakdown */}
          <div className="flex gap-2 ">
          <div className="w-2/3">
          <RecurringRevenue />
          </div>

            <div className="w-1/3">
            <CostBreakdown />
            </div>
            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ActivityCard />
          <CardInfo cardHolder="Dinda Anggita" expires="03/23" cardNumber="1234" />
          <MostOrderByCountry />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;