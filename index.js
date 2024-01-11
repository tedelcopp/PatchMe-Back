
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { conn } = require("./src/db.js");


conn.sync(/* { force: true } */).then(() => {
app.listen(PORT, () => {
  console.log(`%s listening at port http://localhost:${PORT}`);
})
});
