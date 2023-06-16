const connectToMongo = require("./db");
const express = require('express');
const app = express();
app.use(express.json())
app.use('/auth/user',require("./routes/user"));
app.use('/auth/admin',require("./routes/admin"));
app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hello")
})
app.listen(process.env.PORT || 5000);
connectToMongo
