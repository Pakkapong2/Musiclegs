import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-600 border-gray-200 dark:bg-amber-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./pic/logo.png"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Music Legs
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 dark:text-gray-400 dark:hover:bg-amber-600 dark:focus:ring-amber-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-amber-600 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-amber-600 dark:bg-amber-600 md:dark:bg-amber-600 dark:border-gray-700">
            <li>
            <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white dark:hover:text-black"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white dark:hover:text-black"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="block py-2 px-3 text-gray-900 rounded hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white dark:hover:text-black"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="block py-2 px-3 text-gray-900 rounded hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white dark:hover:text-black"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 