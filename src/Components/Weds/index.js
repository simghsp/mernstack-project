import React, { useState, useEffect } from 'react';
import wsbanner from '../../assets/images/wsbanner.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Weds = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div>
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={wsbanner} alt="Banner" className="banner-img" />
      </div>
      
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
    </div>
  );
};

export default Weds;
