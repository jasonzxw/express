// middleware level
// Application-level middleware
//Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, 
//where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
const express = require('express')
const middleware = require('./middleware/index')

const app = express();
app.use(middleware);

app.get('/' ,(req,res)=>{
    res.send('hello world')
})

app.listen('7899' , ()=> {
    console.log(`server is  running`)
})

//Router-level middleware
//Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

//Error-handling middleware
//Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. 
//Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.