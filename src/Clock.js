class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state={date:new Date(),
               isToggleOn:true}
    this.handleClick = this.handleClick.bind(this);
    
  }
  componentDidMount(){
    this.timerID=setInterval(()=>this.tick(),1000)
  }
  
  tick(){
    this.setState({date:new Date()});
  }
  handleClick()
  {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    
  }
  
  render(){
    return(
    <div>
      
        <button onClick={this.handleClick}>{this.state.isToggleOn ?"ON":"OFF"}</button>
        {this.state.isToggleOn && <div>
        <h3>Hello it is {this.state.date.toLocaleTimeString()}</h3>
      
      </div>}
       
      </div>
      );
  }
  
  
}

