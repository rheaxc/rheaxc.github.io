import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import '../style/signin.css';

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
            redirectTo: 'http://localhost:3000/signin'
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
                        <>
                            <p>Welcome, {name}!</p> 
                            <p>You are a member!</p>
                        </>
                    ) : (
                        <p>You are not a member.</p>
                    )}
                    <button onClick={handleSignOut}>Sign out</button>
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