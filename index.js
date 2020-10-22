const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const ShortUrl = require('./models/url')

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

PORT = process.env.PORT

app.set('view engine','ejs');
mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=> console.log('Connected to database'))

app.get('/', async (req,res) =>{
    const allData = await ShortUrl.find()
	res.render('index', { shortUrls: allData })
});

app.post('/short', async (req,res) =>{
    const fullUrl = req.body.fullUrl
    console.log('URL Requested: ', fullUrl)
    const record = new ShortUrl({
        full: fullUrl
    });
    await record.save();
    
    res.redirect('/')
})

app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`))