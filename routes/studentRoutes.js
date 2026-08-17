const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware");

const{
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/",authMiddleware, getStudents)
router.get("/:id",authMiddleware, getStudentById)
router.post("/",authMiddleware, createStudent)
router.put("/:id",authMiddleware, updateStudent)
router.delete("/:id",authMiddleware, adminMiddleware, deleteStudent)

module.exports = router