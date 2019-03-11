import './Card.css'
import React from 'react'



export default props =>

<div className="image" style= {{ backgroundImage: `url(${props.img})` }}>
    <span className="nome"></span>
</div>