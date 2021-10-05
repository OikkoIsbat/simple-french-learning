import React from 'react';

import logo from '../../images/header-logo.jpg';
import TheName from '../../images/name.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="headerContainer">
            <img className="logo" src={logo} alt="" srcSet="" />
            <img className="name" src={TheName} alt="" srcSet="" />

            {/* <nav className="d-flex justify-content-center">

            </nav> */}




        </div>
    );
};

export default Header;