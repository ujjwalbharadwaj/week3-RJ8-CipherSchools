import React, {Component} from 'react'
import { testAPI } from './TestApi'

class SumNumber extends Component{
    state={
        firstNumber:0,
        secondNumber:0,
        sum:0,
        sumString:"component has not updated"
    }

componentDidMount(){
    console.log("We are in Component")
    testAPI(5,6).then((sum)=>{
        this.setSum(sum);
    })
}

componentDidUpdate(){
    console.log("Component had updated")
    this.setState({...this.state,sumString:`The sum is: ${this.state.sum}`})
}


setSum=(sum)=>{
    if(typeof sum!=="undefined"){
         this.setState({...this.state, sum})

            } else{
                this.setState({...this.state,num:this.state.firstNumber+this.state.secondNumber})
            } 
        
        
        }
    render(){
        return(
            <div>
              <input type="number" onChange={(e)=>{this.setState({...this.state,firstNumber:parseInt(e.target.value),})}}
              value={this.state.firstNumber}
              />
              <input type="number" onChange={(e)=>{this.setState({...this.state,secondNumber:parseInt(e.target.value),})}}
              value={this.state.firstNumber}
              />
              
           
              <button>Add Number</button>
              <h3>The sum is:
                {this.state.sum}
              </h3>
            </div>
        )
    }


}
export default SumNumber;