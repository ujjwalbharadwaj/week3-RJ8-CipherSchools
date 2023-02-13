import React,{lazy, Suspense} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Component/Header";
import Photos from "./Component/Photos";
//import { defaultMethod } from "react-router-dom/dist/dom";
import SignUp from "./Component/SignUp";

import {Provider} from "rect-redux"
import {createStore} from "redux"
import CounterReducer from '../reducer/CounterReducer'


import SumNumber from "./Component/SumNumber";
import TaskScreen from "./Component/TaskScreen";
const higherOrderComponent =lazy(()=>import("./Component/Hoc"));
const SampleRenderProps=lazy(()=>import ("./Component/SampleRenderProps"));
const ErrorBoundary =lazy(()=>import ("./Component/ErrorBoundary"));
//import CounterComponent from "./Component/CounterComponent";

const CounterComponent=lazy(()=>import("./Component/CounterComponent"))

const myReduxStore=createStore(CounterReducer);

const App =()=>{

const TestApp=higherOrderComponent(()=>{
  return<div>Test App</div>
})

const myMomsFavouriteCharacter="Anupama";
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Suspense fallback={<div>Loading...</div>}/>
    <Routes>
    <Route path={"/"} element={<h1>Thid is a home page</h1>}/>
    <Route path={"/contact"} element={<h1>Thid is a Contact page</h1>}/>
    <Route path={"/about"} element={<h1>Thid is a About page</h1>}/>
    <Route path={"/signup"} element={<SignUp/>}>
    <Route path={"/sum"} elemnet={<SumNumber/>}/>
    </Route>
   
    <Route path={"/tasks"} element={<TaskScreen/>}/>
   <Route path={"/counter"} element={<ErrorBoundary><CounterComponent/></ErrorBoundary>}/>
    <Route path={"/photos"} element={<Photos name={myMomsFavouriteCharacter}/>}/>
    <Route path={"/test"} element={<TestApp/>}/>
    <Route path={"/sample"} element={<SampleRenderProps/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </div>
  )
}
export default App;


//Lazy Loading === code Slpliting

//   App
//     |
//   Photo
//     |
//  ChildComponent

















// import React from 'react'
// import SignUp from './Component/SignUp';
// //import AllUserList from './Component/AllUserList'
// //import './App.css';
// //import Name from './Component/Name';
// //import SumNumber from './Component/SumNumber';



// const App=()=>{
// return(
//   <div>
//     {/* <AllUserList/> */}
//    {/* <Name/> */}
//    {/* <SumNumber/> */}
//   <SignUp/>
//   </div>
// )
// }

// export default App;
