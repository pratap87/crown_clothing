import React from "react";
import "./menu-item.scss";
import { withRouter ,useNavigate} from 'react-router'
const MenuItem = ({title,imageUrl,size,linkurl}) => {
    let navigate = useNavigate();
    console.log(imageUrl)
  return (
    <div 
  
    className={`${size} menu-item`} onClick={()=>{navigate(`${linkurl}`)}}  >
    <div className="background-image"
      style={{
        backgroundImage:`url(${imageUrl})`
    }}
    />
    
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
