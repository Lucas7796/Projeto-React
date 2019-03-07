import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';


export default props =>

<div className="rectangle2">
    <div className="orange2">ORANGE</div>

    <div className="links">
        <Link to="/home/food"><div className="link foods">Foods</div></Link>
        <Link to="/home/people"><div className="link people">People</div></Link>
        <Link to="/home/places"><div className="link places">Places</div></Link>
    </div>
</div>