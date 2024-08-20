import './productCard.css'
import PropTypes from 'prop-types'

export const ProductCard = (props) => {
  const { title, category, type } = props
  return (
    <>
      <div className="product-card">
        <img src="" alt="" className="product-card__image" />
        <span className="product-card__category">{category}</span>
        <span className="product-card__type">{type}</span>
        <div className="product-type__title">{title}</div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired, // category must be a string and is required
  category: PropTypes.string.isRequired, // category must be a string and is required
  type: PropTypes.string, // type must be a string and is required
}

export default ProductCard
