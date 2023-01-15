const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="msksmkadkdnkadnkadmamdzmsmdskmdksdm"

router.post("/createuser", [body('email', "Incorrect email").isEmail(), body('name').isLength({ min: 5 }), body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt)
        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
            })
            res.json({ success: true });
        }
        catch (err) {
            console.log(err);
            res.json({ success: false });
        }
    });

router.post("/loginuser", [body('email', "Incorrect email").isEmail(), body('password', "Incorrect Password").isLength({ min: 5 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let userdata = await User.findOne({ email: req.body.email });
        if (!userdata) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }
        const passwordcompare=await bcrypt.compare(req.body.password,userdata.password);

        if (!passwordcompare) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }
        const data={
            user:{
                id:userdata.id,
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({ success: true,authToken:authToken});
    }
    catch (err) {
        console.log(err);
        res.json({ success: false });
    }
})

module.exports = router;