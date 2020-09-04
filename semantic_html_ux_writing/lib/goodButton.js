$(function () {
  const changeButtonLabel = (e) => {
    let button = $(e.currentTarget);
    button.toggleClass("active");
    button
      .children()
      .text(
        button.hasClass("active") ? "お気に入りに追加済み" : "お気に入りに追加"
      );
  };

  const toggleButton = (e) => {
    let button = $(e.currentTarget);
    button.toggleClass("active");
    button.attr("aria-pressed", button.hasClass("active") ? true : false);
  };

  $(".bookmark-button").on("click", changeButtonLabel);
  // $(".bookmark-button").on("click", toggleButton);
});
