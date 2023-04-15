import '../sass/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

import Logo from '../assets/bandai-namco-logo.png';

const Header = ({ toggleyOverflow }) => {
  return (
    <header>
      <Navigation />
    </header>
  )
}

export default Header;