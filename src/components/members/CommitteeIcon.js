import React, { useState } from "react";
import "./style/committeeicon.css";

const CommitteeIcon = ({name, image, description}) => {
    const [flipped, setFlipped] = useState(false);
    
    const handleClick = () => {
      setFlipped(!flipped);
    };
    
    return (
      <div className= "Com-item" onClick={handleClick}> 
        <div className={`com-container ${flipped ? 'flip' : ''}`}>
          <div className="com-img" style={{ backgroundImage: `url(${image})`}} >
            <p className="com-name"> {name} </p>
          </div>
        </div>
        <div className={`com-description ${flipped ? '' : 'flip'}`}>
            <p>
              {description}
            </p>
        </div>
      </div>
    );
  };
  
  export default CommitteeIcon;