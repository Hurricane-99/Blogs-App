import React from 'react';
import './App.css';
import Layouts from "./layout/layout";
import {Route, Redirect, Switch} from 'react-router-dom'
import {routes} from "./routes";

function App() {


    return (
        <Layouts>
            <Switch>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} component={route.component} exact={true}/>
                ))}
                <Redirect to={'/posts'}/>
            </Switch>
        </Layouts>
    );
}

export default App;
