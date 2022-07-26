import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Panel from '@/shared/components/Panel';
import Pace from './components/Pace';
import Distance from './components/Distance';
import Time from './components/Time';
import RangeSwitch from './components/RangeSwitch';
import TabTab from './components/Tab';
import VectorMap from '../../Maps/VectorMap';
import Status from './components/Status';
import Reservations from './components/Reservations';
import WeeklyStat from './components/WeeklyStat';
import Occupancy from './components/Occupancy';

const AppDashboard = () => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <br />
          <br />
          <h1 className="page-title">ประวัติการวิ่งล่าสุด</h1>
        </Col>
      </Row>
      <br />
      <Status />
      <br />
      <Pace />
      <br />
      <Col md={12}>
        <h3 className="page-title">สถิติของฉัน</h3>
      </Col>
      <Row>
        <Col md={12}>
          <Occupancy />
        </Col>
      </Row>
    </Container>
  );
};

export default AppDashboard;
