const Student = require("../models/Student")
const User = require("../models/User")

// GET API - All Students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json({
            students
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// GET API - Get Student By Id
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.status(200).json(student)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid student ID"
            })
        }
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// POST API - Create Student
const createStudent = async (req, res) => {
    try {
        const validationError = validateStudentData(
            req.body.name,
            req.body.age
        )
        if (validationError) {
            return res.status(400).json({
                message: validationError
            })
        }
        const student = await Student.create({
            name: req.body.name,
            age: req.body.age
        })
        res.status(201).json(student)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid Data"
            })
        }
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// PUT API - Select by Id and Update 
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id
        const validationError = validateStudentData(
            req.body.name,
            req.body.age
        )
        if (validationError) {
            return res.status(400).json({
                message: validationError
            })
        }
        const student = await Student.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                age: req.body.age
            },
            {
                new: true
            }
        )
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.status(200).json(student)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid ID"
            })
        }
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// Validate Student By Data
const validateStudentData = (name, age) => {
    if (!name) {
        return "Name must required."
    }
    if (name.trim() === "") {
        return "Name should not be empty."
    }
    if (age === undefined) {
        return "Age must required."
    }
    if (typeof age !== "number") {
        return "Age must be in numbers."
    }
    if (age <= 0) {
        return "Age must be greater than 0."
    }
    return null
}

// DELETE API - Select Id and Delete
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id
        const student = await Student.findByIdAndDelete(id)
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.status(200).json(student)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid ID"
            })
        }
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
}