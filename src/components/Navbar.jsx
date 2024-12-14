import React from 'react';
import logo from "../assets/logo.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/teegala-umesh-chandra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/UMESHCHANDRA2762"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
