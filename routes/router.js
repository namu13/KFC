const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  // send all data
  res.render("index");
});

router.get("/detail/:id", function (req, res) {
  // send One data
  res.render("detail");
});

router.get("/libraryRegister", function (req, res) {
  res.render("write");
});

router.post("/bookshelfRegister", function (req, res) {
  //create data
  res.redirect("/");
});

router.get("/update", function (req, res) {
  res.render("update");
});

router.post("/update", function (req, res) {
  // patch data
  res.redirect("/");
});

router.delete("/update", function (req, res) {
  // delete data
  res.redirect("/");
});

module.exports = router;
