import { createContext, useEffect, useState } from "react";
import auth from './Firebase.config'
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [dark,setDark] = useState(false);
    const [user,setUser] = useState();
    const [loading,setLodaing] = useState(true);

    const provider = new GoogleAuthProvider()


    const register = (email,password) => {
        setLodaing(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        setLodaing(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLodaing(true)
        return signOut(auth)
    }

    const updateUser = (name,image) => {
        setLodaing(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }

    const google = () => {
        setLodaing(true);
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth,currentUser=>{
            setLodaing(false)
            setUser(currentUser)
        });
        return ()=> unSubscrive()
    },[])

    const allData = {
        dark,
        setDark,
        register,
        updateUser,
        google,
        login,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;