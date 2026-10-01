// 1. Change Heading Text
const header = document.getElementById("main-title");
const titleButton = document.getElementById("change-title-btn");

titleButton.addEventListener("click", () => {
  header.innerText = "New amazing title";
});

// 2. Highlight All List Items
const listItems = document.querySelectorAll("#todo-list > li");
const highlightButton = document.getElementById("highlight-btn");

highlightButton.addEventListener("click", () => {
  listItems.forEach((element) => {
    element.style.color = "red";
  });
});

// 3. Toggle Dark Mode Class
const toggleThemeButton = document.getElementById("toggle-theme-btn");
const page = document.getElementById("page");

toggleThemeButton.addEventListener("click", () => {
  page.classList.toggle("dark");
});

//4. Add New List Item from Input
const addItemButton = document.getElementById("add-item-btn");
const ulListItems = document.getElementById("items");
const itemInput = document.getElementById("item-input");

addItemButton.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.innerHTML = itemInput.value;
  ulListItems.appendChild(newListItem);
  itemInput.value = "";
});

// 5. Change Image src and alt
const image = document.getElementById("preview");
const changeImgButton = document.getElementById("change-img-btn");
changeImgButton.addEventListener("click", () => {
  image.src = "./images/img2.jpg";
  image.alt = "Second image";
});

// 6. Show/Hide Paragraph
const secretText = document.getElementById("secret-text");
const toggleTextButton = document.getElementById("toggle-text-btn");

toggleTextButton.addEventListener("click", () => {
  if (secretText.style.display != "none") {
    secretText.style.display = "none";
    toggleTextButton.innerHTML = "Show";
  } else {
    toggleTextButton.innerHTML = "Hide";
    secretText.style.display = "block";
  }
});

// 7. Mouseover Highlight Box
const boxArea = document.getElementById("box");

boxArea.addEventListener("mouseover", () => {
  boxArea.style.backgroundColor = "yellow";
});

boxArea.addEventListener("mouseout", () => {
  boxArea.style.backgroundColor = "";
});

// 8. Live Character Counter
const textAreaMessage = document.getElementById("message");
const charCount = document.getElementById("char-count");

textAreaMessage.addEventListener("change", () => {
  charCount.innerHTML = textAreaMessage.value.length;
});

// 9. Simple Tab Switcher
const tabButtons = document.querySelectorAll(".tab-btn");
const tabElements = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const dataTarget = document.getElementById(
      event.target.getAttribute("data-target"),
    );
    const tab = document.getElementById(dataTarget.id);
    const currentActive = document.querySelector(`.tab.active`);
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    tab.classList.add("active");
  });
});
