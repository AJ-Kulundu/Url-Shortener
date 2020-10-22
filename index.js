const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const ShortUrl = require('./models/url')

const app = express();

PORT = process.env.PORT

app.set('view engine','ejs');
mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=> console.log('Connected to database'))

app.get('/',(req,res) =>{
    res.render('index',{variable:'hello world'})
});

app.post('/short', async (req,res) =>{
    //insert record into database
    const record = new ShortUrl({
        full:'test'
    });
    await record.save();
    res.json({short:short, ok : 1})
})

app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`))