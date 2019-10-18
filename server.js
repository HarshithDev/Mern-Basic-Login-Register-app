const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000

//Body Parser middleware
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
app.use(bodyParser.json)

//DB config
const db = require('./config/keys').mongoUri;

//Connect Db
mongoose.connect(db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).
 then(() => console.log("Database Connected Successfully")).
 catch(err => console.log(err))

app.get('/',(req,res) => {
    res.send("Hello");
})

app.listen(port, () => console.log(`Server running on Port ${port}`));