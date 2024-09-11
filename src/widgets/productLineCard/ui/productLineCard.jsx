import { Link } from 'react-router-dom'
import './productLineCard.css'
import PropTypes from 'prop-types'

export const ProductLineCard = (props) => {
  const { title, category, type, img, productId } = props
  return (
    <>
      <article className="product-line-card">
        <img
          src={`${img}`}
          alt={`${title}`}
          className="product-line-card__image"
        />
        {/* <img src={`${image}/${img}`} alt="" className="product-line-card__image" /> */}
        <Link
          to={`/hubislab/product/${productId}`}
          className="product-line-card-wrapper"
        >
          <div className="product-line-type__title">{title}</div>
        </Link>
        <span className="product-line-card__category">{category}</span>
        {type.length === 0 ? (
          <></>
        ) : (
          <span className="product-line-card__type">{type}</span>
        )}
      </article>
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
