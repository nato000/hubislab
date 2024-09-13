import './header.css'
import { header } from '../../../text/ua-text.json'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/" className="header__logo">
              <img
                className="header-logo__image"
                src="/images/logo2.png"
                alt="Logo"
              />
            </Link>
            <span className="header__description">
              {header.description.part1}
              <span className="header-description__hubis">
                {header.description.part2}
              </span>
              <span className="header-description__lab">
                {header.description.part3}
              </span>
              {header.description.part4}
            </span>
            <a className="header__catalog" href="/#products">
              {header.catalog}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
