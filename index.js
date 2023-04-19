const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cardRemoveClass();

    card.classList.add("active");
  });
});

function cardRemoveClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
