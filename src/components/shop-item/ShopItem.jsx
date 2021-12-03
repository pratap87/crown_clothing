import React from "react";
import "./shopitem.scss";
const ShopItem = ({ item }) => {
  console.log(item);
  return (
    <div className="shopitem">
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="image"
      />
      <div className="shop-footer">
<span className="name">{item.name}</span>
<span className="price">${item.price}</span>
      </div>
      
    </div>
  );
};

export default ShopItem;
