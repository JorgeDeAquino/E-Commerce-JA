import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'
import { useState } from 'react'

function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddCart = (product, quantity) => {

    setCartItems((prevItems) => {

      const itemExists = prevItems.find((item) => item.id === product.id)

      if (itemExists) {
        
      } else {
        return [...prevItems, {...product, quantity}]
      }

    })

  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<Catalog onAddToCart={handleAddCart} />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/thank-you' element={<ThankYouPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App