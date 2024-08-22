import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/homePage/ui/homePage'
import Layout from '../layout/layout'
import { ProductLinePage } from '../../pages/productLinePage'
import { ProductLineDetails } from '../../widgets/productLineDetails'

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/hubislab" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductLinePage />}>
            <Route path=":productId" element={<ProductLineDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
