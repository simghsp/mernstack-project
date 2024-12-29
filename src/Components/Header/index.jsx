import React from 'react';
import { Link } from 'react-router-dom';
import pp1 from '../../assets/images/pp1.png';
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Navigation from '../Navigation';

const Header = () => {
    return (
        <>
            {/* Header Wrapper */}
            <div className="headerWrapper">
                {/* Logo Section */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper col-sm-3">
                                <Link to={'/'}>
                                    <img src={pp1} alt="Company Logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="headerSearch">
                    <input
                        type="text"
                        placeholder="Search our store"
                        aria-label="Search our store"
                    />
                    <Button aria-label="Search">
                        <IoSearchOutline />
                    </Button>
                </div>

                {/* User Icons Section */}
                <div className="headerIcons">
                    {/* Custom SVG User Icon */}
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="svgIconTitle"
                    >
                        <title id="svgIconTitle">User Icon</title>
                        <path
                            d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z"
                            fill="#FEA203"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z"
                            fill="currentColor"
                            stroke="currentColor"
                        ></path>
                    </svg>

                   
                    {/* Shopping Bag Icon */}
                    <div className="ml-auto shopBag">
                        <Button className="circle ml-2" aria-label="Shopping Bag">
                            <HiOutlineShoppingBag />
                        </Button>
                    </div>
                </div>
                <Navigation/>
            </div>
        </>
    );
};

export default Header;
