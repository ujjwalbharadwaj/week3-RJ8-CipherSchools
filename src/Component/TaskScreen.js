import React, {useState, useEffect} from 'react'
import{getAllTasks, tasks} from './TestApi'
const TaskScreen = ()=>{

    const [count,setCount]=useState(0);

   const  [allTasks, setAllTasks]=useState([]);
useEffect(()=>{
    console.log("Task Screen");
    getAllTasks().then((foundTasks)=>setAllTasks(foundTasks));
},[]);
// useState(()=>{
//     console.log("Task updated")
//     setCount(5)
// },[]);

// useEffect(()=>{
//     console.log("TaskScreen Updated")
//     setCount(5)
// })


    return allTasks.map((task,index)=>(

             <div key={index} onClick={(e)=>setCount(count +1)}>
                <h1>{task.taskNumber}{task.taskName}
                </h1>

                <p>{task.taskDescription}</p>

             </div>



    )

    )
}

export default TaskScreen



//useEffect 
//it take two argument
//1 is function that will be called after the component is rendered 
//2 is array of values that will be watch gor change optional
//3 it will be called after the componet is rendered
//3.aempty array passed:useEffect will run only on initial render 
//3.b no araay pass: useeffect will run only initial render and every estate update
//3.c  Array of values passed : useEffect will run only on initial render and every time
//when the value of any variabel in the array change


//No ARRAY

// const TaskScreen = ()=>{
//     // const  [allTasks, setTacks]=useState([]);
//  useState(()=>{
//      console.log("Task Screen")
//  });
//      return TaskScreen.map((task,index)=>(
 
//               <div key={index}>
//                  <h1>{task.taskNumber}{task.taskName}
//                  </h1>
 
//                  <p>{task.taskDescription}</p>
 
//               </div>
 
 
 
//      )
 
//      )
//  }


//EMPTY ARRAY

// const TaskScreen = ()=>{

//     const [count,setCount]=useState(0);

//    // const  [allTasks, setTacks]=useState([]);
// useState(()=>{
//     console.log("Task Screen")
// },[]);
// useState(()=>{
//     console.log("Task updated")
// });

//     return TaskScreen.map((task,index)=>(

//              <div key={index} onClick={(e)=>setCount(count +1)}>
//                 <h1>{task.taskNumber}{task.taskName}
//                 </h1>

//                 <p>{task.taskDescription}</p>

//              </div>



//     )

//     )
// }









