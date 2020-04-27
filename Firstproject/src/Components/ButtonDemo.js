import React from 'react'
import ReactDOM from 'react-dom'

class ButtonDemo extends React.Component{
constructor()
{
    super()
    this.state={count:1}
    this.handleClick=this.handleClick.bind(this)
}

handleClick(){
    
    this.setState(state => ({
        count: state.count*2
      }));
      

    }
       
    


render(){
    return(
        <div>
        <h1 >{this.state.count} </h1>
        <button onClick={this.handleClick}>Change</button>
        </div>
    )
}


}
export default ButtonDemo
//ReactDOM.render(<ButtonDemo/>,document.getElementById('root'))