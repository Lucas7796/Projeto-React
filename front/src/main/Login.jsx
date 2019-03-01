import './Login.css'
import React from 'react'

import imagem from "../assets/bg.jpg";
import logo from "../assets/logo.png"


export default props =>
    
        <div className="app">
            <h1>Hello!</h1>
            <img src={imagem} className="backImg"/>
            <form className="rectangle">
                <span className="logo">ORANGE</span>
                <span className="spanLogin">E-mail</span>
                <input className="inputLogin"></input>
                <span className="spanLogin">Senha</span>
                <input className="inputLogin"></input>
            </form>

        </div>
