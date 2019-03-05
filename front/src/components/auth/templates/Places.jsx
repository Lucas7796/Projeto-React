import './style.css'
import React from 'react'
import Line from './TitleLine'

import Parse from 'parse'
Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga");
Parse.serverURL = 'http://localhost:1337/parse';
const amem = Parse.Cloud.run('getAllPlaces')

//shows in the console the list of links of places
//could not dispose the images in the screen in time
amem.then((values) => {
const links = values.map(value => value.get("link"))
console.table(links)}
);

export default props =>

<div className="title">
    <span>LIST OF PLACES</span>
    <Line />
</div>