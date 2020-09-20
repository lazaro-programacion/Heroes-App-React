import React, { useContext } from 'react'
import { AuthContex } from '../../auth/AuthContex'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContex)

    const handelLogin = () => {
        //console.log('Logeando')
        // Nos lleva a la ruta directamente
        // history.replace('/')

        // con el remplace no puede volver a lapantalla anterior
        //  history.replace('/')
        const lastPage = localStorage.getItem('lastPath') || '/'
        dispatch({
            type: types.login,
            payload: {
                name: 'Lazaro'
            }
        })

        history.replace(lastPage)
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-outline-warning" onClick={handelLogin}> Login </button>
        </div>
    )
}
