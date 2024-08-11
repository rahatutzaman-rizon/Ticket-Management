import React, { useState } from 'react';
import { Search, Moon, Bell, UserCircle } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="bg-white mt-4 dark:bg-gray-800 p-3 rounded-lg ml-8    flex justify-between items-start shadow-sm mx-4">
        {/* Dashboard Title */}
        <h2 className="text-xl mt-1 font-bold text-black dark:text-white">Dashboard</h2>

        {/* Search and Controls */}
        <div className="flex items-center    gap-4">
          {/* Search Bar */}
        
          <div className="relative w-full mr-24">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black dark:text-gray-300" size={18} />
      <input
        type="text"
        placeholder="Search here..."
        className="pl-10 pr-4 py-2 text-xs rounded-full w-72 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white placeholder-black"
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
          <Bell size={30} className="text-gray-500 dark:text-gray-300 cursor-pointer" />
          
          <img
            src="https://i.ibb.co/M7PR1QN/IMG-20210331-222352-817.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
