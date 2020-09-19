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

        const existing = await Link.findOne({ from, "owner": req.user.userId });
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

router.delete("/:id", auth, async (req, res) => {
    try {
        const link = await Link.findOne({"_id": req.params.id, "owner": req.user.userId});
        if (link) {
            await link.deleteOne();
        } else {
            res.status(404).json({
                message: "Link wasn't found",
            });
        }
        res.status(200).json({ message: "Link deleted succesfully" });
    } catch (error) {
        res.status(500).json({ message: "Something was wrong, try again" });
    }
});

module.exports = router;
