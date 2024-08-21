import './header.css'
import FacebookIcon from '../../../shared/assets/icons/facebook.svg' // Import SVG directly
import InstagramIcon from '../../../shared/assets/icons/instagram.svg' // Import SVG directly
import YoutubeIcon from '../../../shared/assets/icons/youtube.svg' // Import SVG directly
import LinkedInIcon from '../../../shared/assets/icons/linkedin.svg'
import { header } from '../../../text/ua-text.json'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/" className="header__logo">
              <img src="../../../shared/assets/icons/facebook.svg" alt="Logo" />
              logo
            </Link>
            <span className="header__description">{header.description}</span>
            <ul className="header__socials">
              <li className="header-socials__item">
                <span className="header-socials-item__text">
                  {header.social}
                </span>
              </li>
              <li className="header-socials__item">
                <a href="#" className="header-socials-item__link">
                  <img
                    className="header-socials-item-link__image"
                    src={FacebookIcon}
                    alt="Facebook"
                  />
                </a>
              </li>
              <li className="header-socials__item">
                <a href="#" className="header-socials-item__link">
                  <img
                    className="header-socials-item-link__image"
                    src={InstagramIcon}
                    alt="Instagram"
                  />
                </a>
              </li>
              <li className="header-socials__item">
                <a href="#" className="header-socials-item__link">
                  <img
                    className="header-socials-item-link__image"
                    src={YoutubeIcon}
                    alt="Youtube"
                  />
                </a>
              </li>
              <li className="header-socials__item">
                <a href="#" className="header-socials-item__link">
                  <img
                    className="header-socials-item-link__image"
                    src={LinkedInIcon}
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
