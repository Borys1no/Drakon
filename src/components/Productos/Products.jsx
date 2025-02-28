import React from 'react';
import './Products.css';
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans

const Products = () => {
    const { t } = useTranslation(); // Destructure t function for translations

    return (
        <div className="products-container">
            {/* Fondo global */}
            <img className="background-image" src={assets.SLIDES2copy} alt="SLIDES2copy" />

            {/* Producto 1: Malke Virgen (Imagen a la derecha) */}
            <div className="product-section">
                <div className="product-image">
                    <img src={assets.BOTELLAROSAcopy} alt="Malke Virgen" />
                </div>
                <div className="product-text">
                    <h2 className="playfair-display-3TituloDrakonh1">{t('drakonDestilado')}</h2>
                    <p className="product-description-poppins">
                        {t('drakonDestiladoDescription')}
                    </p>

                    <h3 className="product-subtitle">{t('bottleDetails')}</h3>
                    <p className="product-no-gap">{t('alcoholContent')}</p>
                    <p className="product-no-gap">{t('bottleSize')}</p>

                    <div className="product-features-container">
                        <ul className="product-features">
                            <li><strong>{t('view')}</strong> {t('drakonDestiladoView')}</li>
                            <li><strong>{t('taste')}</strong> {t('drakonDestiladoTaste')}</li>
                            <li><strong>{t('body')}</strong> {t('drakonDestiladoBody')}</li>
                            <li><strong>{t('aroma')}</strong> {t('drakonDestiladoAroma')}</li>
                        </ul>
                    </div>

                    <p className="product-description-poppins">{t('drakonDestiladoIdeal')}</p>

                    {/* Botón de Comprar */}
                    <div className="button-container2">
                        <button className="buy-button">
                            <a href="/DrakonDestilado">{t('addToCart')}</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Producto 2: Malke Triple Destilado (Imagen a la izquierda) */}
            <div className="product-section reverse">
                <div className="product-image-2">
                    <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
                </div>
                <div className="product-text">
                    <h2 className="playfair-display-3TituloDrakonh1">{t('drakonTripleDestilado')}</h2>
                    <p className="product-description-poppins">
                        {t('drakonTripleDestiladoDescription')}
                    </p>

                    <h3 className="product-subtitle">{t('bottleDetails')}</h3>
                    <p className="product-no-gap">{t('alcoholContent')}</p>
                    <p className="product-no-gap">{t('bottleSize')}</p>

                    <div className="product-features-container">
                        <ul className="product-features">
                            <li><strong>{t('view')}</strong> {t('drakonTripleDestiladoView')}</li>
                            <li><strong>{t('taste')}</strong> {t('drakonTripleDestiladoTaste')}</li>
                            <li><strong>{t('body')}</strong> {t('drakonTripleDestiladoBody')}</li>
                            <li><strong>{t('aroma')}</strong> {t('drakonTripleDestiladoAroma')}</li>
                        </ul>
                    </div>

                    <p className="product-description-poppins">{t('drakonTripleDestiladoIdeal')}</p>

                    {/* Botón de Comprar */}
                    <div className="button-container2">
                        <button className="buy-button">
                            <a href="/TripleDestilado">{t('addToCart')}</a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;