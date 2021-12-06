import React from "react";
import "./shopitem.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
const ShopItem = ({ item,addItem }) => {
 
  return (
    <div className="shopitem">
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="image"
      > <button className="btn" onClick={()=>addItem(item)}>Shop Now</button>
          </div>
     
      <div className="shop-footer">
<span className="name">{item.name}</span>
<span className="price">${item.price}</span>
      </div>
      
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
  addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ShopItem);
