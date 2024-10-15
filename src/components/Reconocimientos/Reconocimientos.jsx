import React, { useState, useEffect } from 'react';
import './Reconocimientos.css'; 
import { assets } from '../../assets/assets'; 

const Reconocimientos = () => {
  const [selectedMedalla, setSelectedMedalla] = useState(null); // Track which medalla is clicked
  const [isAnimating, setIsAnimating] = useState(false); // Control the animation state

  const medallas = [
    { id: 1, image: assets.medalla, title: 'Medalla 1', description: 'This is the first medalla Drakon won.' },
    { id: 2, image: assets.medalla, title: 'Medalla 2', description: 'This is the second medalla Drakon won.' },
    { id: 3, image: assets.medalla, title: 'Medalla 3', description: 'This is the third medalla Drakon won.' },
    { id: 4, image: assets.medalla, title: 'Medalla 4', description: 'This is the fourth medalla Drakon won.' },
  ];

  // Function to open modal with animation
  const openModal = (medalla) => {
    setSelectedMedalla(medalla);
    setIsAnimating(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedMedalla(null); // After animation ends, reset modal
    }, 300); // Match animation duration
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="reconocimientos-container">
      <h1 className="reconocimientos-title">Reconocimientos de Drakon</h1>

      <div className="reconocimientos-grid">
        {medallas.map((medalla) => (
          <div key={medalla.id} className="medalla-item" onClick={() => openModal(medalla)}>
            <img src={medalla.image} alt={medalla.title} className="medalla-img" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedalla && (
        <div className={`modal-overlay ${isAnimating ? 'open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedMedalla.image} alt={selectedMedalla.title} className="modal-medalla-img" />
            <h2>{selectedMedalla.title}</h2>
            <p>{selectedMedalla.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reconocimientos;
