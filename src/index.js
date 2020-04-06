const express = require('express')
const bcrypt = require('bcryptjs')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// app.use((req,res, next)=>{
//     if(req.method === 'GET')
//     {
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
// })


//Can be used when the server is under maintanance
// app.use((req, res, next) => {
//     res.status(503).send('Server is under maintanance!')
// })
