import React  from "react";
 
import MenuItem from "../menu-item/menu-item";
import "./menu.scss";
import { connect } from "react-redux";

const Menu = ({sections}) => {
  
 

  return <div className="menu">
      {sections.map(item=>
    
      <MenuItem title={item.title} key={item.id} imageUrl={item.imageUrl} size={item.size} linkurl={item.linkUrl} />)}
  </div>;
};

const mapStateToProps=({directory:{sections}})=>({
sections
})
export default connect(mapStateToProps)( Menu);
