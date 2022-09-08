import logo from '../images/logo.png';
import '../styles/layout/Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>
          Back-end to the future <small>©2022</small>
        </p>
      </div>
      <div className="footer__logo">
        <a href="./index.html#">
          {' '}
          <img
            className="footer__logo--img"
            src={logo}
            alt="logo"
            title="logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
