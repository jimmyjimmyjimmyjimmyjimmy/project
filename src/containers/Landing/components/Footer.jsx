/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo72 from '../assets/images/logo72.png';

function Footer({ className }) {
  return (
    <>
      <section className={`appie-footer-area ${className || ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href=" ">
                    <img src={logo72} alt="" />
                  </a>
                </div>
                <p>
                  บริษัท ไทยดอทรัน จำกัด ฮับความสุขของนักวิ่ง
                </p>
                <a href="https://www.thai.run/">
                  ไปยังเว็บไซต์หลักของ ไทยดอทรัน <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">เว็บไซต์อื่นๆของเรา</h4>
                <ul>
                  <a 
                    href="https://race.thai.run"
                    style={{ color:'#505056' }}
                    >
                      สมัครวิ่ง
                  </a>
                  <br />
                  <a 
                    href="https://vr.thai.run"
                    style={{ color:'#505056' }}
                  >
                    Virtual Run
                  </a>
                  <br />
                  <a 
                    href="https://shop.thai.run"
                    style={{ color:'#505056' }}
                  >
                    อุปกรณ์วิ่ง
                  </a>
                  <br />
                  <a 
                    href="https://photo.thai.run"
                    style={{ color:'#505056' }}
                  >
                    ซื้อภาพงานวิ่ง
                  </a>
                  <br />
                  <a 
                    href="https://read.thai.run"
                    style={{ color:'#505056' }}
                  >
                    เรื่องเล่านักวิ่ง
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">ติดต่อเรา</h4>
                <ul>
                  <a href="admin@thai.run" style={{ color:'#505056' }}>
                    <i className="fal fa-envelope" style={{ color:'#2b70fa' }} /> admin@thai.run
                  </a>
                  <br/><br/>
                  <a 
                    href="https://liff.line.me/1645278921-kWRPP32q/?accountId=thairun" 
                    style={{ color:'#505056' }}
                  >
                    <i className="fab fa-line" style={{ color:'#2b70fa' }} /> @thairun
                  </a>
                  <br/><br/>
                  <a href="https://m.me/thaidotrun" style={{ color:'#505056' }}>
                    <i className="fab fa-facebook-messenger" style={{ color:'#2b70fa' }} /> m.me/thaidotrun
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">ที่อยู่</h4>
                <p>
                  <i className="fa fa-map-marker" style={{ color: '#3c6ef7' }} /> ที่อยู่ | 803, 805, 807, 809 
                  โครงการ Stadium One ซอย จุฬาลงกรณ์ 4 ถนน บรรทัดทอง แขวง วังใหม่ เขต ปทุมวัน กรุงเทพฯ 10330
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                <div className="copyright-text">
                  <p>Sample Legal Notice Copyright © Thaidotrun Co., Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Footer.propTypes = {
  className: PropTypes.func.isRequired,
};

export default Footer;
