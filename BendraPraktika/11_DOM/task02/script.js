"use strict";

const items = document.querySelectorAll("__________");
const button = document.getElementById("highlight-btn");

button.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style._____ = "red";
    });
});
