const scrollElements = $("[data-scroll=data-scroll-animate]");
const header = $(".header__links");
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

  const heroHeight = scrollElements[0].clientHeight;

  $(document).on("scroll", () => {
    if ($(document).scrollTop() >= heroHeight - 1) {
      $(header).addClass("shadow");
    } else $(header).removeClass("shadow");
  });
});
