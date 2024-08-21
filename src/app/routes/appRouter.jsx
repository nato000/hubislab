import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/homePage/ui/homePage'
import Layout from '../layout/layout'
import { ProductLinePage } from '../../pages/productLinePage'
import { ProductLineDetails } from '../../widgets/productLineDetails'

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductLinePage />}>
            {/* {Object.entries(products).map(([productId]) => (
              <Route
                key={productId}
                path={productId} // Make sure this matches the key in the product object
                element={<ProductDetails />}
              />
            ))} */}
            <Route path=":productId" element={<ProductLineDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
