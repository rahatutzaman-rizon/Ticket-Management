import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100 flex-1 overflow-auto">
      <div className="w-42 bg-indigo-900 text-white flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />

        {/* Add overflow-auto to this container to allow full-page scrolling */}
        <main className="">
          <div className="container mx-auto px-4 py-2">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
