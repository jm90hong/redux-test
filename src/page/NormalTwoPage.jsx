import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";


export default function NormalwoPage(){

    const {state} = useLocation();
    const [number, setNumber]  =useState(state.value);



    function increment(){
        var newNumber = number+1;
        setNumber(newNumber);
    }

    function decrement(){
        var newNumber = number-1;
        setNumber(newNumber);
    }

    // useEffect(()=>{
    //     setNumber(state.value);
    // }, []);


    return(
        <>
            <div>
                <div style={{color:'blue',fontWeight:'700'}}>Normal Two Page</div>
                <h3>{number}</h3>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}