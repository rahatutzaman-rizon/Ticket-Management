import { NavLink } from 'react-router-dom';
import { Home, Users, Ticket, MessageSquare, FileText, HelpCircle, LogOut, Box } from 'lucide-react';

const navItems = [
  { icon: Home, text: 'Home', path: '/' },
  { icon: Box, text: 'Contacts', path: '/contacts' },
  { icon: Ticket, text: 'Ticket', path: '/tickets' },
  { icon: MessageSquare, text: 'Chats', path: '/chats', notification: 1 },
  { icon: Users, text: 'Users', path: '/users' },
  { icon: FileText, text: 'Note', path: '/notes' },
];

const Sidebar = () => (
  <div className="w-44 bg-[#160042] text-white flex flex-col">
    <style>
      {`
        .sidebar-text {
          font-size: 12px;
          font-weight: 300;
        }
        .active-link {
          background-color: #3662FF;
        }
      `}
    </style>
    <nav className="flex-grow flex flex-col ">
      <h1 className="text-xl font-bold px-2 text-center py-6">Sheba xyz</h1>
      <ul className="space-y-2 flex-grow ">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `flex items-center text-gray-200 space-x-4 px-8 py-3 ${isActive ? 'active-link' : ''}`}
            >
              <item.icon size={20} />
              <span className="sidebar-text ">{item.text}</span>
              {item.notification && (
                <span className="ml-auto bg-red-500 text-xs rounded-full px-1">{item.notification}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="px-6 py-10 mb-8 mt-72 ">
        <div className="bg-blue-700  p-2   text-xs rounded-lg text-center">
          <p className="font-medium mb-2 p-1 mt-1">Today's 40% off offer on all of our best features</p>
          <button className="bg-white mb-4 mt-2 text-blue-900 px-2 py-1 rounded-md text-xs font-bold ">Upgrade plan</button>
        </div>
        <br />
        <ul className="space-y-1 mx-4">
          <li>
            <NavLink to="/help" className="flex items-center space-x-3 py-4 ">
              <HelpCircle size={15} />
              <span className="sidebar-text">Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="flex items-center space-x-3 py-2">
              <LogOut size={15} />
              <span className="sidebar-text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Sidebar;
