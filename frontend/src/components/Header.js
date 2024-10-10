import React from 'react';
import logo from '../assets/bgornaments_logo.jpeg';

function Header() {
  return (
    <header className="text-center bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg p-4">
      <div className="flex items-center justify-center space-x-4">
        <img src={logo} alt="Bharat Gold Ornaments Logo" className="h-16 w-16 rounded-full" />
        <h1 className="text-3xl">BHARAT GOLD ORNAMENTS</h1>
      </div>
    </header>
  );
}

export default Header;
