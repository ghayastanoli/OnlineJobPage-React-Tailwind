import React, { useState } from 'react';
import logo from '../assets/job.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-gradient-to-t from-[#8eb19d] to-[#cfdeb5] text-white">
      <div className="flex justify-between items-center py-4 px-6 sm:px-20 max-w-[1350px] w-[100%] m-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="h-16 bg-white rounded-2xl" />
          <h2 className="font-bold text-3xl">Jobs</h2>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden sm:flex ">
          <ul className="flex gap-4 text-xl font-medium ">
            <li>
              <a href="/">
                <button className="hover:bg-black p-2 rounded-md transition duration-300 active:bg-black">
                  Home
                </button>
              </a>
            </li>
            <li>
              <a href="/jobs">
                <button className="hover:bg-black p-2 rounded-md transition duration-300 active:bg-black">
                  Jobs
                </button>
              </a>
            </li>
            <li>
              <a href="/add-jobs">
                <button className="hover:bg-black p-2 rounded-md transition duration-300 active:bg-black">
                  Add Jobs
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden bg-gradient-to-t from-[#8eb19d] to-[#cfdeb5] p-4 text-center`}
      >
        <ul className="space-y-4 text-xl font-medium">
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/jobs" onClick={() => setIsOpen(false)}>
              Jobs
            </a>
          </li>
          <li>
            <a href="/add-jobs" onClick={() => setIsOpen(false)}>
              Add Jobs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
