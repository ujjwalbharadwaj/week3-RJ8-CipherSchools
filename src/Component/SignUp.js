import React, {useRef, useState} from 'react'
import { Link,Outlet } from 'react-router-dom';

const SignUp=()=>{
    const [state, setstate] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""

    })
    const passwordElement=useRef(null);
let handleChange=(e)=>setstate({...state,[e.target.name]:e.target.value})


return(
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(`The password is: ${passwordElement.current.value}`)
       
    }
    }><Outlet>
        <lable>First name</lable>
        <input 
        name={"firstName"}
        type={"text"} 
        onChange={handleChange}
        value={state.firstName} 
        placeholder={"First Name"}
        />
        <lable>Last name</lable>
        <input 
        name={"lastnName"}
        type={"text"} 
        onChange={handleChange}
        value={state.lastName} 
        placeholder={"Last Name"}
        />
        <lable>Email</lable>
        <input 
        name={"email"}
        type={"email"} 
        onChange={handleChange}
        value={state.email} 
        placeholder={"Email"}
        />
        <lable>Password</lable>
        <input 
        name={"password"}
        type={"password"} 
        onChange={handleChange}
        value={state.password} 
        placeholder={"password"}
        />
        
    <button type={'submit'}>Submit</button>
    
    <Link to={"sum"}/>
    </Outlet>
    </form>
)
}


export default SignUp