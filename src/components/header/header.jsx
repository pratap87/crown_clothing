import React from 'react'
import './header.scss'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase-util'
import {ReactComponent as Logo} from '../../crown.svg'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown'
const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">Shop</Link>
                <Link className='option' to="/contact">Contact</Link>
                {
                    currentUser ?<div className='option' onClick={()=>auth.signOut()}>Signuot</div>:
                    <Link className='option' to='/signin'>Sign In</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden?null:   <CartDropdown/>

            }
         
        </div>
    )
}

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
currentUser,
hidden
})

export default connect(mapStateToProps)(Header);
