const express = require("express");
const axios = require("axios");
const User = require("../models/user");
const mongoose = require("mongoose");
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
  users = await User.find().sort({ createdAt: -1 });
  res.render("main", { users });
});

router.get("/bookshelf/:id", async (req, res) => {
  try {
    const _id = mongoose.Types.ObjectId(req.params.id);
    // send One data
    users = await User.findOne({ _id });
    res.render("bookshelf", { users });
  } catch (e) {
    console.log(e);
  }
});

router.get("/bookshelfview/:id", async (req, res) => {
  const _id = mongoose.Types.ObjectId(req.params.id);
  try {
    user = await User.findOne({ _id });
    shelfViewInt = parseInt(user.views) + 1;
    shelfViewString = shelfViewInt.toString();
    user.views = shelfViewString;
    await user.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.status(400).redirect("/");
  }
});

// router.get("/libraryRegister", (req, res) => {
//   res.render("write");
// });

router.post("/libraryRegister", async (req, res) => {
  //create library
  const library = new User({ ...req.body });
  try {
    await library.save();
    res.redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
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
