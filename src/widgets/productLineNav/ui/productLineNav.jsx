import { Link } from 'react-router-dom'
import { productsLine } from '../../../text/ua-text.json'
import './productLineNav.css'
import { useState } from 'react'
export const ProductLineNav = () => {
  const [expand, setExpand] = useState(false)
  const handleToggle = () => {
    setExpand(!expand)
  }
  return (
    <>
      <nav className="porduct-line-nav">
        <div
          className={`porduct-line-nav-wrapper ${
            expand ? 'expanded' : 'collapsed'
          }`}
        >
          <ul className="porduct-line-nav__list">
            {Object.entries(productsLine).map(([key, product]) => (
              <li className="porduct-line-nav-list__item" key={key}>
                <Link
                  to={`/product/${key}`}
                  className="porduct-line-nav-list-item__link"
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <button className="porduct-line-nav__expand">
          <div className="porduct-line-nav-expand__arrow-left"></div>
          <div className="porduct-line-nav-expand__arrow-right"></div>
        </button> */}
        <button className="porduct-line-nav__expand" onClick={handleToggle}>
          <div
            className={`porduct-line-nav-expand__arrow ${
              expand ? 'arrow-down' : 'arrow-up'
            }`}
          >
            <div
              className={`arrow__left ${expand ? 'arrow-up' : 'arrow-down'}`}
            ></div>
            <div
              className={`arrow__right ${expand ? 'arrow-up' : 'arrow-down'}`}
            ></div>
            {/* <div className="arrow__left"></div>
            <div className="arrow__right"></div> */}
          </div>
        </button>
      </nav>
    </>
  )
}

export default ProductLineNav
