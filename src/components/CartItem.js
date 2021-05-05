import React from 'react'
import { REMOVE, TOGGLE_AMOUNT } from '../action'
import { connect } from 'react-redux'
import { FaPlus, FaMinus } from 'react-icons/fa'
const CartItem = ({ img, title, price, amount, remove, toggle }) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => toggle('inc')}>
          <FaPlus />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => toggle('dec')}>
          <FaMinus />
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
