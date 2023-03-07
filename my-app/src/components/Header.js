import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    Logo
} from '../theme/NavbarElements';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoSrc from './../images/header_logo.png';

const Header = () => {
    return (
        <>
            <Nav>
                <Navbar.Brand href="/">
                    <Logo src={LogoSrc} />
                </Navbar.Brand>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        ABOUT
                    </NavLink>
                    <NavLink to='/login' activeStyle>
                        LOGIN
                    </NavLink>
                </NavMenu>
            </Nav>


        </>
    );
};

export default Header;
