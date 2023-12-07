const nums_btn = document.querySelectorAll(".num-btns");
const exp_btn = document.querySelectorAll(".exp");
const screen = document.getElementById("screen");
const sign_swt = document.getElementById("sign_swt");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

var first_num = "";
var second_num = "";
var first_num_bool = false;

nums_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (first_num_bool === false) {
      first_num += btn.value;
      screen.innerHTML = first_num;

      // console.log(`first num is ${first_num} with type ${typeof first_num}`);
    } else {
      second_num += btn.value;
      screen.innerHTML = second_num;

      // console.log(`second num is ${second_num} with type ${typeof second_num}`);
    }
  });
});

// Clears the display and resets everything

clear.addEventListener("click", () => {
  clear_display();
});

// for changing the sign

sign_swt.addEventListener("click", () => {
  if (first_num_bool) {
    second_num = switch_sign(second_num);
    screen.innerHTML = second_num;
  } else {
    first_num = switch_sign(first_num);
    screen.innerHTML = first_num;
  }
});

// sign buttons pressed
/*
  ! if a sign button is already pressed, then pressing it again should evaluate the first button [FIXED]
*/

var sign = "";
var sign_btn_pressed = false;

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    // evaluate()

    if (first_num != "") {
      if (sign_btn_pressed) {
        screen.innerHTML = operate(sign, first_num, second_num);
      }
      sign = expression.innerHTML;
      sign_btn_pressed = true;
      first_num_bool = true;
    }
  });
});

equal.addEventListener("click", () => {
  screen.innerHTML = operate(sign, first_num, second_num);
});

function evaluate() {
  if (first_num_bool) {
    second_num = screen.innerHTML;
  } else {
    first_num = screen.innerHTML;
    first_num_bool = true;
  }

  

  sign = expression.innerHTML;
  return operate(sign, first_num, second_num);
}

// To do the calculations

function operate(exp, num1, num2) {
  // console.log(`evaluating ${(exp, num1, num2)}`);

  num1 = Number(num1);
  num2 = Number(num2);

  switch (exp) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      if (num2 === 0) {
        return "(⩺_⩹)";
      }
      return num1 / num2;
    default:
      return 0;
  }
}

function clear_display() {
  screen.innerHTML = 0;
  first_num = "";
  second_num = "";
  first_num_bool = false;
  eval = false;
  sign_btn_pressed = false;
}

function switch_sign(input) {
  let temp;
  if (input === "" || input === "0") {
    return 0;
  }

  temp = input.includes("-") ? input.substring(1) : "-" + input;

  return temp;
}
