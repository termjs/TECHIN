const bgColorDiv = document.getElementById("bg-change");
const paragraphElements = document.querySelectorAll("p");
const heading = document.querySelector("h1");
const button = document.getElementById("magic-button");
const titles = document.querySelectorAll(".title");
const image = document.getElementById("preview");
const divAbout = document.querySelector(".about");
const section = document.getElementById("content");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer");

button.addEventListener("click", () => {
  // 1. Change the background color of a <div> to "lightblue"
  if (bgColorDiv) bgColorDiv.style.backgroundColor = "lightblue";

  // 2. Set the text color of all <p> elements to "green"
  paragraphElements.forEach((paragraph) => {
    paragraph.style.color = "green";
  });

  // 3. Make a heading (<h1>) centered using style.textAlign
  if (heading) heading.style.textAlign = "center";

  // 4. Increase the font size of an element with class "title" to "30px"
  for (const title of titles) {
    title.style.fontSize = "30px";
  }

  // 5. Set an image’s src attribute to a new URL and update its alt text
  if (image) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";

    image.alt = "Second image";
  }

  // 6. Add a title attribute to a <div> with the text "Hover tooltip"
  if (divAbout) divAbout.setAttribute("title", "Hover tooltip");

  // 7. Replace the inner HTML of a <section> with a new heading and paragraph
  if (section)
    section.innerHTML = "<h1>New heading</h1><p>And a new paragraph</p>";

  // 8. Wrap an existing <p> element’s content in a <strong> tag using innerHTML
  if (paragraphElements.length > 0) {
    paragraphElements[0].innerHTML = `<strong>${paragraphElements[0].innerHTML}</strong>`;
  }

  // 9. Change the background color and border of all elements with class "card"
  cards.forEach((card) => {
    card.style.backgroundColor = "orange";
    card.style.border = "1px solid red";
  });

  // 10. Add a link inside a <footer> by setting its innerHTML
  if (footer)
    footer.innerHTML = "<a href='https://example.com'>Visit Example</a>";
});
