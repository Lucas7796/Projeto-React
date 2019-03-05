import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Home from '../components/auth/Home'
import Login from '../components/login/Login'

export default props => 
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>