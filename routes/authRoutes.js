const express = require("express")
const router = express.Router()

const { signup,
    login,
    getMe,
    updateUserRole,
    getAllUsers
} = require("../controllers/authController")

const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")

router.post("/signup", signup)
router.post("/login", login)
router.get("/me", authMiddleware, getMe)
router.put("/users/:id/role", authMiddleware, adminMiddleware, updateUserRole)
router.get("/users", authMiddleware, adminMiddleware, getAllUsers)
module.exports = router
