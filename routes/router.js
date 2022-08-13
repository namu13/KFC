const express = require("express");
const axios = require("axios");
const User = require("../models/user");
const mongoose = require("mongoose");
require("dotenv").config();
const router = express.Router();

const getApiBookData = async (title) => {
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
    users = await User.findOne({ _id });
    shelfViewInt = parseInt(users.views) + 1;
    shelfViewString = shelfViewInt.toString();
    users.views = shelfViewString;
    await users.save();
    res.render("bookshelf", { users });
  } catch (e) {
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

router.get("/add_book/:id", (req, res) => {
  const _id = req.params.id;
  res.render("add_book", { _id });
});

router.get("/add_book/search/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const bookData = await getApiBookData(name);
    res.send(bookData);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/add_book/:id", async (req, res) => {
  const _id = mongoose.Types.ObjectId(req.params.id);
  const data = req.body;
  try {
    const user = await User.findOne({ _id });
    user.books.push(data);
    await user.save();
    res.redirect("back");
  } catch (e) {
    res.status(400).send(e);
  }
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
