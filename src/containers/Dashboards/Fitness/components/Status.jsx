import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import GetStatus from './GetStatus';

const Time = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={12} lg={12} xs={12}>
      <div className="mobile-app-widget">
        <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
          <GetStatus />
        </div>
      </div>
    </Col>
  );
};

export default Time;
