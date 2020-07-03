import React, { useState } from 'react';
import "./Rooms.css"
function Rooms(){
    let [islit , setlit] = useState(true)
    let [tem , settem] = useState(72)
    return(
        
        <div className= {`room margin ${ islit? "lit" : "dark" }`}> 
        This room is {islit? "lit" : "dark"} 
        <br/>
        
        <button onClick={()=> setlit(true) }> Lit</button>
        <button onClick={()=> setlit(false) }> Dark</button>
        <br/>
        The current tepmrature is {tem}
        <br/>
        <button onClick= { ()=> settem(++tem)} >Icrease Temprature</button>
        <button onClick= { ()=> settem(--tem)} >Decrease Temprature</button>
        </div>
        

    );

}
export default Rooms ;