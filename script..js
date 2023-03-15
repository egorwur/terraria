const popupElement = document.querySelector(".popup")
const button = document.querySelector(".pleaseb")

function click () {
  popupElement.classList.add("popup_opened")
};

button.addEventListener("click", click);