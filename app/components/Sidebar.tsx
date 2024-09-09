'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaHeart, FaCog, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botão de menu hambúrguer para telas pequenas */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-4 text-gray-800 dark:text-white"
        aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-100 dark:bg-gray-900 dark:text-white md:static md:w-full md:flex md:flex-col md:h-auto md:bg-transparent md:text-gray-800 md:border-none ${isOpen ? 'block' : 'hidden md:block'}`}
      >
        <div className="p-4 flex items-center justify-between border-b dark:border-gray-700">
          <h1 className="text-2xl font-bold">My Weather App</h1>
          {/* Botão de fechar para o menu hambúrguer */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-800 dark:text-white"
            aria-label="Fechar Menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col mt-6 flex-grow">
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <FaHome className="mr-3" /> <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200">
            <Link href="/search" legacyBehavior>
              <a className="flex items-center">
                <FaSearch className="mr-3" /> <span>Search</span>
              </a>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200">
            <Link href="/favorites" legacyBehavior>
              <a className="flex items-center">
                <FaHeart className="mr-3" /> <span>Favorites</span>
              </a>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200">
            <Link href="/settings" legacyBehavior>
              <a className="flex items-center">
                <FaCog className="mr-3" /> <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
