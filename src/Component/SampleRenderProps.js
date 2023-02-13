import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import {useCookies} from 'react-cookie'


const SampleRenderProps=()=>{
    
        const[cookies,setCookie,removeCookie]=useCookies(["name"])
       const a=5;
        console.log(cookies)
        
        
        return(
            <RenderPropsComponent
            render={()=>{
                return(
                    <div>
                      <h2
                        onClick={(e)=>{
                            cookies.getAll()
                        }}>
                      </h2>
                        </div>
                )
            }}
            />
        )
    
}
export default SampleRenderProps