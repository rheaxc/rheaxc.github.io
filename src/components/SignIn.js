import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import '../style/signin.css';
import Dashboard from './signin/Dashboard';

const SignIn = () => {
    const [isMember, setIsMember] = useState(false);
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');

 
    useEffect(() => {
        const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
            if(event === 'SIGNED_IN'){
                setUser(session.user);
            }
          });
      }, []);

    useEffect (() => {
        const checkIfUserIsMember = async () => {

            if (user != null) {
                console.log(user.email)
                const { data, error } = await supabase.from('Brothers')
                .select('*')
                .eq('email', user.email);
                console.log(data);
                
                if(data.length > 0){
                    setIsMember(true);
                    setName("Brother" + " " + data[0].lastname);
                }
            }
        };
      checkIfUserIsMember();
    }, [user]);


    const handleGoogleSignIn = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/signin',
            scopes: 'https://www.googleapis.com/auth/calendar'
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

    async function getEventsFromCalendar() {
        await fetch()
    }

    return (
        <div className="signin">
            {
            user ? (  
                <div className='logOut'>
                    {isMember ? (
                        <div className='member'>
                            <p>Welcome, {name}!</p> 
                            <p>You are a member!</p>
                            <Dashboard user={user}/>
                        </div>
                    ) : (
                        <div>
                            <p>You are not a member.</p>
                        </div>
                    )}
                    <button className= 'signOutButton' onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div className= "LogIn">
                    <h1 className='LogIn-Title'>
                        Brother Login
                    </h1>
                    <button onClick={handleGoogleSignIn}>Sign In</button>
                </div>
            )}
        </div>
    );
    
};

export default SignIn;