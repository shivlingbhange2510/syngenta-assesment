import React,{useState, useEffect} from 'react'

export const ShootButton = () => {
    const [circleNumber, setCircleNumber] = useState('')
    const AddCiecle=()=>{
        console.log("Hii")
    }
  return (
    <div>
        ShootButton
        <div>
            <input type="text" value={circleNumber} onChange={(e)=>setCircleNumber(e.target.value)} />
            <button onClick={AddCiecle}>Shoot</button>
        </div>
    </div>
  )
}
