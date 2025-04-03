import  { useState} from 'react'

const Second  = () => {
    const [count, setCount]= useState(0)
    //count = 0
  return (
    <div>
     <h1>Second</h1>   
     <p>count is :{count}</p>
     <button onClick={()=>setCount(count+1)}>increase</button>
     <button onClick={()=>setCount(count-1)}>decrease</button>
      
    </div>
  )
}

export default Second
