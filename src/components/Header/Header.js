import React from 'react';
import Logo from '../../assets/img/logo.png';
import {HeaderMain, HeaderMainInner, LogoContainer, LogoImage} from './HeaderStyle';
import Navigation from '../../components/Navigation/Navigation';

const Header=()=>{
    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainer to="/">
                    <LogoImage src={Logo} alt="Logo"/>
                </LogoContainer>
                <Navigation/>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;