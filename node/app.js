const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())

const userData = [
    {
        name: 'ram',
        email: 'ram@mail.com'
    },
    {
        name: 'shyam',
        email: 'shyam@mail.com'
    }
]
app.get('/user', (req, res)=>{
     

    res.send(userData)
})

app.post('/user', (req, res)=>{
      
    console.log(req.body)
    userData.push(req.body)
    res.send(userData)

    
})

app.listen(8080, ()=> {

    console.log('server started')
})