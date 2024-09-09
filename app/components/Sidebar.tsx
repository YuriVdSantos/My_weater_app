'use client';

import Link from 'next/link';
import { FaHome, FaSearch, FaHeart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-blue-100 flex flex-col text-foreground dark:bg-gray-900 dark:text-white">
      <div className="p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">My Weather App</h1>
      </div>
      <ul className="flex flex-col mt-6">
        {/* Link para Home */}
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <Link href="/" className="flex items-center">
            <FaHome className="mr-3" /> <span>Home</span>
          </Link>
        </li>

        {/* Link para Search */}
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <Link href="/search" className="flex items-center">
            <FaSearch className="mr-3" /> <span>Search</span>
          </Link>
        </li>

        {/* Link para Favorites */}
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <Link href="/favorites" className="flex items-center">
            <FaHeart className="mr-3" /> <span>Favorites</span>
          </Link>
        </li>

        {/* Link para Settings */}
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <Link href="/settings" className="flex items-center">
            <FaCog className="mr-3" /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
