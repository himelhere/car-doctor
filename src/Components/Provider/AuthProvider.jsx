import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const currentEmail = currentUser?.email || user?.email;
            const userData = {email : currentEmail};
            setUser(currentUser);
            console.log('current user is:', currentUser);
            setLoading(false);

            // jwt related
            if(currentUser){
                axios.post('http://localhost:5000/jwt', userData, {withCredentials: true})
                .then(res => console.log(res.data))
            }
            else{
                axios.post('http://localhost:5000/logout', userData, {withCredentials: true} )
                .then(res => console.log(res.data))
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;