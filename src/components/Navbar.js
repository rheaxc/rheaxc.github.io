import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import logo from "../images/tht-logo.png";
import { supabase } from "../client";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchCurrentUser();
  }, []);

  useEffect (() => {
    const checkIfUserIsMember = async () => {

        if (user != null) {
            const { data, error } = await supabase.from('Members')
            .select('*')
            .eq('id', user.id); 
            setName(data[0].firstName);
        }
    };
  checkIfUserIsMember();
}, [user]);

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
}
