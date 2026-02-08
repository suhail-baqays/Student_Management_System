import { Schema, Document, model} from "mongoose";

export interface student_interface extends Document{
    Name:string,
    Age:number
}

let schema:Schema


schema = new Schema({
    Name:{
        type: String,
        required:true
    },
    Age:{
        type: Number,
        required: true
    }
})

const Student = model<student_interface>("Student" , schema)
export default Student;