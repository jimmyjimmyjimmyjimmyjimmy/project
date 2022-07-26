import React, { useState } from 'react';
import { Card, CardBody, Col, ButtonToolbar } from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';
import ColorSelect from './ColorSelect';

const ProductCard = ({ items }) => {
  <Col md={12} lg={12}>
    <Card>
      <CardBody className="catalog-item" key={item.id}>
        >
        <div className="product-card">
          <ProductGallery images={item.src} />
          <div className="product-card__info">
            <h5 className="catalog-item__title">{item.title}</h5>
            <p className="catalog-item__description">{item.description}</p>
            <form className="form product-card__form">
              <div className="form__form-group">
                <span className="form__form-group-label product-card__form-label">
                  Select Color
                </span>
                <div className="form__form-group-field">
                  <ColorSelect
                    options={[
                      {
                        value: "Pink Sugar",
                        label: "Pink Sugar",
                        color: "#f7a9c4",
                      },
                      {
                        value: "Pink Sugar",
                        label: "Pink Sugar",
                        color: "#f7a9c4",
                      },
                      {
                        value: "Pink Sugar",
                        label: "Pink Sugar",
                        color: "#f7a9c4",
                      },
                    ]}
                  />
                </div>
              </div>
              <ButtonToolbar className="product-card__btn-toolbar">
                <Link className="btn btn-primary" to="/e-commerce/cart">
                  Add to cart
                </Link>
                <button
                  className="product-card__wish-btn"
                  type="button"
                  onClick={onLike}
                >
                  <HeartIcon color={color} />
                  Add to wishlist
                </button>
              </ButtonToolbar>
            </form>
            <ProductTabs />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>;
};

export default ProductCard;
