

const ActivityCard = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h4 className="text-lg font-semibold text-gray-800">Activity</h4>
      <div className="mt-4 flex justify-between">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">$4.32</p>
          <p className="text-sm text-gray-500">Online Shop</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">$1.64</p>
          <p className="text-sm text-gray-500">Application</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">$0.24</p>
          <p className="text-sm text-gray-500">Tax</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
