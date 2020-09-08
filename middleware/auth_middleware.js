const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next()
    }

    try {
        const token = req.headers.authorization.split(" ")[1]

        if (!token) {
            res.status(401).json({message: "There's no authorization"})
        }

        const decoded = jwt.verify(token, process.env.jwtSecret)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: "There's no authorization"})
    }
}
