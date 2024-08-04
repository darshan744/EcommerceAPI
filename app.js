//backend applicatioin file

const express = require('express');
const app = express();//creates express app;
const connectDatabase = require('./config/connectDatabase')

//READS THE PATH OF THE ENV FILE TO ACCESS IT WE USE PATH AND DOTENV FILE 
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,'config','config.env')})

const products = require('./routes/products')
const orders = require('./routes/order')
connectDatabase();

app.use(express.json());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening At port:${process.env.PORT} in ${process.env.NODE_ENV}`);
})

