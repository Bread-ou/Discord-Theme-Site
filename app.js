// Requirments to run the server.
const express = require('express')
const app = express()
const homepageRouter = require('./routes/homepage')
const PORT = process.env.PORT || 3000


// Setting up the view engine.
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Redirect root URL to the hompage router insted.
app.get('/', (req, res) => {
    res.redirect('/homepage')
})

// Setting up routes. 
app.use('/homepage', homepageRouter)

// Middleware set up.
app.use("/views",express.static(__dirname + "/views"))

app.listen(PORT, ()=>{
    console.log("The server is running on port number: "+PORT)
    
})

