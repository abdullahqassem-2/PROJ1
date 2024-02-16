import React from 'react';
const Modal = ({ selectedImage, setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
}

export default Modal;
