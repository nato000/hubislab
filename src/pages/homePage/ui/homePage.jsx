import { Header } from '../../../widgets/header'
import { homePage } from '../../../text/ua-text.json'
import './homePage.css'
import { productsLine } from '../../../text/ua-text.json'
import { Footer } from '../../../widgets/footer'
import ProductLineCard from '../../../widgets/productLineCard/ui/productLineCard'

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-background-wrapper">
            <div className="container">
              <div className="hero-text-wrapper">
                <h1 className="hero__title">{homePage.main.hero.title}</h1>
                <p className="hero__description">
                  {homePage.main.hero.description}
                </p>
              </div>
              <a href="#products" className="hero__scroll">
                <div className="hero-scroll__left"></div>
                <div className="hero-scroll__right"></div>
              </a>
            </div>
          </div>
        </section>
        <section id="products" className="products">
          <div className="container">
            <h3 className="products__title">{homePage.main.products.title}</h3>
            <div className="products__grid">
              {Object.entries(productsLine).map(
                ([productId, product], index) => (
                  <ProductLineCard
                    key={index}
                    title={product.title}
                    category={product.category}
                    type={product.type}
                    img={`/images/productLines/cardImg/${product.cardImg}`}
                    productId={productId}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
