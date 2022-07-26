import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Row, Card, CardBody, Col, Progress,
} from 'reactstrap';
import GetRecentPace from './GetRecentPace';
import GetRecentDistance from './GetRecentDistance';
import GetRecentTime from './GetRecentTime';

const Pace = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={12} lg={12} xs={12}>
      <Row>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
              <p className="mobile-app-widget__total-stat"><GetRecentPace /></p>
            </div>
            <div className="mobile-app-widget__title">
              <h5>เพซเฉลี่ย</h5>
            </div>
          </div>
        </CardBody>
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
      </Row>
    </Col>
  );
};

export default Pace;
