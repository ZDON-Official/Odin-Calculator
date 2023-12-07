const nums_btn = document.querySelectorAll(".num-btns");
const exp_btn = document.querySelectorAll(".exp");
const screen = document.getElementById("screen");
const sign_swt = document.getElementById("sign_swt");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

var first_num = "";
var second_num = "";
var first_num_bool = false;
var sign = null;

nums_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    add_to_display(btn.value);
  });
});

function add_to_display(val) {
  if (screen.innerHTML === "0" || first_num_bool) {
    screen.innerHTML = val;
  } else {
    screen.innerHTML += val;
  }
}

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

var sign_btn_pressed = false;

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    evaluate(expression.innerHTML);
  });
});

equal.addEventListener("click", () => {
  if (sign != null) {
    console.log("equal pressed");
    evaluate(sign);
  }
});

function evaluate(exp) {
  console.log(`evaluating ${exp}`);
  if (first_num_bool) {
    second_num = screen.innerHTML;
  } else {
    first_num = screen.innerHTML;
    first_num_bool = true;
  }

  if (sign === null) {
    sign = exp;
  }

  first_num = operate(sign, first_num, second_num);
  screen.innerHTML = first_num;
  sign = exp;
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
  sign = null;
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
