const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})
// Model
const Student = mongoose.model("Student", studentSchema)
module.exports = Student