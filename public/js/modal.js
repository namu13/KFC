$(function () {
  $("#open_modal").click(function () {
    $(".modal").css("overflowY", "hidden");
    $(".modal").fadeIn();
  });

  $("#close_close").click(function () {
    $(".modal").css("overflowY", "auto");
    $(".modal").fadeOut();
  });
});
