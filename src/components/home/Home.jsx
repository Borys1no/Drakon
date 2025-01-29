import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Home = () => {
  const { t } = useTranslation(); // Destructure t function for translations

  return (
    <div className="home-container">
      {/* Banner */}
      <div className="banner"></div>

      {/* Introducción */}
      <section>
        <div className="introduction">
          <div className="intro-img">
            <img src={assets.FotoSeba} alt="Imagen de introduccion" />
          </div>
          <div className="intro-text">
            <h3>{t("introductionTitle")}</h3>
            <p>{t("introductionDescription")}</p>
            <div className="buho">
              <img src={assets.Buho} alt="Gif1" />
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section>
        <div className="productos-headerH" style={{ marginTop: "10px" }}>
          <h3>{t("ourProducts")}</h3>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.BOTELLAROSAcopy} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonDestilado")}</h2>
              <p className="product-descriptionH">$27,00</p>
            </div>
            <div className="button-container">
              <a href="/products" className="Qbtn">
                {t("buy")}
              </a>
              <a href="/NuestraHistoria" className="Qbtn2">
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonTripleDestilado")}</h2>
              <p className="product-descriptionH">$39,00</p>
            </div>
            <div className="button-container">
              <a href="products" className="Qbtn">
                {t("buy")}
              </a>
              <a href="/NuestraHistoria" className="Qbtn2">
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img
              className="proximamente"
              src={assets.BotellaRoja}
              alt="Malke Reposado"
            />
            <div className="text-overlay">{t("comingSoon")}</div>
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonReposado")}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de fabricación */}
      <section className="fabricacion">
        <img src={assets.PFabricacion} alt="Banner proceso de fabricacion" />
        <div className="fabricacion-content">
          <div className="text-content">
            <p>{t("fabricationProcess")}</p>
          </div>
        </div>
      </section>

      {/* Un año de éxitos internacionales */}
      <section>
        <div className="exitos">
          <img src={assets.SLIDES2copy} alt="Background exitos" />
          <h3>{t("internationalSuccessTitle")}</h3>
          <p>{t("internationalSuccessDescription")}</p>
        </div>
      </section>

      {/* Cocteles */}
      <section>
        <div className="cocteles" style={{ marginTop: "100px" }}>
          <h3>{t("cocktails")}</h3>
          <div className="cocteles-grid">
            <div className="coctel-card">
              <div className="coctel-front">
                <img src={assets.coctelRose} alt="Drakon Tonic" />
                <h4>{t("drakonTonic")}</h4>
              </div>
              <div className="coctel-back">
                <h4>{t("drakonTonic")}</h4>
                <h5>{t("ingredients")}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("drakonTonicIngredients"),
                  }}
                />
                <h5>{t("method")}</h5>
                <p>{t("directMethod")}</p>
                <h5>{t("glassware")}</h5>
                <p>{t("balloonGlass")}</p>
                <h5>{t("garnish")}</h5>
                <p>{t("pitahayaSlice")}</p>
              </div>
            </div>

            <div className="coctel-card">
              <div className="coctel-front">
                <img src={assets.coctelTonic} alt="Rasp sour" />
                <h4>{t("raspSour")}</h4>
              </div>
              <div className="coctel-back">
                <h4>{t("raspSour")}</h4>
                <h5>{t("ingredients")}</h5>
                <p
                  dangerouslySetInnerHTML={{ __html: t("raspSourIngredients") }}
                />
                <h5>{t("method")}</h5>
                <p>{t("shakeMethod")}</p>
                <h5>{t("glassware")}</h5>
                <p>{t("coupeGlass")}</p>
                <h5>{t("garnish")}</h5>
                <p>{t("cherryGarnish")}</p>
              </div>
            </div>

            <div className="coctel-card">
              <div className="coctel-front">
                <img src={assets.coctelRasp} alt="Lechuza" />
                <h4>{t("lechuza")}</h4>
              </div>
              <div className="coctel-back">
                <h4>{t("lechuza")}</h4>
                <h5>{t("ingredients")}</h5>
                <p
                  dangerouslySetInnerHTML={{ __html: t("lechuzaIngredients") }}
                />
                <h5>{t("method")}</h5>
                <p>{t("directMethod")}</p>
                <h5>{t("glassware")}</h5>
                <p>{t("shortGlass")}</p>
                <h5>{t("garnish")}</h5>
                <p>{t("lechuzaGarnish")}</p>
              </div>
            </div>
          </div>
          <a
            href="/Cocteles"
            className="btn-coctel"
            style={{ marginTop: "30px" }}
          >
            {t("seeMore")}
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
