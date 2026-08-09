const Student = require("../models/Student")

// GET API - All Students
const getStudents = async (req, res) => {
    const students = await Student.find()
    res.json(students);
}

// POST API - Create Student
const createStudent =  async (req, res) => {
    const student = await Student.create({
        name: req.body.name,
        age: req.body.age
    })
    res.json(student)
}

// PUT API - Select by Id and Update 
const updateStudent = async (req, res) => {
    const id = req.params.id
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
    res.json(student)
}

// DELETE API - Select Id and Delete
const deleteStudent = async (req, res) => {
    const id = req.params.id
    const student = await Student.findByIdAndDelete(id)
    res.json(student)
}

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
}