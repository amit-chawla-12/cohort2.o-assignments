import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Product/:productId' element={<ProductDetails/>}/>
    </Routes>
    </div>
  
  )
}

export default App
