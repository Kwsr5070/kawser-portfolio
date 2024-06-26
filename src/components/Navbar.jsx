import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin,  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/logo.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/skill'>Skill</NavLink>
      </li>
      <li>
        <NavLink to='/experience'>Experience</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#0a192f] text-gray-300 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleNav}
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isNavOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          )}
        </div>
        <div>
          <img className='w-16 rounded-full' src={logo} alt="logo image" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="px-32 text-3xl text-end">Md Kawser Ahmed</div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        </ul>
          
        <a href="https://www.linkedin.com/in/md-kawser-ahmed-97428a262" target="_blank" rel="noopener noreferrer" className='w-[140px] h-60px flex justify-between item center ml-[-100px] hover:ml-[-2px] duration-300 bg-blue-700'>
          <span className='flex justify-between items-center w-full text-gray-300'>LinkedIn <FaLinkedin size={40}/></span>
        </a>
        <a href="https://github.com/Kwsr5070" target="_blank" rel="noopener noreferrer" className='w-[140px] h-60px flex justify-between item center ml-[-100px] hover:ml-[-2px] duration-300 bg-gray-700'>
          <span className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={40}/></span>
        </a>
        <a href="mailto:mdkwsr5070@gmail.com" className='w-[140px] h-60px flex justify-between item center ml-[-100px] hover:ml-[-2px] duration-300 bg-[#6fc2b0]'>
          <span className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={40}/></span>
        </a>
        <a href="https://wa.me/01857399180" target="_blank" rel="noopener noreferrer" className='w-[140px] h-60px flex justify-between item center ml-[-100px] hover:ml-[-2px] duration-300 bg-gray-500'>
          <span className='flex justify-between items-center w-full text-gray-300'>Whatsapp <FaWhatsapp size={40}/></span>
        </a>

      </div>
    </div>
    
  );
};

export default Navbar;
