import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col } from 'reactstrap';
import className from 'classnames';
import Carousel from '@/shared/components/carousel/CarouselMultiply';
import IconOne from '../assets/images/banner-1.png';
import IconTwo from '../assets/images/banner-2.png';
import IconThree from '../assets/images/banner-3.png';
import IconFour from '../assets/images/banner-4.png';

// import React from 'react';
// import { useTranslation } from 'react-i18next';
const data = [
  { id: 0, src: `${ IconOne }` },
  { id: 1, src: `${ IconTwo }` },
  { id: 2, src: `${ IconThree }` },
  { id: 3, src: `${ IconFour }` },
];

const StepsSection = () => { //eslint-disable-line
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
    >
      <div className="col-lg-12">
        <Col md={12} lg={12} xl={12} sm={12} xs={12} className=" ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="appie-section-title text-center">
                  <h3 className="appie-title">
                    Make your <br /> first step with us.
                  </h3>
                  <p>
                    เริ่มวิ่งสเต็ปแรกกับเรา{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Carousel>
            {data.map(item => (
              <div key={item.id}>
                <img src={item.src} alt={`slide_${item.src}`} />
              </div>
            ))}
          </Carousel>
        </Col>
      </div>
    </section>
  );
};

export default StepsSection;

// function StepsSection({ className }) {
//   return (
    

//         <div className="row">
//           <div className="col-lg-3 col-sm-6">
//             <div
//               className="appie-single-service text-center mt-30 wow animated fadeInUp"
//               data-wow-duration="2000ms"
//               data-wow-delay="200ms"
//             >
//               <img src={IconOne} alt="" />
//             </div>
//           </div>
//           <div className="col-lg-3 col-sm-6">
//             <div
//               className="appie-single-service text-center mt-30 wow animated fadeInUp"
//               data-wow-duration="2000ms"
//               data-wow-delay="200ms"
//             >
//               <img src={IconTwo} alt="" />
//             </div>
//           </div>
//           <div className="col-lg-3 col-sm-6">
//             <div
//               className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
//               data-wow-duration="2000ms"
//               data-wow-delay="600ms"
//             >
//               <img src={IconThree} alt="" />
//             </div>
//           </div>
//           <div className="col-lg-3 col-sm-6">
//             <div
//               className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
//               data-wow-duration="2000ms"
//               data-wow-delay="800ms"
//             >
//               <img src={IconFour} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// StepsSection.propTypes = {
//   className: PropTypes.func.isRequired,
// };

// export default StepsSection;
