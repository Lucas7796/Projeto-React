import './Login.css'
import React from 'react'

import imagem from "../../assets/bg.jpg"
import {Link} from 'react-router-dom'

export default props =>
    
<div className="app">
    <img src={imagem} className="backImg" alt="PC Table"/>
    <form className="rectangle" >
        <span className="logo">ORANGE</span>
        <label className="spanLogin" >Email</label>
        <input className="inputLogin" placeholder="seuemail@mail.com"></input>
        <label className="spanLogin" >Password</label>
        <input className="inputLogin" placeholder="Password" type="password"></input>
        <input type="checkbox" className="checkBoxLogin"></input>
        <label className="spanCheckBox">Mostrar a senha</label>
        <span className="problemas-para-acess">Problemas para acessar sua conta?</span>

        <Link to="/home" >
            {/* <input type="submit" className="btnAcessar" value="Acessar"/> */}
            <div className="btnAcessar"><span>Acessar</span></div>
        </Link>

        <hr className="hrLogin"/>
        <input type="submit" className="btnCadastrar" value="Cadastrar"/>
    </form>

</div>