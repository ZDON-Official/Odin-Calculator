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
var solved = false;

nums_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    solved = false;
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
  screen.innerHTML = switch_sign(screen.innerHTML);
});

// sign buttons pressed
/*
  ! if a sign button is already pressed, then pressing it again should evaluate the first button [FIXED]
*/

var sign_btn_pressed = false;

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    // if (sign_btn_pressed) {
    //   sign_btn_pressed = false;
    // } else {
    //   sign_btn_pressed = true;
    // }
    evaluate(expression.innerHTML);
  });
});

equal.addEventListener("click", () => {
  if (sign != null) {
    console.log("equal pressed");
    // sign_btn_pressed = false;
    evaluate(sign);
  }
});

function evaluate(exp) {
  if (first_num_bool && solved === false) {
    second_num = screen.innerHTML;
  } else {
    first_num = screen.innerHTML;
    first_num_bool = true;
  }

  console.log(
    `evaluating ${exp} first num ${first_num} second num ${second_num}`
  );
  if (sign === null) {
    sign = exp;
  } else {
    first_num = operate(sign, first_num, second_num);
    screen.innerHTML = first_num;
    sign = exp;
  }

  console.log(`solved is ${solved}`);
}

// To do the calculations

function operate(exp, num1, num2) {
  // console.log(`evaluating ${(exp, num1, num2)}`);

  num1 = Number(num1);
  num2 = Number(num2);
  solved = true;

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
      return (num1 / num2).toFixed(3);
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
