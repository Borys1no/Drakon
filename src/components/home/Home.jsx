import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";
import Animation from "../Animation/Animation";

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner */}
      <div className="banner"></div>
      {/* Introducción */}
      <section className="introduction">
        <div className="intro-img">
          <img src={assets.FotoSeba} alt="Imagen de introduccion" />
        </div>
        <div className="intro-text">
          <h3>UN DESTILADO A LA PERFECCIÓN</h3>
          <p>
            Drakon, como marca líder de destilados premium, reafirma su
            compromiso con la innovación, calidad, sostenibilidad,
            responsabilidad social y excelencia global. Cada etapa de nuestro
            proceso de elaboración está cuidadosamente diseñada para garantizar
            productos de la más alta calidad, representando con orgullo la
            identidad ecuatoriana en los mercados internacionales.
          </p>

          <div className="buho">
            <img src={assets.Buho} alt="Gif1" />
          </div>
        </div>
      </section>
      {/* Productos */}
      <section>
        <div className="productos-headerH" style={{ marginTop: "10px" }}>
          <h3>NUESTROS PRODUCTOS</h3>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.Proximamente} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className="product-title">Drakon Destilado</h2>
              <p className="product-descriptionH">$27,00</p>
            </div>
            <div className="button-container">
              <a href="/MalkeVirgen" className="Qbtn">
                COMPRAR
              </a>
              <a href="/Products" className="Qbtn2">
                CONOCE MÁS
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">Drakon Triple Destilado</h2>
              <p className="product-descriptionH">$39,00</p>
            </div>
            <div className="button-container">
              <a href="#" className="Qbtn">
                COMPRAR
              </a>
              <a href="#" className="Qbtn2">
                CONOCE MÁS
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img src={assets.Proximamente} alt="Malke Reposado" />
            <div className="container-descrip">
              <h2 className="product-title">Drakon Reposado</h2>
              {/**<p className="product-descriptionH">$50,00</p>*/}
            </div>
            <div className="button-container">
             {/** <a href="#" className="Qbtn">
                COMPRAR
              </a>
              <a href="#" className="Qbtn2">
                CONOCE MÁS
              </a>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de fabricación */}
      <section className="fabricacion" >
        <img src={assets.PFabricacion} alt="Banner proceso de fabricacion" />
        <div className="fabricacion-content">
          <div className="text-content">
            <p>
              El proceso de Drakon une tradición e innovación, comenzando con la
              selección de la mejor pitahaya ecuatoriana cultivada en el cantón
              Rocafuerte, Manabí. La fermentación, destilación y filtración son
              ejecutadas con precisión para garantizar pureza y equilibrio. Cada
              botella es un destilado excepcional que refleja excelencia y
              orgullo nacional.
            </p>
          </div>
        </div>
      </section>
      {/** Un año de éxitos internacionales
       */}
      <section>
        <div className="exitos">
          <img src={assets.SLIDES2copy} alt="Background exitos" />

          <h3>Un año de éxitos internacionales</h3>

          <p>
            Drakon se lanzó al mercado estratégicamente en 2024, debutando
            internacionalmente en la convención Access Live con su versión más
            exclusiva, Drakon triple destilado. Durante el evento, también
            participó en el prestigioso TAG Global Spirits Awards en Las Vegas.
            Drakon triple destilado fue galardonado con Medalla de Oro,
            destacando como un destilado de clase mundial. Tras este logro en
            EE.UU., se lanzó en el mercado local, consolidándose como un
            producto de lujo ecuatoriano con presencia internacional.
            Posteriormente, Drakon destacó en Australia, China, Inglaterra,
            Singapur y Sudáfrica.
          </p>
        </div>
      </section>
      {/* Cocteles */}
      <section className="cocteles" style={{ marginTop: "100px" }}>
        <h3>Cocteles</h3>
        <div className="cocteles-grid">
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelRose} alt="Drakon Tonic" />
              <h4>Drakon Tonic</h4>
            </div>
            <div className="coctel-back">
              <h4>Drakon Tonic</h4>
              <h5>INGREDIENTES</h5>
              <p>
                2 oz de Drakon destilado <br />
                3/4 oz de zumo de limon <br />4 oz de agua tonica
              </p>
              <h5>METODO DE ELABORACION</h5>
              <p>Directo</p>
              <h5>CRISTALERIA</h5>
              <p>Copa balon/vaso largo</p>
              <h5>GARNISH</h5>
              <p>1 rodaja de pitahaya</p>
            </div>
          </div>

          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelTonic} alt="Rasp sour" />
              <h4>Rasp Sour</h4>
            </div>
            <div className="coctel-back">
              <h4>Rasp Sour</h4>
              <h5>INGREDIENTES</h5>
              <p>
                2 oz de Drakon destilado <br />
                3/4 oz de sirope simple <br />
                3/4 oz de zumo de limon <br />1 clara de huevo
              </p>
              <h5>METODO DE ELABORACION</h5>
              <p>Shake</p>
              <h5>CRISTALERIA</h5>
              <p>Copa coupe</p>
              <h5>GARNISH</h5>
              <p>1 cereza para decorar</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelRasp} alt="Lechuza" />
              <h4>Lechuza</h4>
            </div>
            <div className="coctel-back">
              <h4>Lechuza</h4>
              <h5>INGREDIENTES</h5>
              <p>
                2 oz de Drakon destilado <br />
                1/2 oz de sirope simple <br />
                3/4 oz de zumo de limon <br />4 oz de agua mineral de toronja
              </p>
              <h5>METODO DE ELABORACION</h5>
              <p>Directo</p>
              <h5>CRISTALERIA</h5>
              <p>Vaso corto</p>
              <h5>GARNISH</h5>
              <p>
                Vaso escarchado con sal de pitahaya <br />
                Twist de naranja
              </p>
            </div>
          </div>
        </div>
        <a href="/Cocteles" className="btn-coctel" style={{ marginTop: "30px" }}>
          VER MÁS
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
