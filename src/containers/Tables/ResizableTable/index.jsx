import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import ResizableDataTable from './components/ResizableReactTable';
import CreateTableData from '../CreateData';

const ResizableTable = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <br />
          <h3 className="page-title">เพิ่มเส้นทางวิ่ง</h3>
        </Col>
      </Row>
      <Row>
        <ResizableDataTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default ResizableTable;
