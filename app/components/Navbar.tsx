'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const currentRoute:string=usePathname();
    return (
        
<nav className="bg-white border-b border-gray-200 dark:bg-gray-900 " >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" href="/">Math-Magicians</Link>
  
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${currentRoute=='/'? 'text-blue-700' : ''}`} href="/">Home</Link>
        </li>
        <li>
          <Link className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${currentRoute=='/calculator'? 'text-blue-700' : ''}`}  href="/calculator">Calculator</Link>
        </li>
        <li>
          <Link className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${currentRoute=='/quote'? 'text-blue-700' : ''}`} href="/quote">Qoute</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
};

export default Navbar;