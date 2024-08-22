import './footer.css'
import FacebookIcon from '../../../shared/assets/icons/facebook.svg' // Import SVG directly
import InstagramIcon from '../../../shared/assets/icons/instagram.svg' // Import SVG directly
import YoutubeIcon from '../../../shared/assets/icons/youtube.svg' // Import SVG directly
import LinkedInIcon from '../../../shared/assets/icons/linkedin.svg'
import { footer } from '../../../text/ua-text.json'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <Link to="/hubislab" className="footer__logo">
              <img src="" alt="LOGO" />
            </Link>
            <div className="footer__socials">
              <span className="footer-socials__title">
                {footer.social.title}
              </span>
              <ul className="footer-socials__list">
                <li className="footer-socials-list__item">
                  <a href="" className="footer-socials-list-item__link">
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>
                <li className="footer-socials-list__item">
                  <a href="" className="footer-socials-list-item__link">
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>
                <li className="footer-socials-list__item">
                  <a href="" className="footer-socials-list-item__link">
                    <img
                      src={YoutubeIcon}
                      alt="Youtube"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>
                <li className="footer-socials-list__item">
                  <a href="" className="footer-socials-list-item__link">
                    <img
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
