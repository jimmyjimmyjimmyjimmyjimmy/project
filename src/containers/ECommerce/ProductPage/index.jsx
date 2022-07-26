import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from './components/ProductCard';
import RelatedItems from './components/RelatedItems';

const ProductPage = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">รายละเอียดสวน</h3>
      </Col>
    </Row>
    <Row>
      <ProductCard />
    </Row>
    <Row>
      <Col md={12}>
        <h3 className="page-title page-title--not-last">Related Items</h3>
      </Col>
    </Row>
    <Row>
      <RelatedItems />
    </Row>
  </Container>
);

export default ProductPage;
