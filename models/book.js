const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
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
  books: [
    {
      name: {
        type: String,
        required: true,
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
