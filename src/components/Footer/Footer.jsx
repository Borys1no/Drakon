import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import '../../index.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="containerF">
        <div className="footer-row">
          {/* Contact Section */}
          <div className="footer-col">
            <h3>{t('footerContactoTitle')}</h3>
            <p>
              {t('footerEmail')}: <a href="mailto:svelez@lafelipa.com.ec">svelez@lafelipa.com.ec</a>
            </p>
            <p>
              {t('footerPhone')}: <a href="tel:+593986850872">+593 986850872</a>
            </p>
          </div>

          {/* Address Section */}
          <div className="footer-col">
            <h3>{t('footerDireccionTitle')}</h3>
            <p>
              <strong>{t('footerOficina')}:</strong> {t('footerOficinaAddress')}
            </p>
            <p>
              <strong>{t('footerDestileria')}:</strong> {t('footerDestileriaAddress')}
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-col">
            <h3>{t('footerRedesSocialesTitle')}</h3>
            <div className="social-links">
              <a href="#">
                <img src={assets.FacebookRosa} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/drakon.ec?igsh=MTFndW45YXczcXZvZQ==">
                <img src={assets.InstagramRosa} alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@drakon.ec?_t=ZM-8tBa58CVLqH&_r=1">
                <img src={assets.TikTok} alt="TikTok" />
              </a>
              <a href="#">
                <img src={assets.Xrosa} alt="X" />
              </a>
              <a href="#">
                <img src={assets.LinkedinRosa} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
