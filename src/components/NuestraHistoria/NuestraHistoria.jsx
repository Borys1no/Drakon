import React, { useState } from 'react';
import './NuestraHistoria.css';
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets';

const NuestraHistoria = () => {
  const [showLegend1, setShowLegend1] = useState(false);
  const [showLegend2, setShowLegend2] = useState(false);

  return (
    <div className="historia-page-container">
      <div className="ceibos-arbol-gifP">
        <img src={assets.GifArbol} alt="Gif1" />
      </div>
      <h1 className="historia-main-titleP"> Un Tributo a la Identidad Ecuatoriana</h1>
      <p className="historia-text">
        Drakon nació en 2023 como una visión innovadora que buscaba trascender las fronteras tradicionales de la industria de los destilados. Desde el corazón de Manabí, Ecuador, nos propusimos crear un producto que no solo destacara por su calidad excepcional, sino que también fuera un fiel representante de la riqueza cultural, natural e histórica de nuestro país.
      </p>

      <img className="historia-img" src={assets.bannerIdentidadRec} alt="Banner proceso de fabricacion" />

      <div className="ceibos-arbol-gif">
        <img src={assets.GifPitahaya} alt="Gif2" />
      </div>
      <h1 className="historia-main-title">Un objetivo claro</h1>
      <p className="historia-text">
        El proyecto surgió con un objetivo claro: transformar la pitahaya roja de pulpa blanca, una fruta emblemática de nuestra tierra, en el primer destilado premium del mundo elaborado al 100% a partir de su pulpa. Este esfuerzo no solo representa un hito en la innovación de productos ecuatorianos, sino también un homenaje a la capacidad de nuestra gente para convertir lo extraordinario en excelencia. Cada botella refleja un proceso meticuloso, desde la selección de las mejores pitahayas cultivadas en nuestras tierras hasta un proceso de destilación refinado, que combina técnicas modernas con un profundo respeto por la destilería tradicional.
      </p>
      <img className="historia-img" src={assets.bannerClaroRec} alt="Banner proceso de fabricacion" />

      <div className="ceibos-arbol-gif">
        <img src={assets.GifBuho} alt="Gif3" />
      </div>
      <h1 className="historia-main-title">Contribución a la comunidad</h1>
      <h2 className="historia-subtitle">Apoyo a la Educación</h2>
      <p className="historia-text">
        Respaldamos iniciativas que fomenten el desarrollo académico, deportivo y artístico de los jóvenes en Rocafuerte y sus alrededores, contribuyendo activamente al crecimiento de nuestra comunidad.
      </p>
      <h2 className="historia-subtitle">Cuidado al Medioambiente</h2>
      <p className="historia-text">
        Estamos comprometidos con la protección de nuestro entorno natural, preservando los ceibos, una especie protegida por el gobierno ecuatoriano.
      </p>
      <img className="historia-img" src={assets.bannerComunidadRec} alt="Banner proceso de fabricacion" />

      <div className="ceibos-arbol-gif">
        <img src={assets.GifAbstracto} alt="Gif4" />
      </div>
      <h1 className="historia-main-title">Contribución a nuestra gente</h1>
      <h2 className="historia-subtitle">Pago Justo</h2>
      <p className="historia-text">
        Garantizamos una compensación equitativa para todos nuestros colaboradores por su esfuerzo, reconociendo y valorando su contribución al éxito de nuestra empresa.
      </p>
      <h2 className="historia-subtitle">Inclusión y Equidad</h2>
      <p className="historia-text">
        Priorizamos la participación de la mano de obra femenina en nuestro proceso productivo, rompiendo paradigmas y promoviendo la equidad de género como base de nuestro modelo empresarial.
      </p>
      <img className="historia-img" src={assets.bannerGenteRec} alt="Banner proceso de fabricacion" />


      <div className="pilares-section">
        <div className="pilares-left">
          <p className="pilares-vertical-text">Pilares de Drakon</p>
        </div>
        <div className="pilares-center">
          <img src={assets.NuestraHistoriaImg} alt="Gif Pitahaya" />
        </div>
        <div className="pilares-right">

          <p className="pilares-text">
            <strong>Innovación</strong><br />
            Transformamos ideas audaces en productos únicos, liderando con creatividad y tecnología
            para redefinir estándares en la industria de los destilados.<br /><br /><br />
            <strong>Calidad</strong><br />
            Garantizamos la perfección en cada detalle, reflejando estándares excepcionales que
            posicionan a Drakon como un símbolo de excelencia.<br /><br /><br />
            <strong>Sostenibilidad</strong><br />
            Integramos prácticas responsables para preservar el entorno, utilizando recursos de manera
            sostenible y protegiendo nuestro legado natural.<br /><br /><br />
            <strong>Responsabilidad Social</strong><br />
            Impulsamos el desarrollo comunitario a través de iniciativas que promueven educación,
            inclusión y bienestar social.<br /><br /><br />
            <strong>Excelencia Global</strong><br />
            Representamos a Ecuador con orgullo, destacando en los mercados internacionales como un
            referente de calidad y autenticidad.
          </p>
        </div>
      </div>


      {/* Leyendas Cortas Section */}
      <section className="leyendas-section">
        <h2 className="leyendas-title">LEYENDAS CORTAS</h2>

        {/* Legend 1 */}
        <div className="leyenda">
          <h3 className="leyenda-title"> <button onClick={() => setShowLegend1(!showLegend1)} className="leer-btn">
            {showLegend1 ? 'Ocultar' : 'LA LECHUZA QUE NO PODIA VOLAR'}
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
          <h3 className="leyenda-title"> <button onClick={() => setShowLegend2(!showLegend2)} className="leer-btn">
            {showLegend2 ? 'Ocultar' : 'EL NACIMIENTO DE LA FLOR'}
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