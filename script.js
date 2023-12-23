const lightbulbSwitch = document.querySelector("#lightbulb-switch");
const lightbulbImage = document.querySelector("#lightbulb-image");

let islightbulbOn = false;

lightbulbSwitch.addEventListener("click", function () {
  if (islightbulbOn) {
    lightbulbImage.src = "off.png";
    islightbulbOn = false;
  } else {
    lightbulbImage.src = "on.png";
    islightbulbOn = true;
  }
  console.log(islightbulbOn);
});
