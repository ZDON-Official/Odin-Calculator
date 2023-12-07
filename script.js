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

// sign buttons pressed

/*
  ! if a sign button is already pressed, then pressing it again should evaluate the first button [FIXED]
*/

var sign = "";
var sign_btn_pressed = false;

exp_btn.forEach((expression) => {
  expression.addEventListener("click", () => {
    if (first_num != "") {
      if (sign_btn_pressed) {
        screen.innerHTML = evaluate(sign);
      }
      console.log("sign btn pressed");
      sign = expression.innerHTML;
      sign_btn_pressed = true;
      first_num_bool = true;
      eval = true;
    }
  });
});

equal.addEventListener("click", () => {
  if (first_num != "") {
    screen.innerHTML = evaluate(sign);
  }
});

// To do the calculations

var eval = false;

function evaluate(exp) {
  console.log(`evaluating ${exp}`);

  first_num = parseInt(first_num);

  if (eval) {
    second_num = second_num === "" ? first_num : parseInt(second_num);

    console.log(`second is ${second_num}`);

    if (exp === "+") {
      first_num = first_num + parseInt(second_num);
      second_num = "";
      // return first_num;
    }
    if (exp === "-") {
      first_num = first_num - parseInt(second_num);
      second_num = "";
    }
    if (exp === "x") {
      first_num = first_num * parseFloat(second_num);
      first_num = parseFloat(first_num.toFixed(4));
      second_num = "";
    }
    // ÷
    if (exp === "/") {
      if (parseFloat(second_num) === 0) {
        return "(⩺_⩹)";
      }
      first_num = first_num / parseFloat(second_num);
      first_num = parseFloat(first_num.toFixed(8));
      second_num = "";
    }
    sign_btn_pressed = false;
  }

  // first_num = parseInt();

  return first_num;
}

function clear_display() {
  screen.innerHTML = 0;
  first_num = "";
  second_num = "";
  first_num_bool = false;
  eval = false;
  sign_btn_pressed = false;
}

// for changing the sign

sign_swt.addEventListener("click", () => {
  screen.innerHTML = switch_sign();
});

function switch_sign() {
  if (first_num != "") {
    if (first_num_bool) {
      // first num selected already
      if (second_num === "0") {
        return "0";
      }
      second_num = second_num.includes("-")
        ? second_num.substring(1)
        : "-" + second_num;
      return second_num;
    } else {
      // change sign of first num

      if (first_num === "0") {
        return;
      }

      first_num = first_num.includes("-")
        ? first_num.substring(1)
        : "-" + first_num;
      return first_num;
    }
  } else {
    return "0";
  }
}
