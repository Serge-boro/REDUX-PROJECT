import { REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT } from './action'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              if (action.payload.toggle === 'inc') {
                return { ...item, amount: item.amount + 1 }
              }
              if (action.payload.toggle === 'dec') {
                return { ...item, amount: item.amount - 1 }
              }
            }
            return item
          })
          .filter((item) => item.amount !== 0),
      }
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (totalPrice, amountItem) => {
          const { price, amount } = amountItem
          totalPrice.amount += amount
          totalPrice.total += price * amount
          return totalPrice
        },
        { total: 0, amount: 0 }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    default:
      return state
  }
}

export default reducer
