import React from 'react'

const Fourth = ({isLoggedin}) => {
    return (
        <div>
            {isLoggedin ? <h1>Welcome</h1> : <h1>Please login</h1>}
            
        </div>
    )
}

export default Fourth