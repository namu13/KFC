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
  const id = window.location.pathname.replace("/add_book/:", "");
  const image = $(".add__form-image").attr("src");
  const name = $("#book_title").val();
  const author = $("#book_writer").val();
  const publisher = $("#book_publisher").val();
  const review = $("#book_experience").val();

  var formData = {
    image,
    name,
    author,
    review,
    publisher,
  };

  $.ajax({
    cache: false,
    url: `/add_book/${id}`,
    type: "POST",
    data: formData,
    success: function () {
      window.history.back();
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
    url: `/add_book/search/:${search__input}`,
    type: "GET",
    success: function (e) {
      const parent = $(".search_result");
      parent.empty();

      e.documents.map(function (book) {
        parent.append(
          `<li><button class="abb" onclick="closeSearchModal()"
          data-name="${book.title}"
          data-publisher="${book.publisher}"
          data-thumbnail="${book.thumbnail}"
          data-authors="${book.authors[0]}">
            제목: ${book.title} 출판사: ${book.publisher}</button>
          </li>`
        );
      });
    },

    error: function (xhr, status) {
      alert(status);
    },
  });
}

function closeSearchModal() {
  const thumbnail = $(".abb").data("thumbnail");
  const name = $(".abb").data("name");
  const authors = $(".abb").data("authors");
  const publisher = $(".abb").data("publisher");

  $(".add__form-image").attr("src", thumbnail);
  $("#book_title").val(name);
  $("#book_writer").val(authors);
  $("#book_publisher").val(publisher);

  $(`#find_book_modal`).css("overflowY", "auto");
  $(`#find_book_modal`).fadeOut();
}

function setFilterParamsMain() {
  const item = document.querySelectorAll(".card");
  const nameTag = "card--title";

  filtering(item, nameTag);
}

function setFilterParamsBookShelf() {
  const item = document.querySelectorAll(".column");
  const nameTag = "bookName";

  filtering(item, nameTag);
}

function filtering(item, nameTag) {
  let name, i;
  const inputValue = document.querySelectorAll(".search__input")[0].value;

  for (i = 0; i < item.length; i++) {
    name = item[i].querySelectorAll(`.${nameTag}`)[0].innerHTML;
    if (name.indexOf(inputValue) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}

function goBackPage() {
  document.querySelector("#backForm").submit();
}
