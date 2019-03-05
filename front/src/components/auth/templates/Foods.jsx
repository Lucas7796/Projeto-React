import './style.css'
import React from 'react'
import Line from './TitleLine'

import Parse from 'parse'
Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga");
Parse.serverURL = 'http://localhost:1337/parse';
const amem = Parse.Cloud.run('getAllFoods')
// console.log(amem);

let foods = [];
amem.then(data => foods = data[1].id)
console.log(foods)
// .then((values) => {
// const objectId = values[1].id;
// const nome = values[1].get("name");
// console.log(objectId);
// console.log(nome);
// // values.map()
// }
// );

export default props =>

<div className="title">
    <span>LIST OF FOODS</span>
    <Line />
</div>