function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

class MyStyle {
    constructor(bgColor, h1Color, headerNavColor, titleArticleColor, titlePColor, prefTitleColor, textColor) {
        this.bgColor = bgColor,
        this.h1Color = h1Color,
        this.headerNavColor = headerNavColor,
        this.titleArticleColor = titleArticleColor,
        this.titlePColor = titlePColor,
        this.prefTitleColor = prefTitleColor,
        this.textColor = textColor;
    }
}

const myIndex = getRandomIntInclusive(1, 3);
// const Style1 = new MyStyle("#ebe9e4", "#b8812b", "#b8812b", "#885a8c", "#7e250a", "#d4cfc2", "#514f34")
const Style1 = new MyStyle("#e8e7e6", "#b8812b", "#a05b3d", "#885a8c", "#8c8b9c", "#d4cfc2", "#6e6c6a")
const Style2 = new MyStyle("#bac8db", "#d6a354", "#fff", "#59608e", "#fff", "#a3adce", "#17231d")
const Style3 = new MyStyle("#d3d4c9", "#d6a354", "#fff", "#304d6c", "#fff", "#c5c6b9", "#57545b")
const styleArray = [Style1, Style2, Style3]

document.getElementById("header").style.backgroundImage = `url(../PUBLIC/autokraftwerk/img/main${myIndex}.png)`
document.documentElement.style.setProperty('--background-color', styleArray[myIndex-1].bgColor);
document.documentElement.style.setProperty('--h1-color', styleArray[myIndex-1].h1Color);
document.documentElement.style.setProperty('--header-nav-color', styleArray[myIndex-1].headerNavColor);
document.documentElement.style.setProperty('--title-article-color', styleArray[myIndex-1].titleArticleColor);
document.documentElement.style.setProperty('--title-p-color', styleArray[myIndex-1].titlePColor);
document.documentElement.style.setProperty('--pref-title-color', styleArray[myIndex-1].prefTitleColor);
document.documentElement.style.setProperty('--text-color', styleArray[myIndex-1].textColor);