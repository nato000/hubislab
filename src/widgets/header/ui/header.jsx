import './header.css'
import { header } from '../../../text/ua-text.json'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/hubislab" className="header__logo">
              <img
                className="header-logo__image"
                src="/hubislab/images/logo2.png"
                alt="Logo"
              />
            </Link>
            <span className="header__description">{header.description}</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
