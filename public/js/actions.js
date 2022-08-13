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
  const id = window.location.pathname.replace("/add_book/", "");
  const image = $(".add__form").attr("src");
  const name = $("#book_title").val();
  const author = $("#book_writer").val();
  const publisher = $("#book_publisher").val();
  const review = $("#book_experience").val();

  var formData = {
    image: "",
    name,
    author,
    review,
    publisher,
  };

  $.ajax({
    cache: false,
    url: `/add_book/:${id}`,
    type: "POST",
    data: formData,
    success: function () {
      location.reload();
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
}

function getBooks() {
  const search__input = $(".search__input").val();
  $.ajax({
    cache: false,
    url: `/add_book/search/책`,
    type: "GET",
    success: function (e) {
      console.log(e);
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
}

function filter() {
  let name, i;

  const inputValue = document.querySelectorAll(".search__input")[0].value;
  const item = document.getElementsByClassName("card");
  for (i = 0; i < item.length; i++) {
    name = item[i].querySelectorAll(".card--title")[0].innerHTML;
    if (name.indexOf(inputValue) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}
