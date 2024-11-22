import React, { useState } from 'react'

function ShowUserInput() {
  const [userInput, setUserInput] = useState('')
  return (
    <div>
      <div>Show user input</div>
      <input type="text" placeholder='Input Box' className='bg-blue-500' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <div>NAME:{userInput}</div>
    </div>
  )
}

export default ShowUserInput