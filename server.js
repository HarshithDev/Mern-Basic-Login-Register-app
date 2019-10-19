const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000
const passport = require('passport')

const users = require('./routes/api/users');

//Body Parser middleware
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoUri;

//Connect Db
mongoose.connect(db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).
 then(() => console.log("Database Connected Successfully")).
 catch(err => console.log(err))

//Passport Middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//Routes
app.use("/api/users",users);

app.listen(port, () => console.log(`Server running on Port ${port}`));