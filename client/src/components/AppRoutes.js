import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useFacelessState } from './../context';
 
// renders the components according to the routes
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useFacelessState();
    
    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !Boolean(userDetails.token) ? (
                    <Redirect
                        to={{ pathname: "/home" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}
 
export default AppRoutes;
