import './footer.css'
import FacebookIcon from '../../../shared/assets/icons/facebook.svg' // Import SVG directly
import InstagramIcon from '../../../shared/assets/icons/instagram.svg' // Import SVG directly
import TelegramIcon from '../../../shared/assets/icons/telegram.svg'
import { footer } from '../../../text/ua-text.json'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <Link to="/" className="footer__logo">
              <img
                className="header-logo__image"
                src="/images/logo1.png"
                alt="Logo"
              />
            </Link>
            <div className="footer__contacts">
              <span className="footer-contacts__text">
                <span className="footer-contacts__header">
                  {footer.info.title}
                </span>
                {footer.info.description}
              </span>
              <span className="footer-contacts__text">
                <span className="footer-contacts__header">
                  {footer.adress.title}
                </span>
                {footer.adress.description}
              </span>
            </div>
            <div className="footer__socials">
              <span className="footer-socials__title">
                {footer.social.title}
              </span>
              <a
                className="footer-contacts__number-link"
                href="tel:+380939959998"
              >
                {footer.social.phone}
              </a>
              <a
                className="footer-contacts__number-link"
                href={`mailto:${footer.social.email}`}
              >
                {footer.social.email}
              </a>
              <ul className="footer-socials__list">
                <li className="footer-socials-list__item">
                  <a
                    href=""
                    className="footer-socials-list-item__link"
                    target="_blank"
                  >
                    <img
                      src={TelegramIcon}
                      alt="TelegramIcon"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>

                <li className="footer-socials-list__item">
                  <a
                    href="https://www.instagram.com/hubislab_ukraine?igsh=M2k2Y3p2cm1saW4y&utm_source=qr"
                    className="footer-socials-list-item__link"
                    target="_blank"
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="footer-socials-list-item-link__icon"
                    />
                  </a>
                </li>
                <li className="footer-socials-list__item">
                  <a
                    href=""
                    className="footer-socials-list-item__link"
                    target="_blank"
                  >
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
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
