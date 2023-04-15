import '../sass/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import HomeHero from '../components/HomeHero';

// Images
import promo1 from '../assets/icon-1.png'
import promo2 from '../assets/icon-2.png'
import promo3 from '../assets/icon-3.png'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <article className="promo-cards">
        <div className="promo-card">
          <img src={promo1} alt="Exclusive editions & collectibles" />
          <div className="promo-text">
            <h4>Exclusive</h4>
            <p>editions & collectibles</p>
          </div>
        </div>
        <div className="promo-card">
          <img src={promo2} alt="Regular deals on our catalog!" />
          <div className="promo-text">
            <h4>Regular</h4>
            <p>deals on our catalog!</p>
          </div>
        </div>
        <div className="promo-card">
          <img src={promo3} alt="Prices include all applicable taxes" />
          <div className="promo-text">
            <h4>Prices Include</h4>
            <p>all applicable taxes</p>
          </div>
        </div>
      </article>

      <article>
        <div className="title">
          <h3>Discover Our</h3>
          <h2>New Products</h2>
        </div>
      </article>

      <button>Hello</button>
    </div>
  )
}

export default Home;