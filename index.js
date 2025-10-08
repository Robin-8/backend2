const express = require("express")
require('dotenv').config();
const postRoute = require('./route/postRoute.js')
const connectDb = require("./confic/db.js")

const app = express()

const PORT = 3000
connectDb()


app.use("/", postRoute);


app.listen(PORT,()=>{
    console.log(`application is running in ${PORT}`)
})

