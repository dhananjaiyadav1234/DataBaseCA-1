const mongoose = require("mongoose");
require("dotenv").config();

const connect = ()=>{
    mongoose.connect(process.env.db_url)
    .then(()=>{
        console.log("connected to mongo db");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect;