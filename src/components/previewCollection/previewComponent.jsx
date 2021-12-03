import React from "react";
import ShopItem from "../shop-item/ShopItem";
import "./previewComponent.scss";
const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
          {items.filter((item,idx)=>idx<4)
          .map(item=>(<ShopItem item={item}/>))

      }</div>
    </div>
  );
};

export default PreviewCollection;
