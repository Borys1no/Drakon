import React from 'react';
import './Products.css';
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';

const Products = () => {
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
                <h2 className="playfair-display-3TituloDrakonh1">DRAKON DESTILADO</h2>
                    <p className="product-description-poppins">
                        Ofrece pureza excepcional y un perfil de sabor equilibrado, reflejando la escencia premium de la pitahaya manabita.
                    </p>
                    <hr className="separator-line" />

                    <h3 className="product-subtitle">Detalles de la botella</h3>
                    <p className="product-no-gap">32% alc/vol (64 proof).</p>
                    <p className="product-no-gap">750 ml</p>

                    
                    <div className="product-features-container">
                        <ul className="product-features">
                            <li><strong>Vista</strong> Claro, limpio y transparente.</li>
                            <li><strong>Sabor</strong> Entrada suave y persistente, con un final redondeado y placentero.</li>
                            <li><strong>Cuerpo</strong> Ligeras notas frutales con delicados destellos florales.</li>
                            <li><strong>Aroma</strong> Exótico y atractivo, con una mezcla de frutas y flores silvestres.</li>
                        </ul>
                    </div>

                    <p className="product-description-poppins">Ideal para coctelería gracias a su versatilidad, balance perfecto entre notas frutales y aromas florales.</p>

                    {/* Botón de Comprar */}
                    <div className="button-container">
                        <button className="buy-button">
                            <a href="/MalkeVirgen"> AÑADIR AL CARRITO</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Producto 2: Malke Triple Destilado (Imagen a la izquierda) */}
            <div className="product-section reverse" style={{ marginTop: '100px', marginBottom: '100px'}}>
                <div className="product-image">
                    <img src={assets.BOTELLAROSAcopy} alt="Malke Triple Destilado" />
                </div>
                <div className="product-text">
                    <h2 className="product-title">Malke Triple Destilado</h2>
                    <p className="product-description">
                        Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
                    </p>
                    <ul className="product-features">
                        <li><strong>Vista</strong> Brillante, limpio y transparente</li>
                        <li><strong>Sabor</strong> Elegante presencia frutal, con notas de pera y kiwi</li>
                        <li><strong>Cuerpo</strong> Elegante, ligeras notas de fruta, destellos florales</li>
                        <li><strong>Aroma</strong> Exótico aroma que incluye frutas y flores silvestres</li>
                        <li><strong>Diferencia</strong> El malke triple destilado es una opción ideal para coctelería, shot, o bajativo, aclamado internacionalmente.</li>
                    </ul>
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Products;
