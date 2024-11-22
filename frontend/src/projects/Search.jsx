import React, { useState } from 'react'

function Search({ items }) {
    const [searchTerm, setSearchTerm] = useState('')
    const filtering = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <ul>
                {filtering.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Search
