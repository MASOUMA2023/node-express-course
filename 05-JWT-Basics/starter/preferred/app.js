const express = require('express')

const dotenv = require('donenv')
const authroutes = require('./routes/auth')
const authmiddleware = require('./middleware/authmiddleware')
dotenv.config()
const app = express()

const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/v1',authroutes)

app.get('/api/v1/hello', authmiddleware.authenticateToken,(req,res)=>{
    const {name}=req.user;
    res.status(200).json({msg: `Hello, ${name}!`})
})

app.listen(port,()=>{
    console.log(`servser is listening on port ${port}`)
})