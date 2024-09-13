import { useParams } from 'react-router-dom'
import { productsLine } from '../../../text/ua-text.json'
import { ProductLineNav } from '../../productLineNav'
import { ProductCard } from '../../productCard'
import './productLineDetails.css'

export const ProductLineDetails = () => {
  const { productId } = useParams() // Capture productId from the URL
  const productLine = productsLine[productId] // Get the product from the products object

  if (!productLine) {
    return <h2>Product not found</h2>
  }
  return (
    <>
      <h1 className="product-line__title">{productLine.title}</h1>
      <ProductLineNav />
      <div className="product-line-description">
        <h3 className="product-line-description__features">
          <span className="product-line-description-features__name">
            {`${productLine.title} `}
          </span>
        </h3>
        <img
          className="product-line-description__features-banner"
          src={`/images/productLines/bannerImg/${productLine.bannerImg}`}
          alt={productLine.bannerImg}
        />
        <p className="product-line-description__features-description">
          {productLine.features}
        </p>
        <h3 className="product-line-description__products">
          <span className="product-line-description-features__name">
            {`${productLine.title} `}
          </span>
          Лінійка
        </h3>
        <div className="product-line-product-grid">
          {Object.entries(productLine.products).map(
            ([productKey, product], index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                weight={product.weight}
                img={`/images/products/${product.cardImg}`}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default ProductLineDetails
