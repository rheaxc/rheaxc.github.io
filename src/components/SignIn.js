import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import '../style/signin.css';
import Dashboard from './signin/Dashboard';

const SignIn = () => {
    const [isMember, setIsMember] = useState(false);
    const [user, setUser] = useState(null);
    const [unique, setUnique] = useState(null);
    const [name, setName] = useState('');

 
    useEffect(() => {
        const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
            if(event === 'SIGNED_IN'){
                setUser(session.user);
            }
          });
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

          if(emailData.length > 0){
            setIsMember(true);
            }

          setName(emailData[0].firstname + " " + emailData[0].lastname);
        };
    
        if (unique) {
          checkIfUserIsMember();
        }
      }, [unique]);


    const handleGoogleSignIn = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/signin',
        }
      });
    };

    async function handleSignOut() {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            setUser(null);
            setIsMember(false);
        }
    }
      
    return (
        <div className="signin">
            {
            user ? (  
                <div className='logOut'>
                    {isMember ? (
                        <div className='member'>
                            <h1>Welcome, {name}!</h1> 
                            <h2>You are a member!</h2>
                            <Dashboard/>
                        </div>
                    ) : (
                        <div>
                            <p>You are not a member.</p>
                        </div>
                    )}
                    <button className= 'signButton' onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div className= "LogIn">
                    <h1 className='LogIn-Title'>
                        Brother Login
                    </h1>
                    <button className= 'signButton' onClick={handleGoogleSignIn}>Sign In</button>
                </div>
            )}
        </div>
    );
    
};

export default SignIn;