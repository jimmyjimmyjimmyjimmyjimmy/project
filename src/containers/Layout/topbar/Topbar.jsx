import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopbarLanguage from '../components/topbar/TopbarLanguage';
import TopbarMail from '../components/topbar/TopbarMail';
import TopbarProfile from '../components/topbar/TopbarProfile';
import TopbarNotification from '../components/topbar/TopbarNotification';
import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton from '../components/topbar/TopbarSidebarButton';

const Topbar = ({
  changeMobileSidebarVisibility, changeSidebarVisibility,
}) => (
  <div className="topbar">
    <div className="topbar__left">
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeSidebarVisibility}
      />
    </div>
    <div className="topbar__right">
      <div className="topbar__right-search" />
      <div className="topbar__right-over">
        <Link className="topbar__logo" to="/" />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
