import React from 'react';
import './Products.css';
import { assets } from '../../assets/assets';

const Products = () => {
    return (
        <div className="products-container">
            {/* Encabezado grande centrado con imagen de fondo */}
            <div className="products-header">
                <h1>Drakon</h1>
            </div>

            {/* Producto 1: Malke Virgen (Imagen a la derecha) */}
            <div className="product-section">
                <div className="product-image">
                    <img src={assets.LogoNegro} alt="Malke Virgen" />
                </div>
                <div className="product-text">
                    <h2 className="product-title">Malke Virgen</h2>
                    <p className="product-description">
                        Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, al menos dos destilados, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
                    </p>
                    <ul className="product-features">
                        <li><strong>Vista</strong><span className="separator"></span>Claro, limpio y transparente</li>
                        <li><strong>Sabor</strong><span className="separator"></span>Entrada agradable, persistente y agradable final</li>
                        <li><strong>Cuerpo</strong><span className="separator"></span>Ligeras notas de fruta, destellos florales</li>
                        <li><strong>Aroma</strong><span className="separator"></span>Exótico aroma de frutas y flores silvestres</li>
                        <li><strong>Diferencia</strong><span className="separator"></span>Ideal para coctelería, aclamado por su versatilidad</li>
                    </ul>
                    {/* Botón de Comprar */}
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Producto 2: Malke Triple Destilado (Imagen a la izquierda) */}
            <div className="product-section reverse">
                <div className="product-image">
                    <img src={assets.LogoNegro} alt="Malke Triple Destilado" />
                </div>
                <div className="product-text">
                    <h2 className="product-title">Malke Triple Destilado</h2>
                    <p className="product-description">
                        Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
                    </p>
                    <ul className="product-features">
                        <li><strong>Vista</strong><span className="separator"></span>Claro, limpio y transparente</li>
                        <li><strong>Sabor</strong><span className="separator"></span>Entrada agradable, persistente y agradable final</li>
                        <li><strong>Cuerpo</strong><span className="separator"></span>Ligeras notas de fruta, destellos florales</li>
                        <li><strong>Aroma</strong><span className="separator"></span>Exótico aroma de frutas y flores silvestres</li>
                        <li><strong>Diferencia</strong><span className="separator"></span>Ideal para coctelería, aclamado por su versatilidad</li>
                    </ul>
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Producto 3: Malke Reposado (Imagen a la derecha) */}
            <div className="product-section">
                <div className="product-image">
                    <img src={assets.LogoNegro} alt="Malke Reposado" />
                </div>
                <div className="product-text">
                    <h2 className="product-title">Malke Reposado</h2>
                    <p className="product-description">
                        Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca en el cantón Rocafuerte, con un reposo de al menos de tres meses en barrica de roble americano, envasado en botella de vidrio a 40% alc/vol (80 proof).
                    </p>
                    <ul className="product-features">
                        <li><strong>Vista</strong><span className="separator"></span>Claro, limpio y transparente</li>
                        <li><strong>Sabor</strong><span className="separator"></span>Entrada agradable, persistente y agradable final</li>
                        <li><strong>Cuerpo</strong><span className="separator"></span>Ligeras notas de fruta, destellos florales</li>
                        <li><strong>Aroma</strong><span className="separator"></span>Exótico aroma de frutas y flores silvestres</li>
                        <li><strong>Diferencia</strong><span className="separator"></span>Ideal para coctelería, aclamado por su versatilidad</li>
                    </ul>
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Producto 4: Sal de Pitahaya (Imagen a la izquierda) */}
            <div className="product-section reverse">
                <div className="product-image">
                    <img src={assets.LogoNegro} alt="Sal de Pitahaya" />
                </div>
                <div className="product-text">
                    <h2 className="product-title">Sal de Pitahaya</h2>
                    <p className="product-description">
                        Utilizamos la cáscara interna de la pitahaya para elaborar nuestra famosa “sal” de pitahaya mediante un proceso de cocción, deshidratado y añadidura de sal marina.
                    </p>
                    <ul className="product-features">
                        <li><strong>Vista</strong><span className="separator"></span>Claro, limpio y transparente</li>
                        <li><strong>Sabor</strong><span className="separator"></span>Entrada agradable, persistente y agradable final</li>
                        <li><strong>Cuerpo</strong><span className="separator"></span>Ligeras notas de fruta, destellos florales</li>
                        <li><strong>Aroma</strong><span className="separator"></span>Exótico aroma de frutas y flores silvestres</li>
                        <li><strong>Diferencia</strong><span className="separator"></span>Ideal para coctelería, aclamado por su versatilidad</li>
                    </ul>
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
