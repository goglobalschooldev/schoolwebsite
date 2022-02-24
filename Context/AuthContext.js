import React, { createContext, useEffect, useReducer, useState } from 'react';
import firebase from '../Auth/firebase'
const firebaseReducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const initialState = {
    user: null
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((userCred) => {
            if (userCred) {
                userCred.getIdToken().then((token) => {
                    // setToken(token);
                    dispatch({
                        type: 'LOGGED_IN_USER',
                        payload: { email: userCred.email, token }
                    })
                });
            } else {
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: null
                })
            }
        });


        return () => unsubscribe();
    }, [])
    const value = { state, dispatch }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };