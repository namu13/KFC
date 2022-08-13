const express = require("express");
const axios = require("axios");
require("dotenv").config();
const router = express.Router();

const getData = async title => {
  const response = await axios.get("https://dapi.kakao.com/v3/search/book", {
    headers: {
      Authorization: `KakaoAK ${process.env.API_KET}`,
    },
    params: { query: title },
  });
  console.log(response.data);
};

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
  getData("마녀");
  res.redirect("/libraryRegister");
});

router.get("/update", function (req, res) {
  res.render("update");
});

router.post("/update", function (req, res) {
  // patch data
  console.log(response);

  res.redirect("/");
});

router.delete("/update", function (req, res) {
  // delete data
  res.redirect("/");
});

module.exports = router;
