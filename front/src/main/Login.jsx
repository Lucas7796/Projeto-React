import './Login.css'
import React from 'react'

import imagem from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import Parse from 'parse'

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
async function f1(){
query.notEqualTo("username", " zsdsdc ");
const results = await query.find();
alert("Successfully retrieved " + results.length + " scores.");
console.log(results)
}
f1()


// Do something with the returned Parse.Object values
// for (let i = 0; i < results.length; i++) {
//   var object = results[i];
//   alert(object.id + ' - ' + object.get('playerName'));
// } 

export default props =>
    
        <div className="app">
            <img src={imagem} className="backImg"/>
            <form className="rectangle">
                <span className="logo">ORANGE</span>
                <label className="spanLogin" >Email</label>
                <input className="inputLogin" placeholder="seuemail@mail.com"></input>
                <label className="spanLogin" >Password</label>
                <input className="inputLogin" placeholder="Password" type="password"></input>
                <input type="checkbox" className="checkBoxLogin"></input>
                <label className="spanCheckBox">Mostrar a senha</label>
                <span className="problemas-para-acess">Problemas para acessar sua conta?</span>
                <input type="submit" className="btnAcessar" value="Acessar"/>
                <hr className="hrLogin"/>
                <input type="submit" className="btnCadastrar" value="Acessar"/>
            </form>

        </div>
