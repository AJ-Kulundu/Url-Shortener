const express = require('express');
require('dotenv').config();

const app = express();

PORT = process.env.PORT

app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`))