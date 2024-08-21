import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import { Outlet } from 'react-router-dom'

export const ProductLinePage = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="product-line-wrapper">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductLinePage
