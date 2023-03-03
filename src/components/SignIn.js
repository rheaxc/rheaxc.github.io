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