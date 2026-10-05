"use strict";

const input = document.getElementById("item-input");
const button = document.getElementById("add-item-btn");
const list = document.getElementById("items");

button.addEventListener("click", function () {
    const text = input._____;
    const newItem = document.createElement("__");
    newItem.textContent = text;
    list.__________(newItem);
    input.value = "";
});
