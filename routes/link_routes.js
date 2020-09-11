const { Router } = require("express");
const router = Router();
const Link = require("../models/Link");
const auth = require("../middleware/auth_middleware");
const config = require("config");
const shortid = require("shortid");

router.post("/generate", auth, async (req, res) => {
    try {
        const baseUrl = process.env.baseUrl || config.get("baseUrl");
        const { from } = req.body;
        const code = shortid.generate();

        const existing = await Link.findOne({ from });
        if (existing) {
            return res.json({ link: existing });
        }
        const to = baseUrl + "/t/" + code;

        const link = new Link({
            code,
            to,
            from,
            owner: req.user.userId,
        });

        await link.save();

        res.status(201).json({ link });
    } catch (e) {
        res.status(500).json({ message: "Something was wrong, try again" });
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const links = await Link.find({ owner: req.user.userId });
        res.json(links);
    } catch (e) {
        res.status(500).json({ message: "Something was wrong, try again" });
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
        res.json(link);
    } catch (e) {
        res.status(500).json({ message: "Something was wrong, try again" });
    }
});

router.delete("/:linkId", async (req, res) => {
    try {
        const link = await Link.findById(req.body.linkId);
        if (link.owner == req.body.userId) {
            await Link.deleteOne({ _id: req.body.linkId });
        } else {
            res.status(403).json({
                message: "Link doesn't belong to this user",
            });
        }
        res.status(200).json({ message: "Link deleted succesfully" });
    } catch (error) {
        res.status(500).json({ message: "Something was wrong, try again" });
    }
});

module.exports = router;
