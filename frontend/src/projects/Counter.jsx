import React, { useState } from 'react'

function Counter() {
    const [Count,setCount] = useState(0)
    function decrement(){
        setCount(Count-1)
        if(Count<0){
            setCount(0)
        }
    }

  return (
    <div>
        <button onClick={()=>{setCount(Count+1)}}>+</button>
        <button onClick={()=>{decrement()}}>-</button>
        <h1>{Count}</h1>
    </div>
  )
}

export default Counter