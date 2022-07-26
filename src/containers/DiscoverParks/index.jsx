import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CatalogItems from './components/CatalogItems';

const DiscoverParks = () => (
  <Container>
    <Row>
      <Col md={12}>
        <br />
        <h3 className="page-title">รายการสวนในระบบ</h3>
        <h3 className="page-subhead subhead">รายการแสดงสวนสาธารณะในระบบ
        </h3>
      </Col>
    </Row>
    <Row>
      <CatalogItems />
    </Row>
  </Container>
);

export default DiscoverParks;
