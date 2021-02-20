import React, {useState, useEffect} from 'react'

const AddUser = () => {

    const postData = async(data:{name:String, email: String}) => {
        const response = await fetch('http://localhost:8080/user',{
           method: 'POST',
           headers: {
               'Content-Type': 'Application/json'
           },
           body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
    }

     const handleSubmit = (e:any) =>{
         e.preventDefault()
         postData({name:e.target.name.value, email: e.target.email.value})
     }

    return(
<>
  <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name"/>
      <label>Email:</label>
      <input type="text" name="email"/>
      <button type="submit">Submit</button>
  </form>
</>
    )
}

export default AddUser;