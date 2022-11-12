import React from "react";
import "../style/icons.css";

const Icon = ({ image, name, role, companyLink, link }) => (
    
    <div className= "icon-item"> 
        
        <a href={link} target="_blank" rel="noopener noreferrer">
        <p> {name} </p>
        <img
            style={{ width: 500, height: 500 }}
            src={image}
            alt={role}
        />
        </a>
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
        <p> {role} </p>
        </a>
    </div>
    
    
  );


  export default Icon;