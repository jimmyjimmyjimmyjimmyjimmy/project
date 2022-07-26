import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import Form from './components/Form';
import DragAndDropTable from './DnDTable';


const FormHookValidation = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <br />
          <h3 className="page-title">เพิ่มเส้นทางวิ่ง</h3>
        </Col>
      </Row>
      <Row>
        <Form isHorizontal />
      </Row>
      <Row>
        <DragAndDropTable />
      </Row>
    </Container>
  );
};

export default FormHookValidation;
