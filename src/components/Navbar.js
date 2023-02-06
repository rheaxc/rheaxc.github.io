import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import logo from "../images/tht-logo.png";
import { supabase } from "../client";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [unique, setUnique] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchCurrentUser();
  }, []);

  useEffect (() => {
    const convertEmailtoUnique = async () => {
        if (user != null) {
            const { data, error } = await supabase.from('Emails')
            .select('*')
            .eq('email', user.email); 
            console.log(data)
            var uniquename = data[0].uniquename
            setUnique(uniquename)
        }
    };
    convertEmailtoUnique();
  }, [user]);

  useEffect (() => {
    const checkIfUserIsMember = async () => {
      console.log(unique)
      const { data: emailData , error: emailError } = await supabase.from('Brothers')
        .select('*')
        .eq('userid', unique);

      console.log(emailData)
      setName(emailData[0].firstname)
    };

    if (unique) {
      checkIfUserIsMember();
    }
  }, [unique]);

  // const mediaQuery = window.matchMedia('(max-width: 415px)')
  // // Check if the media query is true
  // if (mediaQuery.matches) {
  //   // Then trigger an alert
  //   return (

  //   <div className= "navigation">
      
        
  //         <div className = "logo">
  //           <div className = "image">
  //             <Link to= "/">
  //               <img src = {logo} alt = "tht"/>
  //             </Link>
  //           </div>
  //         </div>

  //         <div className = "umich-container">
  //           <p className = "umich"> University of Michigan </p>
  //         </div>
       
  //       <div className = "dropdown-container">
  //         <div class="dropdown">
  //           <button class="dropbtn">|||</button>
  //           <div class="dropdown-content">
  //             <li className = "navbar-item">
  //               <Link to= "/">
  //                 Home
  //               </Link>
  //             </li>
  //             <li className = "navbar-item">
  //               <Link to= "/members">
  //                 Meet our Brothers
  //               </Link>
  //             </li>
  //             <li className = "navbar-item">
  //               <Link to= "/rush">
  //                 Join the Family
  //               </Link>
  //             </li>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     );

  // }

  return (
    <div className= "navigation">
      <div className = "logo">
        <div className = "image">
          <Link to= "/">
            <img src = {logo} alt = "tht"/>
          </Link>
        </div>
        <p className = "umich"> University of Michigan </p>
      </div>
      <div className = "nav-container">
        <li className = "navbar-item">
          <Link to= "/">
            Home
          </Link>
        </li>
        <li className = "navbar-item">
          <Link to= "/members">
            Meet our Brothers
          </Link>
        </li>
        <li className = "navbar-item">
          <Link to= "/rush">
            Join the Family
          </Link>
        </li>
        <li className = "navbar-item">
          <Link to= "/signin">
            {
              user ? ( <p> Hi {name} </p>) : (<p> Sign In </p>)
            }
          </Link>
        </li>
      </div>
    </div>

    );
};
