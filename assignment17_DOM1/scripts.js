const buttons = document.querySelectorAll(".color-btn");
const colorBox = document.getElementById("color-box");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const currentSelected = document.querySelector(".color-btn.selected");
    if (currentSelected) {
      currentSelected.classList.remove("selected");
    }

    colorBox.style.backgroundColor = event.target.dataset.color;
    event.target.classList.add("selected");
  });
});
