import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import GetRecentTime from './GetRecentTime';

const Time = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={4} xl={4} lg={4} xs={4}>
      <CardBody className="dashboard__card-widget">
        <div className="mobile-app-widget">
          <div className="mobile-app-widget__top-line mobile-app-widget__top-line--blue">
            <p className="mobile-app-widget__total-stat"><GetRecentTime /></p>
          </div>
          <div className="mobile-app-widget__title">
            <h5>เวลา</h5>
          </div>
        </div>
      </CardBody>
    </Col>
  );
};

export default Time;
