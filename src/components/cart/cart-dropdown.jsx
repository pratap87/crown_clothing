import React from 'react'
import CustomButton from '../button/button';
import './cart-dropdown.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CustomButton>Go To Checkout</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown;
