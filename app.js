const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var firstn = req.body.fname;
  var lastn = req.body.lname;
  var email = req.body.email;
  console.log(firstn, lastn, email);
});
app.listen(3000, () => console.log("server running on port 3000"));




// api key : 1ff286c4f9146807dc48d61ffde85fcf-us9