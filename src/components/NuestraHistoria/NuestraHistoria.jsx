import React from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      <section className="historia-title-section">
        <h1 className="historia-main-title">Nuestra Historia</h1>
      </section>

      {/* Propósito Section */}
      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2 className="historia-subtitle">Propósito</h2>
          <p className="historia-text">
            La Felipa Fruit & Wine es la empresa pionera en la creación de Malke a nivel mundial. Surgida en 2019 como un anexo de Agroindustrial La Felipa, ha liderado la producción de pitahaya de alta calidad en la región.
            <br/><br/>
            La hacienda La Felipa, nombrada en honor a la abuela del dueño, Luis Eduardo Vélez, se extiende por 30 hectáreas y cuenta con 26,266 plantas de pitahaya. Esta producción de calidad asegura un producto que resalta la esencia de la pitahaya manabita.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.NuestraHistoriaEJEM} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      {/* Left and Right Image Section */}
      <section className="image-section">
        {/* Left Image with Blur and Centered Text */}
        <div className="image-left blurred-image">
          <img src={assets.NuestraHistoriaEJEM} alt="Left Side" className="left-image" />
          <div className="overlay-text">
            <h2>Misión</h2>
            <p>
              En La Felipa Fruit & Wine, nos dedicamos a la producción de destilados premium, únicos y exclusivos, utilizando ingredientes ecuatorianos de la más alta calidad, como la pitahaya roja. A través de la innovación constante y el compromiso con la excelencia, buscamos llevar el sabor de Ecuador a todos los rincones del mundo.
            </p>
          </div>
        </div>

        {/* Right Image with Blur and Centered Text */}
        <div className="image-right blurred-image">
          <img src={assets.NuestraHistoriaEJEM} alt="Right Side" className="right-image" />
          <div className="overlay-text">
            <h2>Visión</h2>
            <p>
              Ser reconocidos como líderes globales en la creación de destilados innovadores y de alta calidad, posicionando a Ecuador en el mapa mundial de las bebidas espirituosas, mientras promovemos prácticas sostenibles y un impacto positivo en la comunidad.
            </p>
          </div>
        </div>
      </section>

      <section className="cocteles">
        <h3>NUESTROS VALORES</h3>
        <div className="cocteles-grid">
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.CoctelD} alt="Drakon Rose Tonic" />
              <h4>Innovación</h4>
            </div>
            <div className="coctel-back">
              <p>Nos comprometemos a desafiar los límites de la industria de destilados, creando productos únicos como Drakon que redefinen los estándares globales.</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.CoctelD} alt="Drakon Tonic" />
              <h4>Calidad</h4>
            </div>
            <div className="coctel-back">
              <p>Cada botella refleja nuestro compromiso inquebrantable con los más altos estándares internacionales de producción y presentación.</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.CoctelD} alt="Drakon Rasp Sour" />
              <h4>Sostenibilidad</h4>
            </div>
            <div className="coctel-back">
              <p>Cuidamos del medio ambiente a través de prácticas agrícolas responsables y economía circular, aprovechando al máximo los recursos naturales.</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.CoctelD} alt="Drakon Rose Tonic" />
              <h4>Responsabilidad Social</h4>
            </div>
            <div className="coctel-back">
              <p>Contribuimos al bienestar de nuestra comunidad local y preservamos el ecosistema, protegiendo especies como los ceibos en nuestra hacienda.</p>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.CoctelD} alt="Drakon Rose Tonic" />
              <h4>Excelencia Global</h4>
            </div>
            <div className="coctel-back">
              <p>Con ambición internacional, buscamos no solo ser los mejores en Ecuador, sino competir y sobresalir en los mercados más exigentes del mundo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creación de Drakon Section (Newspaper Style) */}
      <section className="creacion-drakon-section">
        <h2 className="creacion-drakon-title">Creación de Drakon</h2>

        {/* First Article: Innovación en Tiempos de Crisis */}
        <article className="newspaper-article">
          <h3 className="article-title">Innovación en Tiempos de Crisis</h3>
          <img src={assets.NuestraHistoriaEJEM} alt="Innovación en Tiempos de Crisis" className="article-image" />
          <p className="article-content">
          La concepción de Drakon se remonta al año 2021, cuando Juan Sebastián Vélez Reyes, actual CEO y fundador de Drakon, estaba cursando sus pasantías como gerente de ventas en Agroindustrial La Felipa. Durante este período, una crisis conocida como la crisis de los contenedores impactó profundamente al mercado de la pitahaya. La sobreproducción de esta fruta exótica, combinada con dificultades para acceder al principal mercado exportador, Estados Unidos, resultó en pérdidas masivas para los productores de pitahaya.
          Consciente de las vulnerabilidades del sector productor y del carácter perecedero de la fruta, Vélez comenzó a idear una solución innovadora: crear un producto de calidad premium, único y duradero, que añadiera valor a la pitahaya, transformando su destino en los mercados internacionales. Fue en este momento crucial cuando nació el concepto de Drakon, marcando el inicio de un proyecto que cambiaría el panorama de la industria de bebidas espirituosas en Ecuador.

          </p>
        </article>

        {/* Second Article: Un Producto Diferenciado */}
        <article className="newspaper-article">
          <h3 className="article-title">El Nacimiento del Primer Destilado de Pitahaya</h3>
          <img src={assets.NuestraHistoriaEJEM} alt="Primer Destilado de Pitahaya" className="article-image" />
          <p className="article-content">
          El año 2023 fue decisivo para Drakon. El proyecto, que inicialmente comenzó con la producción de vino de pitahaya, dio un salto hacia algo más ambicioso. Después de completar sus estudios en destilería en Louisville, Kentucky, Juan Sebastián regresó a Ecuador con ideas revolucionarias. Fue entonces cuando creó el primer destilado premium de pitahaya en el mundo, un producto que no solo destacaba por su innovación, sino también por la alta calidad de su elaboración.
          El concepto detrás de Drakon fue claro desde el principio: un destilado único, imposible de replicar, que capturara la esencia de la pitahaya ecuatoriana, garantizando un producto exclusivo que destacara en los mercados más exigentes del mundo.
  
          </p>
        </article>

        {/* Third Article: 2024 Éxitos Internacionales */}
        <article className="newspaper-article">
          <h3 className="article-title">Un Año de Éxitos Internacionales</h3>
          <img src={assets.NuestraHistoriaEJEM} alt="Éxitos Internacionales" className="article-image" />
          <p className="article-content">
          Para lanzar Drakon de manera estratégica, Juan Sebastián decidió presentarlo primero en el escenario internacional. En 2024, Drakon hizo su debut en la convención internacional Access Live, donde se presentó la primera botella de Drakon triple destilado, la versión más refinada y exclusiva hasta el momento. Durante este evento, Vélez recibió la oportunidad de participar en el prestigioso TAG Global Spirit Awards de Las Vegas, una competencia internacional de gran renombre.
          En esta competencia, Drakon triple destilado fue galardonado con la Medalla de Oro, consolidando su posición como un destilado de clase mundial y demostrando la calidad y compromiso que han sido parte fundamental del ADN de la marca desde sus inicios.
          Tras este éxito rotundo en Estados Unidos, Drakon finalmente fue lanzado en el mercado local, donde ha continuado su expansión y aceptación, reforzando su estatus como un producto de lujo ecuatoriano capaz de competir con las mejores bebidas espirituosas a nivel mundial.
  
          </p>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default NuestraHistoria;
