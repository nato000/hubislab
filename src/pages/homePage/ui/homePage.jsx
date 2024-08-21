import { Header } from '../../../widgets/header'
import { homePage } from '../../../text/ua-text.json'
import './homePage.css'
import ProductCard from '../../../widgets/productCard/ui/productCard'
import { productCard } from '../../../text/ua-text.json'
import { Footer } from '../../../widgets/footer'

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
            <a href="products"></a>
            <h3 className="products__title">{homePage.main.products.title}</h3>
            <div className="products__grid">
              {Object.values(productCard).map((card, index) => (
                <ProductCard
                  key={index}
                  title={card.title}
                  category={card.category}
                  type={card.type}
                  img={`/images/${card.img}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
