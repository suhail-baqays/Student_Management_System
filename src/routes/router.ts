import { Router } from "express";
import {index , create_student , delete_student , edit_student , update_student} from "../controllers/controller.js"

const router = Router()

router.get("/" , index)
router.post("/create" , create_student)
router.delete("/delete/:id" , delete_student)
router.get("/update/:id",edit_student)
router.put("/update/:id",update_student)

export default router;