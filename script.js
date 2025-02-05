let buttons = document.querySelectorAll(".button");
let display = document.getElementById("display");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonValue = button.value;

    if (buttonValue === "AC") {
      display.value = "";
    } else if (buttonValue === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Erro";
      }
    } else {
      display.value += buttonValue;
    }
  });
});
