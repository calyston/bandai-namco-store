import '../sass/main.scss';
import React from "react";
import { Link } from 'react-router-dom';
import newProduct from './ProductContent';

const newProducts = () => {
  return (
    <section className="products-grid">
      <div className="product-card">
        <img src={newProduct[0].img} alt={newProduct[0].alt} />
        <div className="product-card-text">
          <h3>{newProduct[0].title}</h3>
          <div>
            <h4>{newProduct[0].description}</h4>
            <p>{newProduct[0].type}</p>
          </div>
        </div>
        <button className="product-card-price">
          <p>Add To Cart</p>
          <h3>{newProduct[0].price}</h3>
        </button>
      </div>

      <div className="product-card">
        <img src={newProduct[1].img} alt={newProduct[1].alt} />
        <div className="product-card-text">
          <h3>{newProduct[1].title}</h3>
          <div>
            <h4>{newProduct[1].description}</h4>
            <p>{newProduct[1].type}</p>
          </div>
        </div>
        <button className="product-card-price">
          <p>Add To Cart</p>
          <h3>{newProduct[1].price}</h3>
        </button>
      </div>

      <div className="product-card">
        <img src={newProduct[2].img} alt={newProduct[2].alt} />
        <div className="product-card-text">
          <h3>{newProduct[2].title}</h3>
          <div>
            <h4>{newProduct[2].description}</h4>
            <p>{newProduct[2].type}</p>
          </div>
        </div>
        <button className="product-card-price">
          <p>Add To Cart</p>
          <h3>{newProduct[2].price}</h3>
        </button>
      </div>

      <div className="product-card">
        <img src={newProduct[3].img} alt={newProduct[3].alt} />
        <div className="product-card-text">
          <h3>{newProduct[3].title}</h3>
          <div>
            <h4>{newProduct[3].description}</h4>
            <p>{newProduct[3].type}</p>
          </div>
        </div>
        <button className="product-card-price">
          <p>Add To Cart</p>
          <h3>{newProduct[3].price}</h3>
        </button>
      </div>
    </section>
  )
}

export default newProducts;