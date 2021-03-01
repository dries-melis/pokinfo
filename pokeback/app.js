const express = require('express');
const app = express();
const mongoose = require('mongoose')


//ROUTES
app.get('/', (req, res) => {
    res.send('we are home');
})
app.get('/posts', (req, res) => {
    res.send('we are posts');
})



//Connect to db


//start listening
app.listen(3000)