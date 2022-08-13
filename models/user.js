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
        maxlength: 20,
      },
      author: {
        type: String,
        maxlength: 15,
      },
      publisher: {
        type: String,
        maxlength: 15,
      },
      review: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
