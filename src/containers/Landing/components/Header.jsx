import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StickyMenu from '../lib/StickyMenu';
import Navigation from './Navigation';
import { LineLogIn } from './LineLogIn/LineLogin';
import logo7 from '../assets/images/logo-7.png';
import logo from '../assets/images/logo.png';

function Header({
  lang,
  darkEnable = false,
  action,
  langEnabled = false,
  changeMode,
  changeModeLan,
  dark,
  className,
}) {
  useEffect(() => {
    StickyMenu();
  });
  return (
    <header className={`appie-header-area appie-sticky ${className || ''}`}>
      <div className="container">
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 order-1 order-sm-1">
              <div className="appie-logo-box">
                {darkEnable && dark ? (
                  <a href="/">
                    <img src={logo7} alt="" />
                  </a>
                ) : (
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-6 col-6 order-1 order-sm-1">
              <div className="text-right">
                <button 
                  className="button"
                  type="button"
                  onClick={async () => {
                  const user = await LineLogIn();
                  // console.log(user);
                  //   <h1>{ user }</h1>;
                  }}
                >
                  <i className="fal fa-user" />   เข้าสู่ระบบ
                </button>
                <script src={LineLogIn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  lang: PropTypes.func.isRequired,
  darkEnable: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  langEnabled: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeModeLan: PropTypes.func.isRequired,
  dark: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
};

export default Header;
