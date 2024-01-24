import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,setAmount } from './counterSlice'

export default function ReduxOnePage(){


    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    const navigate = useNavigate();

    function goToTwo(){
        dispatch(setAmount(count))
        navigate('/redux_two');
    }
    
    return (
        <>
            <div>
                <div style={{color:'blue',fontWeight:'700'}}>Redux One Page</div>
                <input type="number" value={count} onChange={(e)=>{dispatch(setAmount(e.target.value))}} placeholder='0'/>
                <button onClick={goToTwo}>Redux Two로 이동</button>
            </div>
        </>
    )
} 