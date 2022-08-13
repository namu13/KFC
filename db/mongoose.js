const mongoose = require("mongoose");
const User = require("../models/user");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_API)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });

// const run = async () => {
//   const user = await User.create({
//     userName: "하도연",
//     bookshelf: "소설소설",
//     views: 0,
//     password: "0123456",
//     books: [
//       {
//         image:
//           "http://image.kyobobook.co.kr/images/book/xlarge/716/x9788901260716.jpg",
//         name: "역행자",
//         author: "자청",
//         publisher: "웅진지식하우스",
//         review: "재미있어요! 재미있어요! 재미있어요!",
//       },
//     ],
//   });
//   await user.save();
// };

// run();
