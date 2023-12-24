const navMenuBtn = document.querySelector("#navMenuBtn");
const navMenu = document.getElementById("navMenu");

// functions
function hideElement(element) {
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
  } else if (!element.classList.contains("hide")) {
    element.classList.add("hide");
  }
}

navMenuBtn.addEventListener("click", (event) => {
  hideElement(navMenu);
});
