import './Home.css'
import React from 'react'
// import Browse from '../../main/Routes'

import Header from './templates/Header'
import Foods from './templates/Foods'
import Route from './Routes'


export default props =>
    <div>
        {/* <Browse> */}
        <Header />

        <div>
            <Route />
        </div>
        
        {/* </Browse> */}
    </div>