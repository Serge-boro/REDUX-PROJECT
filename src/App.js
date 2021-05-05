import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

import cartItems from './cart-items'

const InitialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const store = createStore(
  reducer,
  InitialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
