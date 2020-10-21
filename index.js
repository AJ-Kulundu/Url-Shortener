const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

PORT = process.env.PORT

app.set('view engine','ejs');
mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=> console.log('Connected to database'))

app.get('/',(req,res) =>{
    res.render('index',{variable:'hello world'})
})

app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`))