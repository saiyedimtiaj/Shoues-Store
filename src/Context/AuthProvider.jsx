import { createContext, useState } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [dark,setDark] = useState(true)
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