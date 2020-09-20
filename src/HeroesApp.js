import React, { useEffect, useReducer } from 'react'
import { AuthContex } from './auth/AuthContex';
import { authReducer } from './auth/authReducer';

import { AppRoutes } from './routes/AppRoutes';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

export const HeroesApp = () => {

  
      const [ user, dispatch ] = useReducer(authReducer, {}, init)

    useEffect(() => {
        
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])


    return (
        <AuthContex.Provider value={{ user, dispatch }}>
            <AppRoutes />
        </AuthContex.Provider>
    )
}
