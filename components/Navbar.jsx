import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  // State for tracking which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  }; 

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg flex">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-6xl font-bold">
          <Link to="/">SAPPHIRE</Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          {['New In', 'Woman', 'Man', 'Kids', 'Beauty', 'Accessories', 'Home', 'Special Offers'].map((menu) => (
            <div
              key={menu}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="text-gray-800 hover:text-gray-500">
                {menu}
              </Link>

              {/* Dropdown Menu */}
              {openDropdown === menu && (
                <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg border rounded-lg p-6 z-50">
                  <div className="grid grid-cols-4 gap-4">
                    {/* Links Section */}
                    <div>
                      <h4 className="font-bold text-lg">SHOP BY COLLECTION</h4>
                      <ul className="space-y-2 mt-2">
                        <li><Link to="/fall-winter" className="hover:text-gray-600">Fall/Winter '24</Link></li>
                        <li><Link to="/festive" className="hover:text-gray-600">Festive '24</Link></li>
                        <li><Link to="/matching-separates" className="hover:text-gray-600">Matching Separates</Link></li>
                        {/* Add more links as needed */}
                      </ul>
                    </div>
                    {/* Additional Sections */}
                    <div>
                      <h4 className="font-bold text-lg">SHOP BY PIECE</h4>
                      <ul className="space-y-2 mt-2">
                        <li><Link to="/shirts" className="hover:text-gray-600">Shirts</Link></li>
                        <li><Link to="/dupattas" className="hover:text-gray-600">Dupattas</Link></li>
                        <li><Link to="/bottoms" className="hover:text-gray-600">Bottoms</Link></li>
                        {/* Add more links as needed */}
                      </ul>
                    </div>
                    {/* Image Section */}
                    <div className="col-span-2">
                      <img src="https://via.placeholder.com/300x200" alt="Collection" className="rounded-lg" />
                      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search and Cart Icons (Placeholder icons for demonstration) */}
        <div className="flex items-center space-x-4">
          <span className="material-icons">search</span>
          <span className="material-icons">account_circle</span>
          <span className="material-icons">shopping_cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
