import React, { useState } from 'react';
import style from './Portfolio.module.css';
import imge1h from '../../asset/2024-honda-accord-hybrid-rear-angle-view-carbuzz-1107346-1600.jpg';
import imge2h from '../../asset/2024-honda-odyssey-front-view-driving-carbuzz-737379-1600.jpg';
import imge3h from '../../asset/2024-honda-prologue-carbuzz-1183760-1600.jpg';
import imge4h from '../../asset/2024-honda-ridgeline-rear-facing-view-carbuzz-822595-1600.jpg';
import imge5h from '../../asset/2024-honda-civic-hatchback-rear-view-driving-carbuzz-864221-1600.jpg';
import imge6h from '../../asset/honda-civic-si-6560708_1280.jpg';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <div className=   ' w-in position-fixed top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center left'                                           style={{ zIndex: 9999 }}>
          <img className='img-thumbnail h-75 mt-5' src={selectedImage} alt="Selected" />
          <button className='  mt-2 btn btn-danger' onClick={handleClosePopup}>Close</button>

                  </div>
      )}

      <div className="over d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0 bg-black z-3 d-none"></div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-black mt-2 fw-bolder">HondaCars</h1>
        <p className="text-black">
          __________ <i className="fa-solid fa-star fs-4"></i> __________
        </p>
      </div>
      <div className="container">
        <div className="row g-2 mb-3">
          {[
            { src: imge1h, alt: 'pic-1' },
            { src: imge2h, alt: 'pic-2' },
            { src: imge3h, alt: 'pic-3' },
            { src: imge4h, alt: 'pic-4' },
            { src: imge5h, alt: 'pic-5' },
            { src: imge6h, alt: 'pic-6' },
          ].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={style.photo} onClick={() => handleImageClick(image.src)}>
                <img src={image.src} className="img-fluid" alt={image.alt} />
                <div className={style.content}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
