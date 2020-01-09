import React from 'react'
import ReactDOM from 'react-dom'
export default class Apicall extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={character:{}}

    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/1')
                .then(response=>response.json())
                .then(data =>{this.setState(()=>({character:data}))})
    }
    render(){
        return(
            <div>
                <h1>{this.state.character.name}</h1>
            </div>
        )
    }
}
