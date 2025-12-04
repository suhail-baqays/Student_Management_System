const Student = require("../models/DB_structuer")
module.exports={
    index: async(req,res)=>{
        try {
            const students = await Student.find({});
            res.render("Manage_std", { StudentList: students });
        
        }catch (err) {
            console.error("Error fetching students:", err);
            res.status(500).send("Server Error");
        }
    },
    create: async(req,res)=>{
        try{
            const newStudent = new Student({Name: req.body.Name , Age: req.body.Age})
            await newStudent.save().then(()=>{res.redirect("/")})

        }catch (err) {
            console.error("Error incerting student:", err);
            res.status(500).send("Server Error");
        }
    },
    delete: async(req,res)=>{
        try{
            
            await Student.deleteOne({_id: req.params.id})
            res.redirect("/")

        
        }catch (err) {
            console.error("Error deleting student:", err);
            res.status(500).send("Server Error");
        }
    },
    edit: async(req,res)=>{
        try{

            const id = req.params.id
            const students= await Student.find({})

            res.render("update_std.ejs" , {StudentList:students , edited_ID_std: id})

        }catch(err){
            console.error("Error cannot update student:", err);
            res.status(500).send("Server Error");
        }
    },
    update: async(req,res)=>{
        try{

            await Student.updateOne({_id: req.params.id} ,{
                                                        Name: req.body.Name , 
                                                        Age: req.body.Age})
            res.redirect("/")
        
        }catch(err){
            console.error("Error cannot update student:", err);
            res.status(500).send("Server Error");
        }
    }
}