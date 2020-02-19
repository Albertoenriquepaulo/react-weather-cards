import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from "../component/pages/signup";
import Login from "../component/pages/login";
import Admin from "../component/pages/admin";
import Home from "../component/pages/home";

import UserConfig from '../component/pages/user-config';
import UserDesktop from '../component/pages/user-desktop';

const MyRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user-config" component={UserConfig} />
            <Route exact path="/user-desktop" component={UserDesktop} />
        </Switch>
    </Router>
);

export default MyRouter;