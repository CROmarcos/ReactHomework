import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.scss';
import Navigation from '../../components/Navigation/Navigation';

const Header=()=>{
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer-Image" src={Logo} alt="Logo"/>
                </Link>
                <div>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header;