const express = require("express")
const mongoose = require("mongoose")
const app = express()
const methodOverride=require("method-override")
const router = require("./routes/router.js")

app.use(methodOverride("_method" , {methods:["POST" , "GET"]} ))
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs")
app.use(express.static("views"))
const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/Student_Management_System";

mongoose.connect(dbUrl)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/",router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

