import '../sass/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import HomeHero from '../components/HomeHero';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <h1>Hello</h1>
      <button>Hello</button>
    </div>
  )
}

export default Home;