import React, { useState } from 'react'

function Imguploader() {
    const [file,setFile] = useState(null)
    function uploading(e){
        setFile(e.target.files[0])
    }
  return (
    <div>
        <input type="file" accept='image/*' onChange={uploading} />
        <img src={file?URL.createObjectURL(file):null} alt='Uploaded Image' />
    </div>
  )
}

export default Imguploader