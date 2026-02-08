import express,{Application} from "express"
import mongoose from "mongoose"
import method_override from "method-override"
import path from "path"
import router from "./routes/router.js"

const app:Application = express()
app.use(method_override("_method" , {methods:["POST" , "GET"]}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));    //insted of wright the path staticly i use path labrary to make my app work on all browsers and (_dirname) let the app work at any posetion not only if I'm on src dir
app.use(express.static(path.join(__dirname, "./views")));

const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/Student_Management_System";

mongoose.connect(dbUrl)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/",router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});