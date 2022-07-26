import React, { useState } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import BannerAddFriend from '../assets/images/addfriends-thumb.png';
import BannerAddFriendWeb from '../assets/images/addfriends-thumb-web.png';
import BannerDiscover from '../assets/images/discoverparks-thumb.png';
import BannerDiscoverWeb from '../assets/images/discoverparks-thumb-web.png';

function AddFriendDiscoverParks({ className }) {
  return (
    <>
      <section className={`appie-pricing-area pt-90 pb-90 ${className || ''}`}>
        <Row>
          <Col md={6} lg={6} xl={6} sm={12} xs={12} className=" ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="appie-section-title text-center">
                    <br />
                    <h3 className="appie-title">Friends Wanted!</h3>
                    <p>เป็นเพื่อนกับ Line Official Account</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div
                    className="appie-single-service text-center mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                  >
                    <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=228ootxq">
                      <img src={BannerAddFriend} alt="" className="visible-mobile" />
                      <img src={BannerAddFriendWeb} alt="" className="hidden-mobile" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} sm={12} xs={12} className=" ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="appie-section-title text-center">
                    <br />
                    <h3 className="appie-title">Discover Parks</h3>
                    <p>ดูสวนในระบบของเรา</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div
                    className="appie-single-service text-center mt-30 wow animated fadeInUp"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                  >
                    <a href="/discover_park">
                      <img src={BannerDiscover} alt="" className="visible-mobile" />
                      <img src={BannerDiscoverWeb} alt="" className="hidden-mobile" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

AddFriendDiscoverParks.propTypes = {
    className: PropTypes.func.isRequired,
};

export default AddFriendDiscoverParks;
