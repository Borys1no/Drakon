import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; // Importamos el contexto de autenticación
import { doSignOut } from '../firebase/auth'; // Importamos la función para cerrar sesión
import { assets } from '../assets/assets';
import '../index.css';
import './Navbar.css';
import Home from './home/Home';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { userLoggedIn, currentUser } = useAuth(); // Accedemos al estado de autenticación
    const navigate = useNavigate(); // Usamos navigate para redirigir

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

    const handleLogout = async () => {
        try {
            await doSignOut(); // Llamamos a la función para cerrar sesión
            navigate('/login'); // Redirigimos al usuario a la página de login
        } catch (error) {
            console.error('Error al cerrar sesión: ', error);
        }
    };

    return (
        <nav>
            <div className='navbar'>
                <a href="/Home">
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

                    {/* Si el usuario está logueado, mostramos su email y el botón de logout */}
                    {userLoggedIn ? (
                        <div className="user-logged-in">
                            <span>{currentUser?.email}</span> {/* Muestra el correo del usuario logueado */}
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    ) : (
                        <a href="/login" className="user-icon">
                            <img src={assets.User} alt="Usuario" />
                        </a>
                    )}
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
