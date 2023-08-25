import React from "react";
import Logo from '../assets/logo.png';

const Carausal = () => {

    return (
        <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src={Logo} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={Logo} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={Logo} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={Logo} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>
    );

}

export default Carausal;