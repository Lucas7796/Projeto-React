import React from 'react'

import Parse from 'parse'

import Login from '../components/login/Login'

import { BrowserRouter } from 'react-router-dom'

import Route from './Routes'


Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga");
Parse.serverURL = 'http://localhost:1337/parse';

var Users = Parse.Object.extend("User");
var query = new Parse.Query(Users);
// query.get("pZRrTPNI69")
// .then((user) => {
  // The object was retrieved successfully.
//   var ids = user.get("username");
//   var objectId = user.id;
//   console.log(ids)
//   console.log(objectId)


// async function f1(){
// query.notEqualTo("username", " zsdsdc ");
// const results = await query.find();
// alert("Successfully retrieved " + results.length + " scores.");
// console.log(results)
// }
// f1()


// Do something with the returned Parse.Object values
// for (let i = 0; i < results.length; i++) {
//   var object = results[i];
//   alert(object.id + ' - ' + object.get('playerName'));
// } 

export default props =>
        <BrowserRouter>
          <Route />
        </BrowserRouter>