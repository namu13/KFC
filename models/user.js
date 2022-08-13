const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxLength: 15,
  },
  bookshelf: {
    type: String,
    required: true,
    maxLength: 15,
  },
  views: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
  },
  books: [
    {
      image: {
        type: String,
      },
      name: {
        type: String,
      },
      author: {
        type: String,
      },
      publisher: {
        type: String,
      },
      review: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
