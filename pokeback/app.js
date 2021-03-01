const express = require('express');
const app = express();
const mongoose = require('mongoose')

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req, res) => {
    res.send('we are home');
})




//Connect to db
mongoose.connect('mongodb://localhost:27017/pokinfo', { useNewUrlParser: true }, () => console.log('connected to DB'))

//start listening
app.listen(3000)