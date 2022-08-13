const express = require("express");
const axios = require("axios");
const User = require("../models/user");
require("dotenv").config();
const router = express.Router();

const getApiBookData = async title => {
  const response = await axios.get("https://dapi.kakao.com/v3/search/book", {
    headers: {
      Authorization: `KakaoAK ${process.env.API_KET}`,
    },
    params: { query: title },
  });
  console.log(response.data);
};

/* GET home page. */
router.get("/", async (req, res) => {
  // send all data
  users = await User.find();
  console.log(users);
  res.render("main", { users });
});

router.get("/detail/:id", async (req, res) => {
  const _id = req.params.id;
  // send One data
  users = await User.findOne({ _id });
  res.render("detail", { users });
});

// router.get("/libraryRegister", (req, res) => {
//   res.render("write");
// });

router.post("/libraryRegister", (req, res) => {
  //create library
  res.redirect("/");
});

router.get("/add_book", (req, res) => {
  //create data
  res.render("add_book");
});

router.post("/add_book", (req, res) => {
  //create data
  getApiBookData("마녀");
  res.render("add_book");
});

router.get("/update", (req, res) => {
  res.render("update");
});

router.post("/update", (req, res) => {
  // patch data
  console.log(response);

  res.redirect("/");
});

router.delete("/update", (req, res) => {
  // delete data
  res.redirect("/");
});

module.exports = router;
