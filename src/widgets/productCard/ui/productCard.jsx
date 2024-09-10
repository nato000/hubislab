import './productCard.css'
import PropTypes from 'prop-types'

export const ProductCard = (props) => {
  const { title, description, weight, img } = props
  return (
    <>
      <div className="product-card">
        <img src={`${img}`} alt={description} className="product-card__image" />
        {/* <img src={`${image}/${img}`} alt="" className="product-card__image" /> */}
        <div className="product-card-wrapper">
          <p className="product-type__description">{description}</p>
        </div>
        <div className="product-card__name">
          <span className="product-card-name__title">{title}</span>
          <span className="product-card-name__weight">{weight}</span>
        </div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired, // category must be a string and is required
  description: PropTypes.string.isRequired, // type must be a string and is required
  weight: PropTypes.string.isRequired, // type must be a string and is required
  img: PropTypes.string.isRequired, // type must be a string and is required
}

export default ProductCard
