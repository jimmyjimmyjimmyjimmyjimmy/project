import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from './components/ProductCard';
import RelatedItems from './components/RelatedItems';

const ProductPage = () => (
  <Container>
    <Row>
      <Col md={12}>
        <br />
        <h3 className="page-title">ข้อมูลสวน</h3>
      </Col>
    </Row>
    <Row>
      <ProductCard />
    </Row>
  </Container>
);

export default ProductPage;
