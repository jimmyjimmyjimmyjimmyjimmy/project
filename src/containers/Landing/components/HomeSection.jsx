import React from 'react';
import PropTypes from 'prop-types';
import heroThumbOne from '../assets/images/hero-thumb-1.png';
import heroThumbTwo from '../assets/images/hero-thumb-2.png';
import shapeTwo from '../assets/images/shape/shape-2.png';
import shapeThree from '../assets/images/shape/shape-3.png';
import shapeFour from '../assets/images/shape/shape-4.png';

function HomeSection({ className }) {
  return (
    <>
      <section className={`appie-hero-area ${className || ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>ยินดีต้อนรับ!</span>
                <h3 className="appie-title">
                  RUN BEACON, RUN!
                </h3>
                <p>
                  &quot;วันนั้นไม่มีเหตุผลอะไรเป็นพิเศษฉันจึงตัดสินใจออกไปวิ่ง&quot; <br /> - ฟอร์เรสท์ กัมพ์
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeFour} alt="" />
        </div>
      </section>
    </>
  );
}

HomeSection.propTypes = {
  className: PropTypes.func.isRequired,
};

export default HomeSection;
