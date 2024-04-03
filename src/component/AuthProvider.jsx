import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import auth from '../Config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    
    const Registerd =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{``
        return signInWithEmailAndPassword(auth,email,password)
    }
    const data={user,Registerd ,signIn}
    return (
        <AuthContext.Provider value={data}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}
