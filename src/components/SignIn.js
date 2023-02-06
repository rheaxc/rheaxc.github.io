import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import '../style/signin.css';

const SignIn = () => {
    const [isMember, setIsMember] = useState(false);
    const [user, setUser] = useState(null);

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
                const { data, error } = await supabase.from('Members')
                .select('*')
                .eq('id', user.id);
                console.log(error);
                console.log(user.id);
                console.log(data);
                if(data.length > 0){
                    setIsMember(true);
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

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
    };

    return (
        <div className="signin">
            {
            user ? (  
                <div className='logOut'>
                    <p>Welcome, {user.email}!</p> 
                    {isMember ? (
                        <p>You are a member!</p>
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