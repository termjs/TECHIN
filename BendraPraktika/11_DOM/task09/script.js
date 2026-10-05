"use strict";

const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.______ ;

        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });

        const targetTab = document.getElementById(targetId);
        targetTab.classList._____("active");
    });
});
