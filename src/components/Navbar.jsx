import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; 
import { CartContext } from '../contexts/CartContext'; // Importar el contexto del carrito
import { doSignOut } from '../firebase/auth'; // Importamos la función para cerrar sesión
import { assets } from '../assets/assets';
import '../index.css';
import './Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { userLoggedIn, currentUser } = useAuth(); 
    const { cartItems } = useContext(CartContext); // Acceder a los elementos del carrito
    const navigate = useNavigate(); 

    // Manejar el redimensionamiento de la pantalla
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

    // Función para hacer logout
    const handleLogout = async () => {
        try {
            await doSignOut(); // Llamamos a la función para cerrar sesión
            navigate('/login'); // Redirigir al login después del logout
        } catch (error) {
            console.error('Error al cerrar sesión: ', error);
        }
    };

    return (
        <nav>
            <div className='navbar'>
                <a href="/Home">
                    <img src={assets.LogoDrakon} alt="Logo Drakon" className='logo' />
                </a>

                <div className={`navbar-center ${isNavOpen && isMobile ? 'active' : ''}`}>
                    <ul className="nav-links">
                        
                        <li><a href="/products">PRODUCTOS</a></li>
                        <li><a href="/Cocteles">COCTELES</a></li>
                        <li><a href="/NuestraHistoria">NUESTRA HISTORIA</a></li>
                        <li><a href="/Procesos">PROCESO</a></li>
                        <li><a href="/Reconocimientos">RECONOCIMIENTOS</a></li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <a onClick={() => navigate('/checkout')} className="cart-icon" style={{ position: 'relative' }}>
                        <img src={assets.Cart} alt="Carrito" />
                        {cartItems.length > 0 && (
                            <span className="cart-count">{cartItems.length}</span>
                        )}
                    </a>

                    {userLoggedIn ? (
                        <div className="user-logged-in">
                            <span>{currentUser?.email}</span> 
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
