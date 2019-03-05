import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Foods from './templates/Foods'
import People from './templates/People'
import Places from './templates/Places'

export default props => 
    <div>
    <Switch>
        <Route exact path='/home/' component={Foods} />
        <Route path='/home/foods' component={Foods} />
        <Route path='/home/people' component={People} />
        <Route path='/home/places' component={Places} />
        <Redirect from='*' to='/home/foods' />
    </Switch>
    </div>