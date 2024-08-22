import { Link } from 'react-router-dom'
import './productLineCard.css'
import PropTypes from 'prop-types'

export const ProductLineCard = (props) => {
  const { title, category, type, img, productId } = props
  return (
    <>
      <div className="product-card">
        <img src={`${img}`} alt="" className="product-card__image" />
        {/* <img src={`${image}/${img}`} alt="" className="product-card__image" /> */}
        <Link
          to={`/hubislab/product/${productId}`}
          className="product-card-wrapper"
        >
          <div className="product-type__title">{title}</div>
        </Link>
        <span className="product-card__category">{category}</span>
        {type.length === 0 ? (
          <></>
        ) : (
          <span className="product-card__type">{type}</span>
        )}
      </div>
    </>
  )
}

ProductLineCard.propTypes = {
  title: PropTypes.string.isRequired, // category must be a string and is required
  category: PropTypes.string.isRequired, // category must be a string and is required
  type: PropTypes.string, // type must be a string and is required
  img: PropTypes.string.isRequired, // type must be a string and is required
  productId: PropTypes.string.isRequired,
}

export default ProductLineCard
