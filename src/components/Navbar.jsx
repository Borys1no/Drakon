import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; 
import { CartContext } from '../contexts/CartContext'; // Importar el contexto del carrito
import { doSignOut } from '../firebase/auth'; // Importamos la función para cerrar sesión
import { assets } from '../assets/assets';
import '../index.css';
import './Navbar.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { User } from 'lucide-react'; // Importar el ícono de Lucide

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable

    const { userLoggedIn, currentUser } = useAuth(); 
    const { cartItems } = useContext(CartContext); // Acceder a los elementos del carrito
    const navigate = useNavigate(); 
    const { t, i18n } = useTranslation(); // Use the useTranslation hook

    // Manejar el redimensionamiento de la pantalla
    const handleResize = () => {
        window.innerWidth > 1024 ? setIsMobile(false) && setIsNavOpen(false) : setIsMobile(true);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Función para hacer logout
    const handleLogout = async () => {
        try {
            await doSignOut(); // Llamamos a la función para cerrar sesión
            navigate('/login'); // Redirigir al login después del logout
        } catch (error) {
            console.error('Error al cerrar sesión: ', error);
        }
    };

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav>
            <div className='navbar'>
                <a href="/Home">
                    <img src={assets.LogoDrakon} alt="Logo Drakon" className='logo' />
                </a>

                <div className={`navbar-center ${isNavOpen && isMobile ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="/products">{t('products')}</a></li>
                        <li><a href="/Cocteles">{t('cocktails')}</a></li>
                        <li><a href="/NuestraHistoria">{t('ourHistory')}</a></li>
                        <li><a href="/Procesos">{t('process')}</a></li>
                        <li><a href="/Reconocimientos">{t('recognitions')}</a></li>
                    </ul>
                </div>

                <div className="navbar-right">

                    {userLoggedIn ? (
                        <div 
                            className="user-logged-in" 
                            onMouseEnter={() => setIsDropdownOpen(true)} 
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Alternar menú al hacer clic
                        >
                            <User size={24} /> {/* Ícono de Lucide en todas las pantallas */}
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><a href="/userProfile">{t('settings')}</a></li>
                                        <li><button onClick={handleLogout}>{t('logout')}</button></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a href="/login" className="user-icon">
                            <img src={assets.User} alt="Usuario" />
                        </a>
                    )}

                    {/* Language Switcher Button */}
                    <div className="language-switcher">
                        <button onClick={() => changeLanguage('es')}>
                            <span>ES</span>
                        </button>
                        <button onClick={() => changeLanguage('en')}>
                            <span>EN</span>
                        </button>
                    </div>
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