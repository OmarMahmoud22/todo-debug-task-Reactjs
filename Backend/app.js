require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const morgan = require('morgan')
const port = process.env.PORT ||3000
const main = require('./config/db')

if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"))
}
main()
app.listen(port , ()=>{
    console.log(`listend to port ${port}`);
    
})

