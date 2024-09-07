import './productCard.css'
import PropTypes from 'prop-types'

export const ProductCard = (props) => {
  const { title, img } = props
  return (
    <>
      <div className="product-card">
        <img src={`${img}`} alt={title} className="product-card__image" />
        {/* <img src={`${image}/${img}`} alt="" className="product-card__image" /> */}
        <div className="product-card-wrapper">
          <h1 className="product-type__title">{title}</h1>
        </div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired, // category must be a string and is required
  img: PropTypes.string.isRequired, // type must be a string and is required
}

export default ProductCard
