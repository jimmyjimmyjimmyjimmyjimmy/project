import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardBody } from 'reactstrap';

const Sale = `${process.env.PUBLIC_URL}/img/for_store/catalog/sale_lable.png`;
const New = `${process.env.PUBLIC_URL}/img/for_store/catalog/new_lable.png`;

const Catalog = ({ items }) => (
  <div className="catalog-items__wrap">
    <div className="catalog-items">
      {items.map(item => (
        <CardBody className="catalog-item" key={item.id}>
          <Link className="catalog-item__link" to="/discover_park/detail">
            <div className="catalog-item__img-wrap">
              <img className="catalog-item__img" src={item.src} alt="catalog-item-img" />
            </div>
            <div className="catalog-item__info">
              <h5 className="catalog-item__title">{item.title}</h5>
              <p className="catalog-item__description">{item.description}</p>
            </div>
          </Link>
        </CardBody>
      ))}
    </div>
  </div>
);

Catalog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    new: PropTypes.bool,
  })),
};

Catalog.defaultProps = {
  items: [],
};

export default Catalog;
