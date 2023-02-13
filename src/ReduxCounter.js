import React from 'react'
import {connect,useSelector} from "rect-redux"
import {increment,decrement,reset} from "../actions/CounterActions"


const ReduxCounter =({count})=>({increment:inc,decrement:dec, reset:res,})=>{

        //const count =useSelector((state)=>state.count)
        
        return(
            <div>
                <h2>the count is:{count}</h2>
               
            </div>
        )

            }






export default ReduxCounter;









// const ReduxCounter =({count})=>({

// count,
// increment:inc,
// decrement:dec,
// reset:res,

// })=>{
//     return(
//         <div>
//             <h2>the count is:{count}</h2>
//            {/*  <button onClick={(e)=>inc()}>Increase</button>
//             <button onClick={(e)=>dec()}>Decrease</button>
//             <button onClick={(e)=>res()}>React</button> */}
//         </div>
//     )
// }

// // const mapStateToProps=(state)=>({count:state.count})
// // const mapDispatchToProps=(dispatch)=>({
// //     increment:()=>dispatch(increment()),
//     decrement:()=> dispatch(decrement()),
//     reset:()=> dispatch(reset()),

// })




//export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)

//connect is a Hof which return a Hoc