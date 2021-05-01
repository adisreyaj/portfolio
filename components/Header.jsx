import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="container flex items-center justify-between h-20">
      <div>
        <Image
          src="/images/logo-white.svg"
          className="w-10 h-10 opacity-80"
          height={40}
          width={40}
        />
      </div>
      <nav>
        <ul className="grid grid-cols-4 gap-10 font-semibold text-white list-none font-heading">
          <li className="text-center uppercase cursor-pointer">Home</li>
          <li className="text-center uppercase cursor-pointer">Projects</li>
          <li className="text-center uppercase cursor-pointer">Blog</li>
          <li className="text-center uppercase cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
