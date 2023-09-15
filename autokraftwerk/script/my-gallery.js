myGallery = document.querySelectorAll(".my-gallery__item");

myLightbox = document.querySelector(".my-lightbox");
myLightboxImg = document.querySelector(".my-lightbox__img");


myLightbox.addEventListener("click", () => {
    myLightbox.style.visibility = "hidden";
} )
myGalleryLargeImgs = [
    "../img/main-slider/0.png"
]

// console.log(Array.isArray(myGallery));

// console.log(myGallery);

myGallery.forEach((pic) =>  {
    pic.addEventListener('click', () => {
        // console.log(`click ${pic.getAttribute('num')} картинка`);
        // console.log(`../img/main-slider/${pic.getAttribute('num')}.png`);
        // pic.style.background = `../img/main-slider/${pic.getAttribute('num')}.png`
        // pic.src = `../PUBLIC/autokraftwerk/img/main-slider/${pic.getAttribute('num')}.png`

        myLightbox.style.visibility = "visible";
        // myLightboxImg.style.backgroundImage = `src("../PUBLIC/autokraftwerk/img/main-slider/${pic.getAttribute('num')}.png")`
        myLightboxImg.style.background = `url("../PUBLIC/autokraftwerk/img/main-slider/${pic.getAttribute('num')}.png")`
        myLightboxImg.style.backgroundSize = "100%"
    })
})