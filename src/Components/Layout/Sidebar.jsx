import { Link } from 'react-router-dom';
import { Home, Users, Ticket, MessageSquare, FileText, HelpCircle, LogOut } from 'lucide-react';

const navItems = [
  { icon: Home, text: 'Home', path: '/' },
  { icon: Users, text: 'Contacts', path: '/contacts' },
  { icon: Ticket, text: 'Ticket', path: '/tickets' },
  { icon: MessageSquare, text: 'Chats', path: '/chats' },
  { icon: Users, text: 'Users', path: '/users' },
  { icon: FileText, text: 'Note', path: '/notes' },
];

const Sidebar = () => (
  <div className="w-40 bg-indigo-900 text-white h-screen fixed left-0 top-0 p-3 flex flex-col">
    <h1 className="text-lg font-bold mb-6">XYZ.com</h1>
    <nav className="flex-grow">
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-800">
              <item.icon size={18} />
              <span className="text-sm">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-auto mb-4">
      <div className="bg-indigo-800 p-3 rounded-lg mb-4 text-xs">
        <p className="font-bold mb-2">Today's 40% off offer on all of our best features</p>
        <button className="bg-white text-indigo-900 px-3 py-1 rounded-full text-xs font-bold">Upgrade plan</button>
      </div>
      <ul className="space-y-1">
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-indigo-800 rounded">
            <HelpCircle size={18} />
            <span className="text-sm">Help</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-indigo-800 rounded">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;