const express = require('express');
const userRouter = express.Router();

userRouter.post("/signup", (req,res) => {
    res.send("SignUP")
});

userRouter.get("/signup" , (req,res) => {
    res.send("Signin")
})

module.exports = userRouter;