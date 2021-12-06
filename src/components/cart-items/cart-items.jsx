import React from 'react'
import   './cart-item.scss'
const CartItems = ({item}) => {
    console.log(item)
    return (
        <div className='cart-item'>
            <img src={item.imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='price'>
                    
                   {item.quantity}* ${item.price}</span>
            </div>
        </div>
    )
}

export default CartItems
