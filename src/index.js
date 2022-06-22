const express = require('express')
const multer=require('multer')

require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const upload=multer({
    dest : 'images'
})
app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
