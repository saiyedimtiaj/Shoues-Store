import { createContext, useState } from "react";
import auth from './Firebase.config'
import {  createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [dark,setDark] = useState(false)


    const register = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const allData = {
        dark,
        setDark
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;