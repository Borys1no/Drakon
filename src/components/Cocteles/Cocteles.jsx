import React, { useState, useEffect } from "react";
import "./Cocteles.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";

const Cocteles = () => {
  
 

  return (
    <div className="coctel-container">
      <div className="banner-coctel">
      </div>

      <section className="cocteles" style={{ marginTop: "1px" }}>
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
                <div className="coctel-card">
                  <div className="coctel-front">
                    <img src={assets.CoctelDragonfly} alt="Dragonfly" />
                    <h4>Dragonfly</h4>
                  </div>
                  <div className="coctel-back">
                    <h4>Dragonfly</h4>
                    <h5>INGREDIENTES</h5>
                    <p>
                    2 oz de Drakon destilado <br /> 3/4 oz de zumo de limón <br /> 2 peñascos de
                    hierbabuena <br />1 oz de vino espumante <br /> 6 gotas de edulcorante no calórico
                    </p>
                    <h5>METODO DE ELABORACION</h5>
                    <p>Shake</p>
                    <h5>CRISTALERIA</h5>
                    <p>Copa coupé</p>
                    <h5>GARNISH</h5>
                    <p>1 rodaja de limón deshidratado</p>
                  </div>
                </div>
                <div className="coctel-card">
                  <div className="coctel-front">
                    <img src={assets.CoctelStraw} alt="Straw sour" />
                    <h4>Straw sour</h4>
                  </div>
                  <div className="coctel-back">
                    <h4>Straw sour</h4>
                    <h5>INGREDIENTES</h5>
                    <p>
                    2 oz de Drakon destilado <br /> 1 oz de sirope simple <br /> 3/4 oz de zumo de limón <br /> 1
                    clara de huevo <br /> 4 frutillas
                    </p>
                    <h5>METODO DE ELABORACION</h5>
                    <p>Shake</p>
                    <h5>CRISTALERIA</h5>
                    <p>Copa martini</p>
                    <h5>GARNISH</h5>
                    <p>Flores comestibles saladas</p>
                  </div>
                </div>
                <div className="coctel-card">
                  <div className="coctel-front">
                    <img src={assets.CoctelDrakorita} alt="Drakorita" />
                    <h4>Drakorita</h4>
                  </div>
                  <div className="coctel-back">
                    <h4>Drakorita</h4>
                    <h5>INGREDIENTES</h5>
                    <p>
                    2 oz de Drakon destilado <br /> 1 oz de infusión de té de blue moon <br /> 3/4 oz de zumo
                    de limón
                    </p>
                    <h5>METODO DE ELABORACION</h5>
                    <p>Shake</p>
                    <h5>CRISTALERIA</h5>
                    <p>Vaso corto</p>
                    <h5>GARNISH</h5>
                    <p>Vaso escarchado con sal de pitahaya</p>
                  </div>
                </div>
                <div className="coctel-card">
                  <div className="coctel-front">
                    <img src={assets.CoctelOld} alt="Old Drakon" />
                    <h4>Old Drakon</h4>
                  </div>
                  <div className="coctel-back">
                    <h4>Old Drakon</h4>
                    <h5>INGREDIENTES</h5>
                    <p>
                    1.5 oz de Drakon destilado <br /> 1/2 oz de gin <br /> 1/2 oz de sirope simple <br /> 4 golpes de
                    Plum Bitters <br /> 2 bitters de angostura
                    </p>
                    <h5>METODO DE ELABORACION</h5>
                    <p>Directo</p>
                    <h5>CRISTALERIA</h5>
                    <p>Vaso corto</p>
                    <h5>GARNISH</h5>
                    <p>Cáscara de naranja ahumada</p>
                  </div>
                </div>
                <div className="coctel-card">
                  <div className="coctel-front">
                    <img src={assets.CoctelDrakontini} alt="Drakontini" />
                    <h4>Drakontini</h4>
                  </div>
                  <div className="coctel-back">
                    <h4>Drakontini</h4>
                    <h5>INGREDIENTES</h5>
                    <p>
                    2 oz de Drakon destilado <br /> 1 oz de Vermouth blanco seco <br /> 3 gotas de limón
                    </p>
                    <h5>METODO DE ELABORACION</h5>
                    <p>Shake</p>
                    <h5>CRISTALERIA</h5>
                    <p>Copa coupé</p>
                    <h5>GARNISH</h5>
                    <p>Flores comestibles saladas</p>
                  </div>
                </div>
              </div>
            </section>

      <Footer />
    </div>
  );
};

export default Cocteles;
