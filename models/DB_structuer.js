const mongoose=require("mongoose")

const schema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required: true
        },
        Age:{
            type:Number,
            required: true
        }
    }
)
module.exports = mongoose.model("Student", schema, "Student");