import React from 'react';
import CommitteeIcon from './CommitteeIcon';
import "./style/committees.css";

//Committee Images
import Pd from "../../images/members/committees/Pd.jpg";
import Academic from "../../images/members/committees/Academic.jpg";
import RecSports from "../../images/members/committees/RecSports.jpg";
import Marketing from "../../images/members/committees/Marketing.jpeg";
import Social from "../../images/members/committees/Social.jpg";
import Brohood from "../../images/members/committees/BroHood.jpg";
import wellness from "../../images/members/committees/wellness.jpeg";
import diversity from "../../images/members/committees/diversity.jpeg";

class Committees extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
        <div className='Committees'>
            <div className='Com-Header'>
                Committees
            </div>
            <div className='Com-blurb'>
              <p className='subheader-2'> There are many committiees within Theta Tau that organize and plan all internal and external events.
                    These committiees are what make Theta Tau run and a key aspect is creating a tight night community wihtin the organization.</p>
              <p className='subheader-2'> Check below to see all the committies and a what they do!</p>
            </div>
            <div className='com-icons'>
            {/*icons for each committee with Name with image in background / committee head / description */}
                <CommitteeIcon name="Professional Development" image={Pd} description= "Professionally develop out lovely brothers"/>
                <CommitteeIcon name="Academic" image={Academic} description= "Organize study tables and support brothers academically"/>
                <CommitteeIcon name="Rec Sports" image={RecSports} description= "Organize IM sports teams and pick up games"/>
                <CommitteeIcon name="Marketing" image={Marketing} description= "Professionally develop out lovely brothers"/>
                <CommitteeIcon name="Social" image={Social} description= "Professionally develop out lovely brothers"/>
                <CommitteeIcon name="Brotherhood" image={Brohood} description= "Professionally develop out lovely brothers"/>
                <CommitteeIcon name="Wellness" image={wellness} description= "Lookout for the mental/physical wellbeing of all brothers"/>
                <CommitteeIcon name="Diversity" image={diversity} description= "Expose/Educate the brotherhood on different perspectives"/>
            </div>
        </div>
    );
  }
}

export default Committees;
