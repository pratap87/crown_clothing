import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import { selectCartItems ,selectCostTotal} from '../../redux/cart/cart.selector'
import './checkout.scss'
const Checkout = ({cartItems,total}) => {
    console.log(cartItems)
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {  
                cartItems.map(cartItem=>
                    <CheckoutItem  cartItem={cartItem}  key={cartItem.id}/>
                    )
            }

            <div className='total'>
                <span>Total :${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCostTotal
})

export default connect(mapStateToProps)(Checkout);
 