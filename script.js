const nums_btn = document.querySelectorAll(".num-btns");
const screen = document.getElementById("screen");

console.log(screen.innerHTML);

nums_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
    screen.innerHTML = btn.value;
  });
});
