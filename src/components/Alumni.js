import React from 'react'
import Icon from './Icon'
import "../style/alumni.css";

function Alumni() {
  return (
<div className="alumni-container"> 
    
    <h3> Theta Tau Alumni </h3>

    <div className="alumni-item">
        <Icon
            image = "/alumni/Hari.JPG"
            name = "Hariharan Chidambaram"
            role = "SWE @ InfinStor"
            companyLink = "https://www.infinstor.com/"
            link = "https://www.linkedin.com/in/hariharan-chidambaram/"
        />

        <Icon
            image = "/alumni/Hari.JPG"
            name = "Hariharan Chidambaram"
            role = "SWE @ InfinStor"
            companyLink = "https://www.infinstor.com/"
            link = "https://www.linkedin.com/in/hariharan-chidambaram/"
        />
        
    </div>
</div>
  );
}

export default Alumni;
