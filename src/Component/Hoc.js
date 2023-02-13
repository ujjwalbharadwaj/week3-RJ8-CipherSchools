import React from "react";


function higherOrderComponent(HocComponent){
    return class extends React.Component{
    render(){
        return(
            <div>
                <div>inside hoc</div>
                <HocComponent/>
            </div>
        )
    }
    }
}
export default higherOrderComponent