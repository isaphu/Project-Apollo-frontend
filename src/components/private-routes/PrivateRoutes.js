import React from 'react';
import ConfigRoutes from '../../config/routes';
import { Redirect, Switch, Route, useHistory } from 'react-router-dom';
import { getToken } from '../../services/localStorageServices';
import Login from '../pages/PublicPages/Login'


function PrivateRoutes(props) {
    const role = props.role || 'user';

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoutes = ConfigRoutes[role].redirectRoutes;
    const history = useHistory();

    
        const isLoggedIn = getToken();
    // if(!getToken()) {
    //     history.push('/login')
    // }
    if (!isLoggedIn ) {
        return <Login />;
    }

    return (
        
    <Layout>
        <Switch>
            {allowedRoutes.map(route => (
                
                <Route

                path={route.url}
                key={route.url}
                exact
                component={route.component}

            >
                <route.component setRole={props.setRole}/>
            
            </Route>
            
            ))}
            <Redirect to={redirectRoutes} /> 
        </Switch>
    </Layout>

        
    );
};

export default PrivateRoutes;
