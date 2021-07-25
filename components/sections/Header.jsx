import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const toggleMenu = () => isMobile && setMenuOpen((state) => !state);
  const closeMenu = () => isMobile && setMenuOpen(false);

  const handleScreenResChange = ({ matches }) => {
    setIsMobile(matches);
  };
  useEffect(() => {
    const mqList = window.matchMedia('(max-width: 1024px)');
    setIsMobile(mqList.matches);
    mqList.addListener(handleScreenResChange);
    return () => {
      mqList.removeListener(handleScreenResChange);
    };
  }, []);

  return (
    <header className="container flex items-center justify-between h-20">
      <div>
        <img
          src="/images/logo-white.svg"
          className="w-10 h-10 opacity-80"
          height="40px"
          width="40px"
          alt="Adithya Sreyaj Logo"
        />
      </div>
      <button
        className="flex items-center lg:hidden"
        aria-label="Open Menu"
        onClick={() => toggleMenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"
            fill="#fff"
          />
        </svg>
      </button>
      <nav
        className={`main-menu hidden lg:block ${
          isMobile && isMenuOpen ? 'open' : 'close'
        }`}
        style={{
          display: (isMobile && isMenuOpen) || !isMobile ? 'flex' : 'none',
        }}
      >
        <button
          aria-label="Close Menu"
          className="absolute hidden top-4 right-8"
          onClick={() => toggleMenu()}
          style={{ display: isMobile && isMenuOpen ? 'block' : 'none' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            />
          </svg>
        </button>
        <ul className="grid grid-cols-6 gap-6 font-semibold text-white list-none font-heading">
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#" onClick={() => closeMenu()}>
              Home
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#projects" onClick={() => closeMenu()}>
              Projects
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#about" onClick={() => closeMenu()}>
              About
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#blog" onClick={() => closeMenu()}>
              Blog
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#talks" onClick={() => closeMenu()}>
              Talks
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#contact" onClick={() => closeMenu()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
