import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import HeaderComponent from '../components/HeaderComponent';
import LandingPage from '../containers/LandingPage';
import TopHitsComponent from '../components/TopHitsComponent'

const routes = (
    <Router history={hashHistory}>
    <Route Path='/' component={Main}>
    <IndexRoute component={LandingPage} />
    <Route Path='LandingPage' component={LandingPage} />
    </Route>
    </Router>
)

export default routes;
