import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from './AuthContext';

const SecureRoute = ({ component: Component, scopes, ...rest }) => {
    return (
        <AuthContext.Consumer>
            {auth => (
                <Route {...rest} render={props => {
                    // 1- redirigir al login si no esta logeado
                    if (!auth.isAuthenticated()) return auth.login();
                    // 2- usuario sin permiso
                    if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
                        return (
                            <h1>Acceso prohibido: Necesitas {scopes.join(",")}</h1>
                        );
                    }
                    // 3- Mostrar componente
                    return <Component auth={auth} {...props} />
                }}
                />)}
        </AuthContext.Consumer>
    )
}

SecureRoute.propTypes = {
    component: PropTypes.func.isRequired,
    scopes: PropTypes.array
}

SecureRoute.defaultProps = {
    scopes: []
}

export default SecureRoute;
