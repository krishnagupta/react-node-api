import React, {useState, useEffect} from 'react'

const User = () => {

    const [data, setData] = useState([])

    const fetchData = async() => {
        const response = await fetch('http://localhost:8080/user')
        const data = await response.json()
        setData(data)
    }

    useEffect(()=> {
        fetchData()
    },[])

    return(
<>
  {
      data && data.map((d:{name:String, email: String}, i) => <div>{d.name} {d.email}</div>)
  }
</>
    )
}


export default User