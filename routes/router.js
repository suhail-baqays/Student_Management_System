const router = require("express").Router()
const StudentController = require("../controllers/controller.js")

router.get("/" , StudentController.index)

router.post("/create" , StudentController.create)

router.delete("/delete/:id" , StudentController.delete )

router.get("/update/:id" , StudentController.edit)
router.put("/update/:id" , StudentController.update)


module.exports=router