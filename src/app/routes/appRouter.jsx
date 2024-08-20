import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/homePage/ui/homePage'
import ProductPage from '../../pages/productPage/ui/productPage'
import Layout from '../layout/layout'

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          {/* <Route
          path="/product"
          element={<ProductPage {...productPageProps} />}
        /> */}
        </Route>
      </Routes>
    </>
  )
}
