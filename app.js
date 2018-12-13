var express = require("express"),
  bodyParser = require("body-parser"),
  methodOverrider = require("method-override"),
  app = express();

//init
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverrider("_method"));
app.use(bodyParser.urlencoded({ extende: true }));

//routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/packages", function(req, res) {
  res.render("packages");
});
app.get("/our-rules", function(req, res) {
  res.render("our-rules");
});

app.get("/vendors", function(req, res) {
  res.render("vendors");
});

app.get("/about", function(req, res) {
  res.render("about");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/vendors-landing", function(req, res) {
  res.render("vendors-landing");
});
app.get("/portfolio-single", function(req, res) {
  res.render("portfolio-single");
});
app.get("/vendor-silver", function(req, res) {
  res.render("vendor-silver");
});
app.get("/vendor-bronze", function(req, res) {
  res.render("vendor-bronze");
});
app.get("/vendor-gold", function(req, res) {
  res.render("vendor-gold");
});
app.listen(process.env.PORT, process.env.IP);
