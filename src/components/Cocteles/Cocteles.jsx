import React, { useState, useEffect } from "react";
import "./Cocteles.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";

const Cocteles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [assets.Bann1, assets.Bann2, assets.Bann3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cocktails = [
    {
      title: "Drakon Rose Tonic",
      description: "4 tiempos de Agua tonica de rosas...",
      image: assets.CoctelD,
    },
    {
      title: "Drakon tonic",
      description: "4 tiempos de agua tonica brivic...",
      image: assets.CoctelD,
    },
    {
      title: "Drakon Rasp Sour",
      description: "3/4 de oz de syrup simple 3/4 de oz de zumo de limón..",
      image: assets.CoctelD,
    },
    {
      title: "Drakon Straw Sour",
      description: "3/4 de oz de syrup simple 3/4 de oz de zumo de limón...",
      image: assets.CoctelD,
    },
    {
      title: "Lechuza",
      description: "3/4 de syrup simple\n3/4 de zumo de limón...",
      image: assets.CoctelD,
    },
    {
      title: "Drakorita",
      description: "3/4 de syrup blue moon 3/4 de zumo de limón...",
      image: assets.CoctelD,
    },
    {
      title: "Drakon perfect day",
      description: "2oz de drakon macerado en te perfect day...",
      image: assets.CoctelD,
    },
  ];

  return (
    <div className="coctel-container">
      <div className="banner-coctel">
        <h2>DRAKON COCTELES</h2>
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="coctel-card"></div>
      </div>
      <div className="cocktails-grid">
        {cocktails.map((cocktail, index) => (
          <div className="cocktail-card" key={index}>
            <div
              className="cocktail-image"
              style={{ backgroundImage: `url(${cocktail.image})` }}
            ></div>
            <div className="cocktail-content">
              <h3>{cocktail.title}</h3>
            </div>
            <div className="cocktail-hover">
              <p>{cocktail.description}</p>
              <button className="cocktail-button">Ver receta completa</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cocteles;
