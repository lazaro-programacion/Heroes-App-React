import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


export const PrivateRoutes = ({
    isAuthentication,
    component: Component,
    ...rest
}) => {
    console.log(rest.location.pathname)
    // para recordar la pagina
    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthentication) ? (<Component {...props} />) : (<Redirect to='/login' />)
            )}
        />


    )
}

PrivateRoutes.propTypes = {
    isAuthentication: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}