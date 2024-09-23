import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <a href="#">
                <img src={assets.LogoNegro} alt=""  className='logo' />

                </a>
                

            </div>
            <div className="navbar-centers">
                <ul className="nav-links">
                    <li>
                        <a href="">Productos</a>
                        <a href="">Cocteles</a>
                        <a href="">Nuestra historia</a>
                        <a href="">Proceso</a>
                        <a href="">Reconocimientos</a>
                        <a href="">Equipo Drakon</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="#" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                </a>
                <a href="#" className="user-icon"></a>


            </div>

        </nav>

    )
}

export default Navbar
