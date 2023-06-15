import '../sass/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/bandai-namco-logo-footer.png';

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <Link to="/"><img id="footer-logo" src={Logo} alt="Bandai Namco Store" /></Link>
        <ul>
          <li>Games</li>
          <li>Store</li>
          <li>News</li>
          <li>Club!</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Licencing</li>
        </ul>
        <ul className="footer-links-2">
          <li>Register a Game</li>
          <li>Join Us Now</li>
          <p>Languages <span>English</span></p>
        </ul>
        <p>© 2010 - 2023 BANDAI NAMCO Europe S.A.S.</p>
      </section>
    </footer>
  )
}

export default Footer;