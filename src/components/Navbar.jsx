import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import '../index.css';
import './Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        window.innerWidth > 768 ? setIsMobile(false) && setIsNavOpen(false) : setIsMobile(true);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav>
            <div className='navbar'>
                <a href="#">
                    <img src={assets.LogoNegro} alt="Logo Drakon" className='logo' />
                </a>


                <div className={`navbar-center ${isNavOpen && isMobile ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Cocteles</a></li>
                        <li><a href="#">Nuestra historia</a></li>
                        <li><a href="#">Proceso</a></li>
                        <li><a href="#">Reconocimientos</a></li>
                        <li><a href="#">Equipo Drakon</a></li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <a href="#" className="cart-icon">
                        <img src={assets.Cart} alt="Carrito" />
                    </a>
                    <a href="#" className="user-icon">
                        <img src={assets.User} alt="Usuario" />
                    </a>
                </div>
                {isMobile && (
                    <div className="burger" onClick={() => setIsNavOpen(!isNavOpen)}>
                        <img src={assets.Burger} alt="Hamburger-Menu" />
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
