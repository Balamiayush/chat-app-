import React from 'react'
// import ShowUserInput from './projects/ShowUserInput'
// import Counter from './projects/Counter'
// import ToggleApp from './projects/ToggleApp'
// import Api from './projects/Api'
// import Imguploader from './projects/Imguploader'
import Search from './projects/Search'
function App() {
  const items =['🍎','🐱','🐶','💻','🏏' ]
  return (
    <div className='w-full h-screen '>
{/* <ShowUserInput/>
<Counter/>
<ToggleApp/>
<Api/>
<Imguploader/> */}
<Search items={items}/>
    </div>
  )
}

export default App