const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")
const config = require("config")

const router = Router();

router.post(
    "/register",
    [
        check("email", "Uncorrect email").isEmail(),
        check("password", "Minimum length is 8 symbols").isLength({ min: 8 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Uncorrect registration data",
                });
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email });

            if (candidate) {
                res.status(400).json({ message: "This email already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "User was created successfully" });
        } catch (e) {
            res.status(500).json({ message: "Something was wrong, try again" });
        }
    }
);

router.post(
    "/login",
    [
        check("email", "Input correct email").normalizeEmail().isEmail(),
        check("password", "Input password").exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Uncorrect login data",
                });
            }

            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({message: "User wasn't found"})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: "Wrong password, try again"})
            }
            const token = jwt.sign(
                { userId: user.id },
                process.env.jwtSecret,
                {expiresIn: "1h"}
            )
            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({ message: "Something was wrong, try again" });
        }
    }
);

module.exports = router;
