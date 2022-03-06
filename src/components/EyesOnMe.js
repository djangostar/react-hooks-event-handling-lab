// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {
    
    function Hey() {
        console.log("Hey! Eyes on me!")
    }
    
    function Good() {
        console.log('Good!')
    }

   
    return (
        <button onFocus={Good} onBlur={Hey} >Eyes on me</button> 
    )
}

export default EyesOnMe