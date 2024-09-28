import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:svelez@lafelipa.com.ec">svelez@lafelipa.com.ec</a></p>
              <p>Phone: <a href="tel: +593986850872">+593 986850872</a></p>
            </div>
            <div className="footer-col">
              <h3>Direccion</h3>
              <p><strong>Oficina:</strong>Av los Arcos 335,
                edificio Arcos plaza 2 piso 4 oficina 423, Samborondon, 092301 Ecuador</p>
              <p><strong>Destileria: </strong>Km 8,5 via Tosagua
                sector cerro verde Rocafuerte, Manabi. Ecuador</p>
            </div>
            <div className="footer-col">
              <h3>Nuestras redes sociales</h3>
              <div className="social-links">
                <a href="#"><img src={assets.Facebook} alt="Facebook"  /></a>
                <a href="#"><img src={assets.Instagram} alt="Instagram"  /></a>
                <a href="#"><img src={assets.X} alt="X" /></a>
                <a href="#"><img src={assets.Linkedin} alt="Linkedin"  /></a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2023 copyright La Felipa. All rights reserved.</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
