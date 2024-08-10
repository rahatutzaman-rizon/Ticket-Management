import { useState } from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className= " ml-8 bg-white dark:bg-gray-800 p-2 mx-2 rounded-full mt-2 flex justify-between items-center shadow-sm">
        {/* Dashboard Title */}
        <h2 className="text-2xl font-bold text-black dark:text-white">Dashboard</h2>

        {/* Search and Controls */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-gray-400 dark:text-gray-300" size={20} />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Light/Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-black dark:text-white">Light</span>
            <div
              className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
              onClick={toggleDarkMode}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? 'translate-x-7' : ''
                }`}
              ></div>
            </div>
            <span className="text-sm text-black dark:text-white">Dark</span>
          </div>

          {/* Icons and User Avatar */}
          <Bell size={20} className="text-gray-500 dark:text-gray-300 cursor-pointer" />
          <Settings size={20} className="text-gray-500 dark:text-gray-300 cursor-pointer" />
          <img
            src="https://i.ibb.co/M7PR1QN/IMG-20210331-222352-817.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Main Content */}
      
    </div>
  );
};

export default Header;
