import React, {useState} from 'react'
//controlled inputs

const Sixth = () => {
    const [input,setInput] = useState("")
    return (
        <div>
            <input type="Text"
            onChange={(event)=>setInput(event.target.value)}/>
            <p>{input}</p>
        </div>
    )
}
export default Sixth