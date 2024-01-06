const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const path = require('path');

app.use("/users", userRouter);

app.get("/", (req,res) => {
   res.sendFile(path.resolve(__dirname) + '/src/login.html');
})

const PORT = 3000;
app.listen(PORT, ()=> {
   console.log(`Server listening on ${PORT}`)
})

