import React from 'react';
import { Col } from 'reactstrap';
import ProductItems from '@/shared/components/catalog/ProductItems';
import catalogList from './catalog_list';
import ParkSelect from './ParkSelect';

const CatalogItems = () => (
  <Col md={12} lg={12}>
    <div className="form__form-group-field">
      <ParkSelect
        options={[
          {
            value: '1',
            label: 'สนามศุภชลาสัย',
          },
          {
            value: '2',
            label: 'Park 2',
          },
          {
            value: '3',
            label: 'Park 3',
          },
          {
            value: '4',
            label: 'Park 4',
          },
          {
            value: '5',
            label: 'Park 5',
          },
          {
            value: '6',
            label: 'Park 6',
          },
          {
            value: '7',
            label: 'Park 7',
          },
          <ProductItems items={catalogList.value} />,
        ]}
      />
    </div>
    <br />
    <ProductItems items={catalogList} />
  </Col>
);

export default CatalogItems;
