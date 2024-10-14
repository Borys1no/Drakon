import React, { useState } from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const NuestraHistoria = () => {
  const [showLegend1, setShowLegend1] = useState(false);
  const [showLegend2, setShowLegend2] = useState(false);


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

            {/* Leyendas Cortas Section */}
            <section className="leyendas-section">
        <h2 className="leyendas-title">Leyendas Cortas</h2>

        {/* Legend 1 */}
        <div className="leyenda">
          <h3 className="leyenda-title">La lechuza que no podía volar <button onClick={() => setShowLegend1(!showLegend1)} className="leer-btn">
            {showLegend1 ? 'Ocultar' : 'Leer'}
          </button></h3>
          
          {showLegend1 && (
            <div className="leyenda-content">
              <p>
              Cuenta la leyenda que en el corazón de Manabí vivía una lechuza que, a diferencia de las demás, no podía volar. Esto fue razón suficiente para que su grupo la rechazara y la condenara a vagar sola por el bosque, destinada a perecer en el abandono.
              Desesperada y sin rumbo, la lechuza decidió buscar el consejo de la lechuza sabia del bosque, conocida por poseer respuestas a los misterios más profundos de la naturaleza. La lechuza sabia, al verla tan abatida, le reveló un secreto que podría salvar su vida:"Debes encontrar el elixir creado por los duendes, que yace en una fuente bajo un ceibo sagrado, en el valle donde guardan una fruta milagrosa."
              A pesar de su debilidad, la lechuza emprendió un largo y arduo viaje. Durante siete días, atravesó bosques densos y colinas escarpadas, hasta que, exhausta y casi sin fuerzas, finalmente encontró el majestuoso ceibo que los duendes habitaban. Con su último aliento, se lanzó hacia la fuente que yacía a sus pies, dispuesta a beber el elixir de la vida.
              En el momento en que su pico tocó el agua mágica, un cambio extraordinario ocurrió. La lechuza, que antes no podía volar, se elevó en el cielo con un vuelo majestuoso, transformándose en un poderoso dragón. Ya no era la frágil criatura que una vez había sido, sino el guardián del valle y protector de todos los seres vivientes que habitaban en la región. Desde ese día, el dragón vela por la naturaleza, cuidando el equilibrio y la armonía en el corazón de Manabí.
              Y así, la lechuza que no podía volar encontró su verdadero propósito, recordándonos que nuestras mayores debilidades pueden convertirse en nuestras mayores fortalezas, si buscamos con el corazón abierto.
              </p>
              <div className="leyenda-image">
                <img src={assets.Lechuza} alt="Leyenda 1" />
              </div>
            </div>
          )}
        </div>

        {/* Legend 2 */}
        <div className="leyenda">
          <h3 className="leyenda-title">El pago a los duendes  <button onClick={() => setShowLegend2(!showLegend2)} className="leer-btn">
            {showLegend2 ? 'Ocultar' : 'Leer'}
          </button></h3>
         
          {showLegend2 && (
            <div className="leyenda-content">
              <p>
              En el corazón de Manabí, cuenta la leyenda que los duendes, cansados de ser vistos como seres malignos, decidieron crear algo que cambiaría su imagen para siempre: un elixir para regalar al mundo. Para lograrlo, escogieron una fruta especial, aquella que había nacido de la flor llamada la Reina de la Noche. Día y noche trabajaron sin descanso, hasta que finalmente dieron con un brebaje capaz de unir la realidad con la magia.
              Con gran entusiasmo, decidieron ofrecer su creación a las lechuzas, criaturas sabias y respetadas. Sin embargo, las lechuzas rechazaron el elixir, pues consideraron que le faltaba algo esencial. Sin rendirse, los duendes lo ofrecieron a las plantas, pero estas, al obtener su fuerza vital de los ríos, tampoco lo aceptaron.
              Frustrados y molestos, los duendes decidieron esconder su elixir para siempre, decepcionados de que nadie pareciera apreciar su arduo trabajo. Sin embargo, Drakorito, el duende más joven y curioso, creía firmemente que el brebaje tenía un propósito mayor. Decidió, a pesar del riesgo, compartirlo con los humanos, aunque ellos fueran quienes habían extendido la mala reputación de su raza.
              Un día, mientras vagaba por los valles de Manabí, Drakorito encontró una hacienda en las afueras de Rocafuerte. Allí, observó que los dueños cultivaban con esmero la fruta nacida de la Reina de la Noche, y sentían un profundo respeto por la tierra. Con cautela, se acercó y les ofreció el elixir. Para su sorpresa, en lugar de temerle, los humanos lo recibieron con alegría y lo invitaron a celebrar. Pero juntos coincidieron en que al elixir aún le faltaba el toque humano.
              Durante tres meses, guardaron el brebaje en barricas de roble, trabajadas con las manos dedicadas de los hombres. Al sacarlo, descubrieron que el tiempo y el esfuerzo humano habían completado la magia de los duendes, creando un elixir perfecto. Decidieron llamarlo "Drakon Reposado", en honor a Drakorito, el duende que les había confiado el secreto.
              Drakorito quedó tan encantado con el resultado que, a cambio de una pequeña compensación para él y sus amigos, aceptó convertirse en el guardián de los barriles. Desde entonces, cada vez que se llena un barril de Drakon, al sacarlo siempre falta un pequeño porcentaje: el pago a los duendes que vigilan el precioso elixir.
              
              </p>
              <div className="leyenda-image">
                <img src={assets.Duende} alt="Leyenda 2" />
              </div>
            </div>
          )}
        </div>
      </section>

      


      <Footer />
    </div>
  );
};

export default NuestraHistoria;
