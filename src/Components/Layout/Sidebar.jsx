import { Link } from 'react-router-dom';
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
  <div className="w-48 bg-indigo-950 text-white h-screen fixed left-0 top-0 flex flex-col">
    <style>
      {`
        .sidebar-text {
          font-size: 10px; /* Adjust the font size as needed */
        }
      `}
    </style>
    <nav className="flex-grow">
      <h1 className="text-2xl font-bold px-8 text-center py-2 sidebar-text">Sheba xyz</h1>
      <ul className="space-y-1 ">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={`flex items-center justify-center space-x-3 px-4 py-3 ${index === 0 ? 'bg-blue-600' : ''}`}>
              <item.icon size={15} />
              <span className="sidebar-text">{item.text}</span>
              {item.notification && (
                <span className="ml-auto bg-red-500 text-xs rounded-full px-1">{item.notification}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-auto mb-2 px-4">
      <div className="bg-blue-600 p-2 rounded-lg mb-4 text-xs sidebar-text text-center">
        <p className="font-medium mb-2">Today's 40% off offer on all of our best features</p>
        <button className="bg-white text-blue-600 px-4 py-1 rounded-md text-xs font-bold sidebar-text">Upgrade plan</button>
      </div>
      <ul className="space-y-1">
        <li>
          <Link to="/help" className="flex items-center justify-center space-x-3 py-3">
            <HelpCircle size={15} />
            <span className="sidebar-text">Help</span>
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center justify-center space-x-3 py-3">
            <LogOut size={20} />
            <span className="sidebar-text">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
