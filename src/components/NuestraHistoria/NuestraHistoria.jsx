import React, { useState } from "react";
import "./NuestraHistoria.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans

const NuestraHistoria = () => {
  const [showLegend1, setShowLegend1] = useState(false);
  const [showLegend2, setShowLegend2] = useState(false);
  const { t } = useTranslation(); // Destructure t function for translations

  return (
    <div>
      <div className="historia-page-container">
        {/* Tributo Section */}
        <div className="container-tributo">
          <div className="ceibos-arbol-gifP">
            <img src={assets.GifArbol} alt="Gif1" />
          </div>
          <h1 className="historia-main-titleP">
            {t('tributoTitle')}
          </h1>
          <p className="historia-text">
            {t('tributoDescription')}
          </p>
        </div>

        <img
          className="historia-img"
          src={assets.bannerIdentidad}
          alt="Banner proceso de fabricacion"
        />

        {/* Objetivo Section */}
        <div className="container-objetivo">
          <div className="ceibos-arbol-gif">
            <img src={assets.GifPitahaya} alt="Gif2" />
          </div>
          <h1 className="historia-main-title">{t('objetivoTitle')}</h1>
          <p className="historia-text">
            {t('objetivoDescription')}
          </p>
        </div>

        <img
          className="historia-img"
          src={assets.bannerClaro}
          alt="Banner proceso de fabricacion"
        />

        {/* Contribución a la Comunidad Section */}
        <div className="container-contribucion">
          <div className="ceibos-arbol-gif">
            <img src={assets.GifBuho} alt="Gif3" />
          </div>
          <h1 className="historia-main-title">{t('contribucionComunidadTitle')}</h1>
          <h2 className="historia-subtitle">{t('apoyoEducacionTitle')}</h2>
          <p className="historia-text">
            {t('apoyoEducacionDescription')}
          </p>
          <h2 className="historia-subtitle">{t('cuidadoMedioambienteTitle')}</h2>
          <p className="historia-text">
            {t('cuidadoMedioambienteDescription')}
          </p>
        </div>

        <img
          className="historia-img"
          src={assets.bannerComunidad}
          alt="Banner proceso de fabricacion"
        />

        {/* Contribución a Nuestra Gente Section */}
        <div className="container-contribucion-gente">
          <div className="ceibos-arbol-gif">
            <img src={assets.GifAbstracto} style={{ transform: "rotate(90deg)" }} alt="Gif4" />
          </div>
          <h1 className="historia-main-title">{t('contribucionGenteTitle')}</h1>
          <h2 className="historia-subtitle">{t('pagoJustoTitle')}</h2>
          <p className="historia-text">
            {t('pagoJustoDescription')}
          </p>
          <h2 className="historia-subtitle">{t('inclusionEquidadTitle')}</h2>
          <p className="historia-text">
            {t('inclusionEquidadDescription')}
          </p>
        </div>

        <img
          className="historia-img"
          src={assets.bannerGente}
          alt="Banner proceso de fabricacion"
        />

        {/* Pilares Section */}
        <div className="pilares-section">
          <div className="pilares-left">
            <p className="pilares-vertical-text">{t('pilaresTitle')}</p>
          </div>
          <div className="pilares-center">
            <img src={assets.NuestraHistoriaImg} alt="Gif Pitahaya" />
          </div>
          <div className="pilares-right">
            <p className="pilares-text">
              <strong>{t('innovacionTitle')}</strong>
              <br />
              {t('innovacionDescription')}
              <br />
              <br />
              <strong>{t('calidadTitle')}</strong>
              <br />
              {t('calidadDescription')}
              <br />
              <br />
              <strong>{t('sostenibilidadTitle')}</strong>
              <br />
              {t('sostenibilidadDescription')}
              <br />
              <br />
              <strong>{t('responsabilidadSocialTitle')}</strong>
              <br />
              {t('responsabilidadSocialDescription')}
              <br />
              <br />
              <strong>{t('excelenciaGlobalTitle')}</strong>
              <br />
              {t('excelenciaGlobalDescription')}
            </p>
          </div>
        </div>

        {/* Leyendas Cortas Section */}
        <section className="leyendas-section">
          <h2 className="leyendas-title">{t('leyendasTitle')}</h2>

          {/* Legend 1 */}
          <div className="leyenda">
            <h3 className="leyenda-title">
              <button
                onClick={() => setShowLegend1(!showLegend1)}
                className="leer-btn"
              >
                {showLegend1 ? t('hide') : t('leyenda1Title')}
              </button>
            </h3>

            {showLegend1 && (
              <div className="leyenda-content">
                <p>
                  <Trans i18nKey="leyenda1Content">
                    Cuenta la leyenda que en el corazón de Manabí vivía una
                    lechuza que, a diferencia de las demás, no podía volar. Esto
                    fue razón suficiente para que su grupo la rechazara y la
                    condenara a vagar sola por el bosque, destinada a perecer en
                    el abandono. Desesperada y sin rumbo, la lechuza decidió
                    buscar el consejo de la lechuza sabia del bosque, conocida por
                    poseer respuestas a los misterios más profundos de la
                    naturaleza. La lechuza sabia, al verla tan abatida, le reveló
                    un secreto que podría salvar su vida:"Debes encontrar el
                    elixir creado por los duendes, que yace en una fuente bajo un
                    ceibo sagrado, en el valle donde guardan una fruta milagrosa."
                    A pesar de su debilidad, la lechuza emprendió un largo y arduo
                    viaje. 
                    <br />
                    <br />
                    Durante siete días, atravesó bosques densos y colinas
                    escarpadas, hasta que, exhausta y casi sin fuerzas, finalmente
                    encontró el majestuoso ceibo que los duendes habitaban. Con su
                    último aliento, se lanzó hacia la fuente que yacía a sus pies,
                    dispuesta a beber el elixir de la vida. 
                    <br />
                    <br />
                    En el momento en que
                    su pico tocó el agua mágica, un cambio extraordinario ocurrió.
                    La lechuza, que antes no podía volar, se elevó en el cielo con
                    un vuelo majestuoso, transformándose en un poderoso dragón. Ya
                    no era la frágil criatura que una vez había sido, sino el
                    guardián del valle y protector de todos los seres vivientes
                    que habitaban en la región. Desde ese día, el dragón vela por
                    la naturaleza, cuidando el equilibrio y la armonía en el
                    corazón de Manabí. Y así, la lechuza que no podía volar
                    encontró su verdadero propósito, recordándonos que nuestras
                    mayores debilidades pueden convertirse en nuestras mayores
                    fortalezas, si buscamos con el corazón abierto.
                  </Trans>
                </p>
                <div className="leyenda-image">
                  <img src={assets.Buho3} alt="Leyenda 1" />
                </div>
              </div>
            )}
          </div>

          {/* Legend 2 */}
          <div className="leyenda">
            <h3 className="leyenda-title">
              <button
                onClick={() => setShowLegend2(!showLegend2)}
                className="leer-btn"
              >
                {showLegend2 ? t('hide') : t('leyenda2Title')}
              </button>
            </h3>

            {showLegend2 && (
              <div className="leyenda-content">
                <p>
                  <Trans i18nKey="leyenda2Content">
                    La oscuridad del campo se iluminó con el reflejo de una flor
                    que brillaba en la oscuridad, los aldeanos llenos de
                    curiosidad fueron a contemplar su belleza, la cual bautizaron
                    como la reina de la noche. Cada noche iban más personas por el
                    rumor que era una flor mágica, que iluminaba la tierra y
                    escuchaba tus deseos. Pero una noche desapareció, dejó de
                    brillar y familias enteras comenzaron su búsqueda hasta que
                    por fin la encontraron en forma de una fruta que en forma de
                    corazón estaba unido a otro. Desde esa noche cuenta la leyenda
                    que con quien compartas una pitahaya compartes tu corazón.
                  </Trans>
                </p>
                <div className="leyenda-image">
                  <img src={assets.Flor2} alt="Leyenda 2" />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NuestraHistoria;