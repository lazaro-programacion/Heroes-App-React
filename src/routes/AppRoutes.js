import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContex } from '../auth/AuthContex';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
    const { user } = useContext(AuthContex)
    const { logged } = user
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAuthentication={logged} exact path='/login' component={LoginScreen} />
                    <PrivateRoutes isAuthentication={logged} path='/' component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
