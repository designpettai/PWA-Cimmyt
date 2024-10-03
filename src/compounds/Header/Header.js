import React from 'react';
import logo from '../../assets/Logo.png';
import '../HomePage/HomePage.css';

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="AgroTutor logo" />
                </div>
                <div className="logo-cnt">
                    <h1>AgroTutor</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
