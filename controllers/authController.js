const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        res.status(200).json({
            message: "Login successful",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Server eroor",
            error: error.message
        })
    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password")

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// Update User Role
const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id
        if(req.body.role !=="user" && req.body.role !=="admin"){
            return res.status(400).json({
                message:"Invalid role"
            })
        }
        if(req.user.userId === req.params.id && req.body.role === "user" ){
            return res.status(400).json({
                message:"You cannot remove your own admin role"
            })
        }
        const user = await User.findByIdAndUpdate(
            id,
            {
                role: req.body.role
            },
            {
                new: true
            }
        )
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json(user)
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message:"Invalid ID"
            })
        }
        res.status(500).json({
            message:"Server error",
            error: error.message
        })
    }
}

module.exports = {
    signup,
    login,
    getMe,
    updateUserRole
}