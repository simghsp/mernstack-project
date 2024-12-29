import React, { useState, useEffect } from 'react';
import fsbanner from '../../assets/images/fsbanner.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Flashsaless = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically'); // State to track sorting option

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={fsbanner} alt="Banner" className="banner-img" />
      </div>
      
      {/* Main Container (Navbar + Product Info Box) */}
      <div className="main-container">
        {/* Vertical Navbar */}
        <nav className="vertical-nav">
          <ul>
            <li>
              Product
              <button
                onClick={() => handleSubmenuToggle(1)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 1 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              COLOR
              <button
                onClick={() => handleSubmenuToggle(2)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 2 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              FINISH
              <button
                onClick={() => handleSubmenuToggle(3)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 3 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              PRICE
              <button
                onClick={() => handleSubmenuToggle(4)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 4 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              STYLE
              <button
                onClick={() => handleSubmenuToggle(5)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 5 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              METAL
              <button
                onClick={() => handleSubmenuToggle(6)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 6 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li>
              Subcategory
              <button
                onClick={() => handleSubmenuToggle(7)}
                className="submenu-toggle"
              >
                <MdOutlineKeyboardArrowDown />
              </button>
              {openSubmenu === 7 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Product Info Box (Right side of the Navbar) */}
        <div className="product-info-box">
          <button className="sorting-button">
            159 Products
          </button>
          <div className="sorting-options">
            <label htmlFor="sort-option">Sort By:</label>
            <select
              id="sort-option"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="alphabetically">Alphabetically (A-Z)</option>
              <option value="price-low-high">Price (Low to High)</option>
              <option value="price-high-low">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsaless;
