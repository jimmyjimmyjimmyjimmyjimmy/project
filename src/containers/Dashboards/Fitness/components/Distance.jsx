import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import GetRecentDistance from './GetRecentDistance';

const Dist = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={4} xl={4} lg={4} xs={4}>
      <CardBody className="dashboard__card-widget">
        <div className="mobile-app-widget">
          <div className="mobile-app-widget__top-line mobile-app-widget__top-line--lime">
            <p className="mobile-app-widget__total-stat">
              <GetRecentDistance />
            </p>
          </div>
          <div className="mobile-app-widget__title">
            <h5>ระยะทาง</h5>
          </div>
        </div>
      </CardBody>
    </Col>
  );
};

export default Dist;
