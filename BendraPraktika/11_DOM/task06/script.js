"use strict";

const text = document.getElementById("secret-text");
const button = document.getElementById("toggle-text-btn");

button.addEventListener("click", function () {
    if (text.style.display === "none") {
        text.style.display = "_____";
        button.textContent = "Hide";
    } else {
        text.style.display = "_____";
        button.textContent = "Show";
    }
});
