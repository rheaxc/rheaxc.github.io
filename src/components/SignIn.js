import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import '../style/signin.css';

const SignIn = () => {
    const [user, setUser] = useState(null);
    const [isMember, setIsMember] = useState(false);

    useEffect (() => {
      console.log(user);
      const checkIfUserIsMember = async () => {
        if (user) {
          const { body } = await supabase.from('members').select().where({ email: user.email }).first();
          setIsMember(!!body);
        }
      };
      console.log(user);
      checkIfUserIsMember();
    }, [user]);

    const handleGoogleSignIn = async () => {
      const { user,  error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/signin'
        }
      });
      setUser(user);
    };

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
    };

    return (
        <div className="signin">
            <p> Hi </p> 
            {
            user ? (  
                <>
                    <p>Welcome, {user.email}!</p> 
                    {isMember ? (
                        <p>You are a member!</p>
                    ) : (
                        <p>You are not a member.</p>
                    )}
                    <button onClick={handleSignOut}>Sign out</button>
                </>
            ) : (
                <>
                    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                </>
            )}
        </div>
    );
    
};

export default SignIn;