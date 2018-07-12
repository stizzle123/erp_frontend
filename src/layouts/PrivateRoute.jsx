import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isAuthenticated , ...rest}) => {
    return <Route
        {...rest}
        render={
            props => {
                return isAuthenticated ?
                    (
                        <Component {...props} />
                    )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: props.location}
                            }}
                        />
                    )
            }
        }
    />
};

const mapStateToProps = state => (
    {
        // isAuthenticated  value is get from here
        isAuthenticated : state.auth.isAuthenticated
    }
);

export default withRouter(connect(
    mapStateToProps, null, null, {pure: false}
)(PrivateRoute));