import React, { useState } from 'react'

function ToggleApp() {
    const [isToggle,setIstoggle] = useState(false)
    function toggle(){
        setIstoggle(!isToggle)
    }
  return (
    <div>
        <input type="checkbox" onChange={toggle} />
        <p>{isToggle?"on":"off"}</p>
    </div>
  )
}

export default ToggleApp