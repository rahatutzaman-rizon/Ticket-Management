
import { Search, Bell, Settings } from 'lucide-react';

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center shadow-sm">
    {/* Dashboard Title */}
    <h2 className="text-2xl font-bold">Dashboard</h2>

    {/* Search and Controls */}
    <div className="flex items-center space-x-6">
      {/* Search Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search here..."
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Light/Dark Mode Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">Light</span>
        <div className="relative w-14 h-7 flex items-center bg-gray-300 rounded-full p-1">
          <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-7"></div>
        </div>
        <span className="text-sm">Dark</span>
      </div>

      {/* Icons and User Avatar */}
      <Bell size={20} className="text-gray-500 cursor-pointer" />
      <Settings size={20} className="text-gray-500 cursor-pointer" />
      <img src="/path/to/avatar.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
    </div>
  </header>
);

export default Header;
