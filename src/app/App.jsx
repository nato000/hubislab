import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/appRouter'

import './styles/main.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
export default App
