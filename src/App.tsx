import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { Router } from './Router'
import { CoffeeContextProvider } from './context/CoffeeContext'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}
