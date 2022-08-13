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
