const span = document.getElementById("share-link__link");
const shareList = document.getElementById("socials__share-list");
const myShareBtns = document.querySelectorAll(".share-btn");
const btnClose = document.getElementById("close-share-list");
const mySocialsBtns = document.querySelectorAll(".socials__share_socials a");

const closeList = function () {
  shareList.classList.remove("show");
  document.removeEventListener("keydown", clickEsc);
} 

span.onclick = function() {
  document.execCommand("copy");
}
span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    alert('Ссылка скопирована в буфер обмена');
    closeList();
  }
});

let clickEsc = function (event) {
  if (event.key === "Escape") closeList();
}

myShareBtns.forEach(btn => {
  btn.addEventListener("click", function(){ 
    shareList.classList.toggle("show");
    document.addEventListener("keydown", clickEsc)
  })
})

document.addEventListener("keydown", () => {
  if (!shareList.classList.contains("show")) document.removeEventListener("keydown", clickEsc);
})

btnClose.addEventListener("click", closeList)

shareList.addEventListener("click", function(event) {
  if (event.target === shareList) closeList()
})

mySocialsBtns.forEach(btn => btn.addEventListener("click", closeList))
