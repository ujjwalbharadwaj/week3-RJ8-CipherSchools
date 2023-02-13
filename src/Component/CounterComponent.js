
import React, {useReducer} from "react";
import ErrorBoundary from "./ErrorBoundary";


const countReducer=(state,action)=>{
    switch(action.type){
        case "increment":
            if(state.count + action.payload >= 3){
                throw new Error("Count cannot to be greater than 3")
            }
            return{count:state.count+action.payload};
        case "decrement":
            return{count:state.count-action.payload};
        default:
            return state;
        
    }
}

const CounterComponent=()=>{
    const [state, dispatch]=useReducer(countReducer,{count:0})
    return(
        <ErrorBoundary>
       <div>
        <h1>The count is{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment", payload:2})}>Increse</button>
        <button onClick={()=>dispatch({type:"decrement",payload:2})}>decrese</button>
       
       </div>
</ErrorBoundary>
    )


}

export default CounterComponent


//userReducer is function that takes 2 argument
// 1 A router funtion
// 2 an initial value of state

//retuen an array of 2 value
// the current state
// adispatch function

//A reducer control how the state will change
// An action is an object 
//type: a string that define what action is begine performed
//paylod : an object that contain the data will be used to update the state(optional)
//const[namr,setName]=useState("")
//{type:"updateName", paylod:"rahul"}











