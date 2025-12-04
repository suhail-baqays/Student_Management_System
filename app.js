const express = require("express")
const mongoose = require("mongoose")
const app = express()
const methodOverride=require("method-override")
const router = require("./routes/router.js")

app.use(methodOverride("_method" , {methods:["POST" , "GET"]} ))
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs")
app.use(express.static("views"))
mongoose.connect('mongodb://localhost:27017/Student_Mangment_DB');

app.use("/",router)

app.listen(3000, console.log("your server is running on localhost:3000"))

