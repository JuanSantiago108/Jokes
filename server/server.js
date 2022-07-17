// 1. import all dependencies
const express = require('express')
const app = express()
const port = 8000



//2.1 mongoose config
require('./configs/mongoose.config')


// 2.2 express configurations
app.use(express.json())
app.use(express.urlencoded({extended: true}))




// 3. getting the routes
const Routes = require('./routes/jokes.routes')
Routes(app)




// 4. listen to the port 
app.listen(8000, ()=> console.log("Listening to the port 8000"))