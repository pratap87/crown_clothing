import React from 'react'
import CustomButton from '../button/button';
import './cart-dropdown.scss'
import { connect } from 'react-redux';
import CartItems from '../cart-items/cart-items';
import { useNavigate } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.action';



const CartDropdown = ({cartItems,dispatch}) => {
    let navigate = useNavigate();
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
              { 
            
              cartItems.length  ?
              cartItems.map(item=><CartItems  key={item.id} item={item}/>)
              :
              <span className='empty-message'>Your cart is empty</span>
              }
            </div>
            <CustomButton  onClick={()=>
                {
                    navigate(`/checkout`)
                    dispatch(toggleCartHidden())
                
                }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });
export default connect(mapStateToProps)(CartDropdown);
