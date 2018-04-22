import React from 'react';
import { BrowserRouter, NavLink, Route, Link, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';

const AppRouters = () => (
    <BrowserRouter>
        <div>
        <Switch>
            <Route path="/" component={HomePage}></Route>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouters;