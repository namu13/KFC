$(function () {
  console.log("object");

  $("#open_modal").click(function () {
    const modal = $(this).data("modal");

    $(`#${modal}_modal`).css("overflowY", "hidden");
    $(`#${modal}_modal`).fadeIn();
  });

  $("#close_close").click(function () {
    const modal = $(this).data("modal");

    $(`#${modal}_modal`).css("overflowY", "auto");
    $(`#${modal}_modal`).fadeOut();
  });
});
