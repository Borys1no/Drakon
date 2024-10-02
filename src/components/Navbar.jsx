import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; 
import { CartContext } from '../contexts/CartContext'; // Importar el contexto del carrito
import { assets } from '../assets/assets';
import '../index.css';
import './Navbar.css';

const Navbar = () => {
    const { userLoggedIn, currentUser } = useAuth(); 
    const { cartItems } = useContext(CartContext); // Acceder a los elementos del carrito
    const navigate = useNavigate(); 

    const handleLogout = async () => {
        // Lógica de logout
    };

    return (
        <nav>
            <div className='navbar'>
                <a href="/Home">
                    <img src={assets.LogoNegro} alt="Logo Drakon" className='logo' />
                </a>

                <div className="navbar-center">
                    <ul className="nav-links">
                        <li><a href="/products">Productos</a></li>
                        <li><a href="#">Cocteles</a></li>
                        <li><a href="#">Nuestra historia</a></li>
                        <li><a href="#">Proceso</a></li>
                        <li><a href="#">Reconocimientos</a></li>
                        <li><a href="#">Equipo Drakon</a></li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <a onClick={() => navigate('/checkout')} className="cart-icon" style={{ position: 'relative' }}>
                        <img src={assets.Cart} alt="Carrito" />
                        {/* Mostrar cantidad de items solo si hay artículos en el carrito */}
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
            </div>
        </nav>
    );
};

export default Navbar;
