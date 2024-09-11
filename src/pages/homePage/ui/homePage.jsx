import { Header } from '../../../widgets/header'
import { homePage } from '../../../text/ua-text.json'
import './homePage.css'
import { productsLine } from '../../../text/ua-text.json'
import { Footer } from '../../../widgets/footer'
import ProductLineCard from '../../../widgets/productLineCard/ui/productLineCard'
import { useEffect } from 'react'

export const HomePage = () => {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1) // Get the section ID from the hash
        const element = document.getElementById(sectionId) // Find the element by ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }) // Scroll smoothly to the section
        }
      }
    }

    handleHashChange() // Call initially on mount

    window.addEventListener('hashchange', handleHashChange) // Add listener for hash changes
    return () => window.removeEventListener('hashchange', handleHashChange) // Cleanup listener on unmount
  }, [])
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-background-wrapper">
            <div className="container">
              <div className="hero-text-wrapper">
                <h1 className="hero__title">{homePage.main.hero.title}</h1>
                {/* <p className="hero__description">
                  {homePage.main.hero.description}
                </p> */}
              </div>
              <a href="#products" className="hero__scroll">
                <div className="hero-scroll__left"></div>
                <div className="hero-scroll__right"></div>
              </a>
            </div>
          </div>
        </section>
        <section className="description-section">
          <div className="container">
            <hr />
            <p className="description__text">
              {homePage.main.hero.description}
            </p>
            <hr />
          </div>
        </section>
        <section id="products" className="products">
          <div className="container">
            <h3 className="products__title">{homePage.main.products.title}</h3>
            <div className="products__grid">
              {Object.entries(productsLine).map(
                ([productId, product], index) => {
                  return (
                    <ProductLineCard
                      key={index}
                      title={product.title}
                      category={product.category}
                      type={product.type}
                      img={`/hubislab/images/productLines/cardImg/${product.cardImg}`}
                      productId={productId}
                    />
                  )
                }
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
