import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthenthication from '../firebase/firebase.init';


initializeAuthenthication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     setUser(result.user);
        //     setError('');
        //     // ...
        // }).catch((error) => {
        //     setError(error.message);
        //     // ...
        // });
    }
    const googleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    return {
        user,
        googleSignIn,
        googleSignOut,
        error,
        setError,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;