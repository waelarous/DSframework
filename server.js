// load the things we need
const express = require("express");
const bodyParser = require("body-parser");
const mongoConfig = require("./db/mongoConfig");

const app = express();
app.use(bodyParser.json());
mongoConfig();
app.use("/api/auth", require("./routes/auth"));
// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(3000, () => {
  console.log("AppIsLISTENINGoNpORT 3000");
});
