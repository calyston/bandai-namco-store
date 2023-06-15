import '../sass/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/bandai-namco-logo-footer.png';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
        <div className="footer-links-sns">
          <ul className="footer-links-2">
            <li>Register a Game</li>
            <li>Join Us Now</li>
            <p>Languages <span>English</span></p>
          </ul>
          <div className="footer-sns">
            <FontAwesomeIcon icon={faTwitch} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </section>
      <p className="copyright-text">© 2010 - 2023 BANDAI NAMCO Europe S.A.S.</p>
    </footer>
  )
}

export default Footer;