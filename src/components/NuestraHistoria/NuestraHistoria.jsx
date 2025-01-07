import React from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      <h1 className="historia-main-titleP">Un objetivo claro</h1>
      <div className="ceibos-arbol-gif">
        <img src={assets.GifBuho} alt="Gif1" />
      </div>
      <p className="historia-text">
        Drakon nació en 2023 como una visión innovadora que buscaba trascender las fronteras tradicionales de la industria de los destilados. Desde el corazón de Manabí, Ecuador, nos propusimos crear un producto que no solo destacara por su calidad excepcional, sino que también fuera un fiel representante de la riqueza cultural, natural e histórica de nuestro país.
      </p>
      
      <img className="historia-img" src={assets.bannerIdentidadRec} alt="Banner proceso de fabricacion" />

      <div className="ceibos-arbol-gif">
        <img src={assets.GifBuho} alt="Gif2" />
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
        <img src={assets.GifBuho} alt="Gif4" />
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

      <Footer />
    </div>
  );
};

export default NuestraHistoria;