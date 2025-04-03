import React from 'react'
const Child = ()=>{
    return (
        <div>
            <h2>hello {name}</h2>
        </div>
    )
}

const Third = () => {
    return (
        <div>
            <Child name="ghrt"/>
        </div>
    )
}

export default Third