const container = document.querySelector(".container");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  if (btn.textContent === "Включить") {
    btn.textContent = "Выключить";
    container.style.backgroundColor = "black";
  } else {
    btn.textContent = "Включить";
    container.style.backgroundColor = "white";
  }
});
