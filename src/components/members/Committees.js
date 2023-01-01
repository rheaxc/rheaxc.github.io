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
import philanthropy from "../../images/members/committees/philanthropy.jpg";

class Committees extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
        <div className='Committees'>
            <div className='red Com-Header'>
                Committees
            </div>
            <div className='red Com-blurb'>
              <p className='subheader-2'> There are many committiees within Theta Tau that organize and plan all internal and external events.
                    These committiees are what make Theta Tau run and a key aspect is creating a tight night community wihtin the organization.</p>
              <p className='subheader-2'> Check below to see all the committies and a what they do!</p>
            </div>
            <div className='com-icons'>
            {/*icons for each committee with Name with image in background / committee head / description */}
                <CommitteeIcon name="Professional Development" image={Pd} description= "Help brothers with recuiritng, buiilding a network, organizing Winter Career Fair, class scheduling, and serve as a reasource for brothers with any professional endeavor."/>
                <CommitteeIcon name="Academic" image={Academic} description= "Organize and host study tables throughout the semester. Offer academic resources to brothers, and proactively put brothers with similar classes/interests/majors in touch to encourage collaboration"/>
                <CommitteeIcon name="Rec Sports" image={RecSports} description= "Plan, host, and set up athletic events for the brothers of the chapter to participate in, including internal events as well as external events (IM Volleyball, Dodgeball, Wallyball)."/>
                <CommitteeIcon name="Marketing" image={Marketing} description= "Keep social media accounts (facebook, Instagram) and the Website up to date with new events and rush informaiton"/>
                <CommitteeIcon name="Social" image={Social} description= "Organize and run our biggest events like Semi-formal and Retreat."/>
                <CommitteeIcon name="Brotherhood" image={Brohood} description= "Plan and run events for both the brothers of Theta Tau and for the entire chapter. Focus on internal bonding of the fraternity and increased intimacy and trust within the chapter."/>
                <CommitteeIcon name="Wellness" image={wellness} description= "Provide information and resources to support the mental and physical well-being of the brothers/pledges in the chapter (Chapter meditation / calming vids). Plan and run events like group yoga throughout the semester"/>
                <CommitteeIcon name="Diversity" image={diversity} description= "Expand chapter diversity exposure by planning and hosting events throughout the year such as SHPE-NSBE-ThT Game Night, Diversity Day at DIA, and more. Collaborate with rush committee to plan a diversity rush event centered on engaging rushees in discussions about identity, diversity, and inequality that they’ve experienced on campus."/>
                <CommitteeIcon name="Philanthropy" image={philanthropy} description= "Brainstorm new community service initiatives for the chapter to participate in, collect chapter feedback on areas they want to give back to Plan and run chapter-wide volunteering events such as DAPCEP Shadow Day, Out of the Darkness Walk, philanthropy rush event, and more!"/>
            </div>
        </div>
    );
  }
}

export default Committees;
