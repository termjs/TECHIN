"use strict";

const buttons = document.querySelectorAll(".color-btn");
const box = document.getElementById("color-box");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const color = button.dataset.____;
        box.style.____________ = color;
    });
});
