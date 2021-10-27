import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <h2>Please login</h2>
            <Button onClick={handleGoogleSignIn}>signin with Google</Button>
        </div>
    );
};

export default Login;