const nums_btn = document.querySelectorAll(".num-btns");
const exp_btn = document.querySelectorAll(".exp");
const screen = document.getElementById("screen");

var first_num = "";
var second_num = "";
var first_num_bool = false;

nums_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (first_num_bool === false) {
      first_num += btn.value;
      screen.innerHTML = first_num;

      console.log(`first num is ${first_num} with type ${typeof first_num}`);
    } else {
      second_num += btn.value;
      screen.innerHTML = second_num;

      console.log(`second num is ${second_num} with type ${typeof second_num}`);
    }
  });
});

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  screen.innerHTML = 0;
  first_num = "";
  second_num = "";
  first_num_bool = false;
  eval = false;

  console.log("cleared");
  console.log(`${first_num} ${second_num}`);
});

// sign buttons pressed

var sign = "";

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    sign = expression.innerHTML;
    screen.innerHTML = evaluate(sign);
  });
});

const equal = document.getElementById("equal");

equal.addEventListener("click", () => {
  screen.innerHTML = evaluate(sign);
});

// To do the calculations

var eval = false;

function evaluate(exp) {
  console.log(`evaluating ${exp}`);

  first_num_bool = true;

  if (eval) {
    if (exp === "+") {
      first_num = first_num + parseInt(second_num);
      second_num = "";
      return first_num;
    }
    if (exp === "-") {
      first_num = first_num - parseInt(second_num);
      second_num = "";
      return first_num;
    }
    if (exp === "*") {
      first_num = first_num * parseInt(second_num);
      second_num = "";
      return first_num;
    }
    if (exp === "/") {
      first_num = first_num / parseInt(second_num);
      second_num = "";
      return first_num;
    }
  }

  first_num = parseInt(first_num);

  eval = true;

  return first_num;
}
