import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import App from './components/App'


let router =
    <Router >
        <Route path="/" component={App}>
        </Route>
    </Router>;

export default router

