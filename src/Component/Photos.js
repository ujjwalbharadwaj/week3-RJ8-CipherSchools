import React, {useEffect, useState} from 'react'
//import Axios from 'axios'
import { getAllPhotos } from './api';
import ChildComponent from './ChildComponent'
const Photos =({name})=>{
    const [photoList, setPhotoList]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
  
useEffect(()=>{
getAllPhotos()
.then((response)=>{
    let foundPhotos =response.data;
    setPhotoList(foundPhotos)
})
.catch((err)=>console.errpr(err))
.finally(()=> setIsLoading(false));
},[])  


  if(isLoading){
    return <h4>Loading...</h4>
  }


return(
    <div>
        {photoList.map((photo, index)=>{
            <div key={index}>
                <img src={photo.url} alt={photo.title}/>
            </div>
        })}
        <ChildComponent name={name}/>
    </div>
)

}
export default Photos


// const Photos =()=>{
//     const [photoList, setPhotoList]=useState([]);
//     const [isLoading, setIsLoading]= useState(true);
  
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')//making api call
//     .then(response => response.json())
//     .then(json => setPhotoList(JSON.parse(json))) //setting state
//     .finally(()=> setIsLoading(false))  //setting isLoading false
//   },[])


//   if(isLoading){
//     return <h4>Loading...</h4>
//   }


// return(
//     <div>
//         {photoList.map((photo, index)=>{
//             <div key={index}>
//                 <img src={photo.url} alt={photo.title}/>
//             </div>
//         })}
//     </div>
// )

// }