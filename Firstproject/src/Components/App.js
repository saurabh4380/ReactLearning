import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            num: Math.floor(1000 + Math.random() * 9000),
            tempNo: 0,
            rep: 0,
            numArray: [],
        }
        this.handleLoginButton = this.handleLoginButton.bind(this)
        this.getNumber = this.getNumber.bind(this)
        this.compareResults = this.compareResults.bind(this);
      //  this.finalDecision = this.finalDecision.bind(this);
    }
    handleLoginButton() {
        this.setState((state) => ({ isLoggedIn: !state.isLoggedIn }))

    }

    compareResults() {
        let OriginalNo = this.state.num;
        let EnteredNo = this.state.tempNo;
        let ogArray = []
        let EtArray = []
        var resultArray = []
        while (OriginalNo != 0 && EnteredNo != 0) {
            let digit1 = OriginalNo % 10;
            let digit2 = EnteredNo % 10;
            ogArray.push(digit1)
            EtArray.push(digit2)
            OriginalNo = Math.floor(OriginalNo / 10)
            EnteredNo = Math.floor(EnteredNo / 10)
           
        }
        ogArray=ogArray.reverse();
        EtArray=EtArray.reverse();
        
    
        for (let index = 0; index < 4; index++) {
            
            if (ogArray[index] == EtArray[index]) {
                resultArray.push(ogArray[index])
            }
            else if (ogArray[ogArray.indexOf(ogArray[index])] > -1) {
               // for (let i = index + 1; i <= 4; i++) {
                   // if (ogArray[index] = EtArray[i]) {
                        resultArray.push('/')
                    }
                    else{
                        resultArray.push('*')
                    }
                }
                console.log(resultArray)


    
            
                

        


        return resultArray


    }




    getNumber() {
        let numDom = document.getElementById("num1").value;
        console.log(`Number is ${this.state.num}`)

        if (numDom == this.state.num) {
            console.log('Match found')
        }
        else if (this.state.rep < 4) {
            let numDom = document.getElementById("num1").value;
            console.log(this.state.rep)
            this.setState((state) => ({
                tempNo: numDom,
                rep: state.rep + 1,
                numArray: state.numArray.concat(numDom)

            }))




        }

    }
    render() {

        return (

            <div>
                <button onClick={this.handleLoginButton}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
                {this.state.isLoggedIn ? <p> Logged In Successfully</p> : <p>Please Login to continue</p>}
                {this.state.rep == 4 && <p>Generated number was {this.state.num}</p>}
                <input id="num1" placeholder="Enter number" ></input>
                <button onClick={this.getNumber}>Start</button>


                <ul>

                    {this.state.numArray.map((no) => (<li key={no}>{no}</li>))}

                </ul>
                <h5>{this.compareResults()}</h5>

            </div>

        )
    }

}
export default App;