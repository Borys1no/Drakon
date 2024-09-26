import React from 'react'
import './Home.css'
import Navbar from '../Navbar'
import Header from '../header/Header'
import { assets } from '../../assets/assets'

const Home = () => {
  return (

    <div className="home-container">
      {/* Banner */}
      <div className="banner">
        <h2>Drakon</h2>
        <p>Donde lo exótico se encuentra con lo excepcional</p>
      </div>

      {/* Introducción */}
      <section className="introduction">
        <div className="intro-img">
          <img src={assets.Introduction} alt="Imagen de introduccion" />
        </div>
        <div className="intro-text">
          <h3>¿Qué es Drakon?</h3>
          <p>
            Drakon es una marca pionera en la creación de productos únicos derivados de la
            pitahaya. Surgida como un proyecto innovador de La Felipa, una empresa agroindustrial
            que cultiva más de 30 hectáreas de pitahaya de alta calidad, con el propósito de
            representar lo mejor de Ecuador y su diversidad agrícola.
          </p>
          <button className="btn">Ver más</button>
        </div>
      </section>


      {/* Productos */}
      <section className="productos">
        <div className="productos-header">
          <h3>Productos</h3>
          <button className="btn">Tienda</button>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <div className="product-img">
              <img src={assets.Trago} alt="Malke Virgen" />
            </div>
            <div className="container-descrip">
              <h2 className='product-title'>Malke Virgen</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, al menos dos destilados, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).</p>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="producto-card">
            <div className="product-img">
              <img src={assets.Trago} alt="Malke Triple Destilado" />
            </div>
            <div className="container-descrip">
              <h2 className='product-title'>Malke Triple Destilado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).</p>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="producto-card">
            <div className="product-img">
              <img src={assets.Trago} alt="Malke Reposado" />
            </div>
            <div className="container-descrip">
              <h2 className='product-title'>Malke Reposado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca en el cantón Rocafuerte, con un reposo de al menos de tres meses en barrica de roble americano, envasado en botella de vidrio a 40% alc/vol (80 proof).</p>
            </div>
            <button className="btn">Comprar</button>
          </div>

        </div>
      </section>

      {/* Proceso de fabricación */}
      <section className="fabricacion">
        <h3>Proceso de Fabricación</h3>
        <div className="fabricacion-content">

          <div className="text-content">
            <p>
              El proceso de creación de Drakon se enfoca en seleccionar solo la mejor pitahaya de
              Manabí, preservando sus sabores únicos a través de un cuidadoso proceso de fermentación,
              destilación y filtrado. Este enfoque garantiza un destilado de la más alta calidad,
              orgullosamente hecho en Ecuador.
            </p>
            <button className="btn">Leer más</button>
          </div>
          <div className="img-fabricacion">
            <img src={assets.Introduction} alt="Fabricacion" />
          </div>
        </div>
      </section>


      {/* Cocteles */}
      <section className="cocteles">
        <h3>Cocteles</h3>
        <div className="cocteles-grid">
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.Coctel} alt="Drakon Rose Tonic" />
              <h4>Drakon Rose Tonic</h4>
            </div>
            <div className="coctel-back">
              <p>4 tiempos de Agua tónica de rosas, 2 oz de Drakon doble destilado, Hielo</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.Coctel} alt="Drakon Tonic" />
              <h4>Drakon Tonic</h4>
            </div>
            <div className="coctel-back">
              <p>4 tiempos de agua tónica britvic, 2 oz de Drakon doble destilado, Hielo</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.Coctel} alt="Drakon Rasp Sour" />
              <h4>Drakon Rasp Sour</h4>
            </div>
            <div className="coctel-back">
              <p>3/4 oz de syrup simple, 3/4 oz de zumo de limón, 1 clara de huevo, 2 oz de Drakon, 6 frambuesas machacadas</p>
              <button> Ver la receta completa</button>
            </div>
          </div>
        </div>
        <button className="btn">Ver más</button>
      </section>
    </div>
  )
}

export default Home
