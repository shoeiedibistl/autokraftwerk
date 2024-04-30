const scrollElements = $("[data-scroll=data-scroll-animate]");
// const scrollButtonsToDisable = $("[data-scroll=data-scroll-disable]");

// console.log(scrollButtonsToDisable);

$(document).on("scroll", () => {
  if ($(document).scrollTop() > 5) {
    $.each(scrollElements, (i, element) => {
      $(element).addClass("scroll");
    });
  } else {
    $.each(scrollElements, (i, element) => {
      $(element).removeClass("scroll");
    });
  }
});
