import React from 'react'
import { connect } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux project</h3>
        <div className='nav-container'>
          <FaShoppingCart className='shopCart' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return { amount: state.amount }
}

export default connect(mapStateToProps)(Navbar)
