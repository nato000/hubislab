import { FaceBookIcon } from '../../../shared/assets/icons'
import './header.css'
export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="header__logo">
          <img src="/" alt="Logo" />
          logo
        </a>
        <span className="header__description">
          Офіційний представник Hubislab
        </span>
        <ul className="header__socials">
          <li className="header-socials__item">
            <a href="#" className="header-socials-item__links">
              <img src={FaceBookIcon} alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/facebook1.svg" alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/instagram.svg" alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/instagram1.svg" alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/youtube-filled.svg" alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/youtube.svg" alt="" />
            </a>
            <a href="#" className="header-socials-item__links">
              <img src="./icons/linkedin.svg" alt="" />
            </a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
