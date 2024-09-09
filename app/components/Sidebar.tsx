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
        <li className="p-4 hover:bg-gray-700">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <FaHome className="mr-3" /> <span>Home</span>
            </a>
          </Link>
        </li>

        {/* Link para Search */}
        <li className="p-4 hover:bg-gray-700">
          <Link href="/search" legacyBehavior>
            <a className="flex items-center">
              <FaSearch className="mr-3" /> <span>Search</span>
            </a>
          </Link>
        </li>

        {/* Link para Favorites */}
        <li className="p-4 hover:bg-gray-700">
          <Link href="/favorites" legacyBehavior>
            <a className="flex items-center">
              <FaHeart className="mr-3" /> <span>Favorites</span>
            </a>
          </Link>
        </li>

        {/* Link para Settings */}
        <li className="p-4 hover:bg-gray-700">
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center">
              <FaCog className="mr-3" /> <span>Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
