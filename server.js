const express = require("express");
const app = express();
const connect = require("./db");
const port = 3000;

app.use(express.json());
connect()

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})


