import React, { useEffect, useState } from 'react'

function Api() {
    const [data, setData] = useState(null)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setData(json))
  return (
    <div>
        {data && <h1>{data.title}</h1>}
    </div>
  )
}

export default Api