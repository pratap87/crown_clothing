import React, { useState, useEffect } from "react";
import sections from "../../directory.data";
import { HomePage } from "../../pages/homepage/homepage.component";
import MenuItem from "../menu-item/menu-item";
import "./menu.scss";

const Menu = () => {
  const [data, setdata] = useState(sections);
  console.log(data);

  return <div className="menu">
      {data.map(item=>
    
      <MenuItem title={item.title} key={item.id} imageUrl={item.imageUrl} size={item.size} linkurl={item.linkUrl} />)}
  </div>;
};

export default Menu;
