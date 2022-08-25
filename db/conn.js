const mongoose = require("mongoose");
const dbUrl = process.env.DATABASE;
console.log(`db url is ${dbUrl}`);
mongoose.connect(dbUrl).then(()=>{
    console.log("connection success");
}).catch((err)=>{console.log(`connection error ${err}`)});
