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
//     bookshelf: "경제책",
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
//       {
//         image:
//           "http://image.kyobobook.co.kr/images/book/xlarge/903/x9791162542903.jpg",
//         name: "투자의 감각",
//         author: "이명로",
//         publisher: "비즈니스북스",
//         review: "ㄹ하하하하하하핳",
//       },
//       {
//         image:
//           "http://image.kyobobook.co.kr/images/book/xlarge/153/x9791191521153.jpg",
//         name: "대한민국 위기와 기회의 시간",
//         author: "선대인",
//         publisher: "지와인",
//         review: "까가가ㅏ가가각ㄲㄲ까가가가가가가가",
//       },
//       {
//         image:
//           "http://image.kyobobook.co.kr/images/book/xlarge/535/x9791159318535.jpg",
//         name: "트레이더 콜린 씨의 일일",
//         author: "콜린 랭커스터",
//         publisher: "해의시간",
//         review: "래래래래래래ㅐ랠래ㅐ래래래래ㅐ랠",
//       },
//     ],
//   });
//   await user.save();
// };

// run();
