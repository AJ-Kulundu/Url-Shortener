const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const ShortUrl = require('./models/url')

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

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
});

app.get('/:shortId', async (req,res) =>{
  // get the shortId parameter
    const shortId = req.params.shortId;

  //get the long Url from the database
    const rec = await ShortUrl.findOne({short:shortId});
  //if null set status to 404
  if(!rec) return res.status(404)

  //if not null increment the click count
   rec.clicks++
   await rec.save()

  //redirect the user to the original link
   res.redirect(rec.full)

});

app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`))