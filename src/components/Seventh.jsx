import React from 'react'

const Seventh = ({isLoggedin}) => {
    const [user,setUser] = useState([])  
     useEffect(()=>{fetchUser()
     },[])
        async function fetchUser(){
            try{

                const response = await fetch("https://jsonplaceholders.typicode.com/users")
                 const data = await response.json()
                // console.log(data)
                setUser(data)
            }
            catch(error){
                console.error("Error fetching data: ", error)
            }
        }
        return(
            <div>
                 <h2>About useEffect Hook</h2>
            </div>
        )
        fetchUser()
    },[])
    

            
            <ul>
                {user.map(user)=>(
                    <li key={user.id}>user : {user.name}, username</li>
                ))}
            </ul>
            </div>
    )
}