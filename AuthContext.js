import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { app } from "./firebase.config";

export const AuthProvider = createContext()
const auth = getAuth(app)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = profile => {
        return updateProfile(auth.currentUser, profile)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
            setUser(loggedInUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const allValue = { createUser, login, user, updateUser }
    return (
        <AuthProvider.Provider value={allValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;