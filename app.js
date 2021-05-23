const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!!");
});