import React, { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center text-white px-6 py-4 mb-10 bg-transparent relative">

      <div className="w-[120px] sm:w-[150px]">
        <img
          className="w-full h-full object-contain"
          src="https://anandahomes.co.in/wp-content/uploads/2025/02/Ananda-homes-new-logo-final-white.png"
          alt="Ananda Homes Logo"
        />
      </div>

    
      <div className="hidden md:flex items-center space-x-4">
        <a className="hover:border-2 border-white rounded-2xl px-3 py-1" href="#">Home</a>
        <a className="hover:border-2 border-white rounded-2xl px-3 py-1" href="#">About Us</a>
        <a className="hover:border-2 border-white rounded-2xl px-3 py-1" href="#">Projects</a>
        <a className="hover:border-2 border-white rounded-2xl px-3 py-1" href="#">Blog</a>
        <a className="hover:border-2 border-white rounded-2xl px-3 py-1" href="#">Contact</a>
      </div>


      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

   
      <div className="hidden md:block">
        <button className="transform transition-transform duration-200 hover:scale-110 cursor-pointer px-6 py-2 bg-white text-black rounded-3xl bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-gray-100">
          Back
        </button>
      </div>


      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <a onClick={() => setMenuOpen(false)} className="hover:text-gray-300" href="#">Home</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-gray-300" href="#">About Us</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-gray-300" href="#">Projects</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-gray-300" href="#">Blog</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-gray-300" href="#">Contact</a>
          <button
            className="px-6 py-2 bg-white text-black rounded-3xl border border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Back
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
