import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function NormalOnePage(){

    const navigate = useNavigate();

    const [number, setNumber] = useState(0); 


    function goToTwo(){
        navigate('/normal_two',{
            state:{
                value:number
            }
        });
    }


    return(
        <>
            <div>
                <div style={{color:'blue',fontWeight:'700'}}>Normal One Page</div>
                <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='0'/>
                <button onClick={goToTwo}>Normal Two로 이동</button>
            </div>
        </>
    )
}