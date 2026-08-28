require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const studentRoutes = require("./routes/studentRoutes")
const authRoutes = require("./routes/authRoutes")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)

// MongoDB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => {
        console.log(err)
    })
    
// Server Start
app.listen(3000, () => {
    console.log("Server started on port 3000")
})








