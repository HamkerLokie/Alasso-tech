import React, { useEffect } from 'react';
// import './css/progie.css';

function Progi(props) {

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      document.querySelector('.popup').style.display = 'block';
    }, 1000);

    return () => clearTimeout(popupTimeout);
  }, []);

  
 
  function handleCloseClick() {
    document.querySelector('.popup').style.display = 'none';
    props.onClose();
  }
  return (
    <div className="popup">
      <button id="close" onClick={handleCloseClick}>
        &times;
      </button>
      <h2>SUPPORT CU STUDENT FOR HIS TREATMENT</h2>
      <img
        className="responsive"
        src="https://kettocdn.gumlet.io/media/campaign/764000/764514/image/63ff7d034ea44.jpg"
        alt="Happy Image"
      />
      <p>Happy is fatherless and suffering from an accident. Support him by donating for his treatment.</p>
      <a href="https://www.ketto.org/fundraiser/cu-student-happy-accident-treatment-support">Donate Now</a>
    </div>
  );
}

export default Progi
