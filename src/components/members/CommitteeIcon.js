import React from "react";
import "./style/committeeicon.css";

const CommitteeIcon = ({name, image, description}) => (
    
    <div className= "Com-item"> 
        <div className="com-img" style={{ backgroundImage: `url(${image})`}} >
            <p className="com-name"> {name} </p>
        </div>
        <div>
            <p className="com-description">
                {description}
            </p>
        </div>
    </div>
  );


  export default CommitteeIcon;