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

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    first_num_bool = true;

    if (expression.innerHTML === "+") {
      console.log("add");

      if (eval) {
        first_num = first_num + parseInt(second_num);
        second_num = "";
        screen.innerHTML = first_num;
      }

      first_num = parseInt(first_num);

      eval = true;
    }

    if (expression.innerHTML === "-") {
      console.log("add");

      if (eval) {
        first_num = first_num - parseInt(second_num);
        second_num = "";
        screen.innerHTML = first_num;
      }

      first_num = parseInt(first_num);

      eval = true;
    }

    if (expression.innerHTML === "*") {
      console.log("add");

      if (eval) {
        first_num = first_num * parseInt(second_num);
        second_num = "";
        screen.innerHTML = first_num;
      }

      first_num = parseInt(first_num);

      eval = true;
    }

    if (expression.innerHTML === "/") {
      console.log("add");

      if (eval) {
        first_num = first_num / parseInt(second_num);
        second_num = "";
        screen.innerHTML = first_num;
      }

      first_num = parseInt(first_num);

      eval = true;
    }
  });
});

const equal = document.getElementById("equal");

equal.addEventListener("click", () => {});

// To do the calculations

var eval = false;

function evaluate(exp) {
  first_num_bool = true;

  if (exp === "+") {
    console.log("add");

    if (eval) {
      first_num = first_num + parseInt(second_num);
      second_num = "";
      screen.innerHTML = first_num;
    }

    first_num = parseInt(first_num);

    eval = true;
  }

  if (exp === "-") {
    console.log("add");

    if (eval) {
      first_num = first_num - parseInt(second_num);
      second_num = "";
      screen.innerHTML = first_num;
    }

    first_num = parseInt(first_num);

    eval = true;
  }

  if (exp === "*") {
    console.log("add");

    if (eval) {
      first_num = first_num * parseInt(second_num);
      second_num = "";
      screen.innerHTML = first_num;
    }

    first_num = parseInt(first_num);

    eval = true;
  }

  if (exp === "/") {
    console.log("add");

    if (eval) {
      first_num = first_num / parseInt(second_num);
      second_num = "";
      screen.innerHTML = first_num;
    }

    first_num = parseInt(first_num);

    eval = true;
  }
}
