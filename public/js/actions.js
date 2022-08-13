function addLibrary() {
  const userName = $("#card_user").val();
  const bookshelf = $("#card_title").val();
  const introduce = $("#card_description").val();
  const password = $("#card_password").val();

  var formData = {
    userName,
    bookshelf,
    password,
    introduce,
    views: 0,
    books: [],
  };

  $.ajax({
    cache: false,
    url: "/libraryRegister",
    type: "POST",
    data: formData,
    success: function () {
      $(".modal").css("overflowY", "auto");
      $(".modal").fadeOut();

      location.reload();
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
}

function addBook() {
  const userName = $("#book_title").val();
  const bookshelf = $("#book_writer").val();
  const introduce = $("#book_publisher").val();
  const password = $("#book_experience").val();

  var formData = {
    userName,
    bookshelf,
    password,
    introduce,
    views: 0,
    books: [],
  };

  $.ajax({
    cache: false,
    url: "/add_book",
    type: "POST",
    data: formData,
    success: function () {
      $(".modal").css("overflowY", "auto");
      $(".modal").fadeOut();

      location.reload();
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
}

function getBooks() {
  $.ajax({
    cache: false,
    url: "/add_book",
    type: "POST",
    success: function (e) {
      console.log(e);
      // $(".modal").css("overflowY", "auto");
      // $(".modal").fadeOut();

      // location.reload();
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
  // fetch("/add_book").then((e) => console.log(e));
}
