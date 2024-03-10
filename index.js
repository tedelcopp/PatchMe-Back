const express = require('express');
const app = express();
const { conn } = require("./src/db.js");

app.set("port", 4000);

conn.sync(/* { alter: true } */).then(
  ()=> {
    app.listen(app.get("port"));
  }
)
