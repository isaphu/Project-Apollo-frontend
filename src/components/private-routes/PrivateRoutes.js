import React from 'react';
import ConfigRoutes from '../../config/routes';
import { Redirect, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { getToken } from '../../services/localStorageServices';
import Login from '../pages/PublicPages/Login';
import Layout from '../pages/layout/Layout';

function PrivateRoutes(props) {
    const role = props.role || 'user';

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoutes = ConfigRoutes[role].redirectRoutes;
    const history = useHistory();
    const location = useLocation();

    
        const isLoggedIn = getToken();
    // if(!getToken()) {
    //     history.push('/login')
    // }
    if (!isLoggedIn ) {
        return <Login />;
    }
    console.log(location)
    if (isLoggedIn && location.pathname === '/login') {
        history.push('/addingProductUom')
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
