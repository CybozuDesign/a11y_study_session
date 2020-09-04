$(function () {
  $(".bookmark-button").on("click", (e) => {
    $(e.currentTarget).toggleClass("active");
  });
});
