import React, { useContext, useEffect, useState } from 'react'
import {auth} from "./Firebase"

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser,setCurrentuser]=useState()
    const [loading,setLoading]=useState(true)
    function signUp(email,password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function logIn(email,password) {
        return auth.signInWithEmailAndPassword(email,password)
    }
    useEffect(()=>{
            const unsubscribe= auth.onAuthStateChanged(user=>{
                setCurrentuser(user)
                setLoading(false)
               
            })
            return unsubscribe
    },[])
   
    const value ={
        currentUser,signUp,logIn
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

