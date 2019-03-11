import './style.css'
import React, { Component } from 'react'
import Line from './TitleLine'
import Card from './cards/Card'

import Parse from 'parse'
Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga");
Parse.serverURL = 'http://localhost:1337/parse';
const foods = Parse.Cloud.run('getAllFoods')

const initialState = {
    list: []
}

const imgProps = {
    img: []
}

export default class Foods extends Component {

    state = {...initialState}
   

    renderCard(){
        
        return  this.state.list.map(imagem =>{
            imgProps.img = imagem
            return(
                <Card {...imgProps}/>
            )
        })
    }

    componentWillMount(){
        foods.then((values) => {
            const links = values.map(value => value.get("link"))
            this.setState({list: links})
            imgProps.list = this.state.list
            }
        )
    }

render(){
    return (
        <div className="title">
            <span>LIST OF FOODS</span>
            <Line />
            {this.renderCard()}
            
        </div>
        )
    }
}
