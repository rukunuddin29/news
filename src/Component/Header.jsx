import React from 'react';
import './Header.css';
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoLogoAmplify } from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between items-center mt-3 mx-4 lg:mx-32'>
      <div className='flex items-center'>
        <IoLogoAmplify className='logo w-10 h-10 mr-4 text-rose-600 lg:w-20 lg:h-20' />
      </div>
      <div className='flex items-center gap-2 flex-grow lg:flex-grow-0 lg:w-1/2'>
        <input
          className='bg-slate-900 border-2 border-solid border-slate-800 px-3 py-1.5 rounded-2xl sm: lg:w-4/5 lg:h-14'
          type="text"
          placeholder='Search...'
        />
        <CiSearch className='text-2xl -ml-8 lg:-ml-12' />
      </div>
      <ul className='hidden lg:flex justify-end items-center gap-6'>
        <li>help</li>
        <li>contact</li>
        <li>sign-up</li>
      </ul>
      <div className='lg:hidden'>
        <FaBars className='text-2xl' />
      </div>
    </div>
  );
}

export default Header;
