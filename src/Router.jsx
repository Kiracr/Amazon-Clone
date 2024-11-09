import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Cart from './Pages/Cart/Cart'
import Orders from './Pages/Orders/Orders'
import Landing from './Pages/Landing/Landing'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51QIvaCHP1iMf1npT68DlCGa1XRzQZiZJq96CDFn9UkyPbnWfoSY5cU3jzqId8yoOfWFXGqJDqOJHDWCL0VWytzxy00PCpzDCWE');

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/payment' element={
          <ProtectedRoute
          msg={"You Must Log in to pay"}
          redirect={"/payment"}>
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        </ProtectedRoute>
          } />
        <Route path='/orders' element={<ProtectedRoute
              msg={"You Must Log in to see your Orders"}
              redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>} />
        <Route path='/category/:categoryName' element={<Results />} />
        
        <Route path="/products/:productId" element={<ProductDetail />} />



      </Routes>
    </Router>
  )
}

export default Routing