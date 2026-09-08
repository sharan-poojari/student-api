const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])


require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const studentRoutes = require("./routes/studentRoutes")
const authRoutes = require("./routes/authRoutes")
const app = express()
const port = process.env.PORT || 3000
const allowedOrigins = process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",").map((origin) => origin.trim())
    : true

app.use(express.json())
app.use(cors({ origin: allowedOrigins }))
app.get("/", (req, res) => {
    res.status(200).json({ message: "Student API is running" })
})
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentDB")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => {
        console.log(err)
    })
    
// Server Start
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})








