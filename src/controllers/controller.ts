import { Request, Response } from "express";
import Student from "../models/DB_structure.js";

interface requst_body {
    Name:string,
    Age:number
}


export const index = async(req:Request , res:Response):Promise<void> =>{
    try{
        const students = await Student.find({})
        res.render("Manage_std" , {StudentList:students})
    
    }catch(err){
        console.error("Error fetching students:", err);
        res.status(500).send("Server Error");
    }
}

export const create_student = async(req:Request , res:Response):Promise<void> =>{
    try{
       const new_Student = new Student(req.body as requst_body)
        await new_Student.save()
        res.redirect('/')

    }catch(err){
        console.error("Error incerting student:", err);
        res.status(500).send("Server Error");
    }
}

export const delete_student = async(req:Request , res:Response):Promise<void>=>{
    try{
        await Student.deleteOne({_id: req.params.id})
        res.redirect('/')
    }catch(err){
        console.error("Error deleting student:", err);
        res.status(500).send("Server Error");
    }
}

export const edit_student = async(req:Request , res:Response):Promise<void>=>{
    try{
        const students = await Student.find({})
        const id = req.params.id
        res.render("update_std.ejs" , {StudentList:students , edited_ID_std:id})

    }catch(err){
        console.error("Error cannot update student:", err);
        res.status(500).send("Server Error");
    }
}

export const update_student = async(req:Request , res:Response):Promise<void>=>{
    try{
        await Student.updateOne(
            {_id:req.params.id} , 
            {$set: req.body as requst_body }
        )
        res.redirect('/')
    }catch(err){
        console.error("Error cannot update student:", err);
        res.status(500).send("Server Error");
    }
}