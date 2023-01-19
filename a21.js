document.querySelectorAll(".carousal").forEach((carousal) => {
  const items = carousal.querySelectorAll(".carousal__item");
  const buttons_html = Array.from(items, () => {
    return `<span class="carousal__button"></span>`;
  });
  carousal.insertAdjacentHTML(
    "beforeend",
    `
  <div class="carousal__button__navigation">
  ${buttons_html.join("")}
  </div>`
  );

  console.log(buttons_html);
  const buttons = carousal.querySelectorAll(".carousal__button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousal__item--selected")
      );
      button.forEach((button) =>
        button.classList.remove("carousal__item--selected")
      );
    });
  });
});
