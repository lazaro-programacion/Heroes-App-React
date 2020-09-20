import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


export const PublicRoutes = ({
    isAuthentication,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthentication) ? (<Component {...props} />) : (<Redirect to='/' />)
            )}
        />


    )
}

PublicRoutes.propTypes = {
    isAuthentication: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}