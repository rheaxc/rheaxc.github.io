import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useSession , useSessionContext} from '@supabase/auth-helpers-react';
import '../style/signin.css';
import Dashboard from './Dashboard';

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
                            <Dashboard user={user}/>
                        </div>
                    )}
                    <button className= 'signOutButton' onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <>
                    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                </>
            )}
        </div>
    );
    
};

export default SignIn;