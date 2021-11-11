import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState ('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);       
    }

    const signUpUsingEmailAndPassword = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            setUser(result.user);
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    const signInUsingEmailAndPassword = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser('');
        }).finally(()=>setIsLoading(false));
    }


    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser('');
            }
            setIsLoading(false);
          });
    },[auth]);

    return {
        isLoading,
        user,
        error,
        logOut,
        signInUsingGoogle,
        signUpUsingEmailAndPassword,
        signInUsingEmailAndPassword
    }
}

export default useFirebase;