import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,setAmount } from '../slices/counterSlice'

export default function ReduxTwoPage(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
            <div>
                <div style={{color:'blue',fontWeight:'700'}}>Redux Two Page</div>
                <h3>{count}</h3>
                <button onClick={()=>{
                    dispatch(increment())
                }}>+</button>
                <button onClick={()=>{
                    dispatch(decrement())
                }}>-</button>
            </div>
        </>
    )
}