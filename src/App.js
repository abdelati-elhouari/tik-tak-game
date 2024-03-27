import React, { useState } from "react";
import Nmmp from "./components/Nmoplier/Nmp";
import Dmop from "./components/Dmoplier/Dmop";
import "./styles.css";


const App = () => {
  const[show,setshow]=useState(0)
  
   function handerclick1 (){
    setshow(1)

   }
   function handerclick2 (){
    setshow(2)

   }
    
    
       if(show===1){
        return <Nmmp/>
      }else if(show===2){
        return <Dmop/>
      }else{
        return <div className="App">
          <button onClick={handerclick1}>le Morpion original</button>
          <button onClick={handerclick2}>le Morpion amélioré</button>
        </div>
      }  
    
    
  
}
export default App
