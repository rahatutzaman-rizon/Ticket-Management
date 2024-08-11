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
  <div className="w-36 bg-[#160042] text-white left-0 top-0 flex flex-col">
    <style>
      {`
        .sidebar-text {
          font-size: 10px;
        }
        .active-link {
          background-color: #3662FF;
        }
      `}
    </style>
    <nav className="flex-grow flex flex-col">
      <h1 className="text-xl font-bold px-8 text-center py-4">Sheba xyz</h1>
      <ul className="space-y-1 flex-grow">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `flex items-center justify-center space-x-3 px-2 py-3 ${isActive ? 'active-link' : ''}`}
            >
              <item.icon size={15} />
              <span className="sidebar-text">{item.text}</span>
              {item.notification && (
                <span className="ml-auto bg-red-500 text-xs rounded-full px-1">{item.notification}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '420px' }} className="px-4 mb-2">
        <div className="bg-blue-700 p-2 rounded-lg  mt-[-48px] mb-16 text-xs sidebar-text text-center">
          <p className="font-medium mb-2">Todays 40% off offer on all of our best features</p>
          <button className="bg-white text-blue-600 px-4 py-1 rounded-md text-xs font-bold sidebar-text">Upgrade plan</button>
        </div>
        <hr />
        <ul className="space-y-1">
          <li>
            <NavLink to="/help" className="flex items-center justify-center space-x-3 py-2">
              <HelpCircle size={15} />
              <span className="sidebar-text">Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="flex items-center justify-center space-x-3 py-3">
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