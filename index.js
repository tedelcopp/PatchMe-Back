const express = require('express');
const app = express();
const { conn } = require("./src/db.js");
const router = require("./src/routes/index.js")

app.set("port", 4000);

app.use('/', router);

conn.sync(/* { alter: true } */).then(
  ()=> {
    app.listen(app.get("port"),()=>console.log(app.get("port")));
  }
)
