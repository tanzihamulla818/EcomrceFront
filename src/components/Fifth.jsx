import React from 'react'

const Lists = () => {
    const list = ["product1", "product2", "product3", "product4", "product5", ]
    return (
        <div>
            <ul>
                {
                list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Lists