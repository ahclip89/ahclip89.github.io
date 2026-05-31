const outcomes_1 = document.getElementById("1-4");
const outcomes_2 = document.getElementById("5-8");
const swap_button = document.getElementById("swap");

outcomes_swaped = false;

function swapOutcomes() {

  if (outcomes_swaped) {
    outcomes_1.scrollIntoView({behavior: "smooth"});
    swap_button.style.right = "5px";

    // void swap_button.offsetWidth;
    // swap_button.style.animationName = "back";
    // swap_button.style.animationDuration = "0.5s";

    swap_button.style.right = "5px";
    swap_button.innerText = "Next";

  } else {
    outcomes_2.scrollIntoView({behavior: "smooth"});
    swap_button.style.right = "-60px";

    // void swap_button.offsetWidth;
    // swap_button.style.animationName = "next";
    // swap_button.style.animationDuration = "0.5s";

    swap_button.style.right = "-60px";
    swap_button.innerText = "Back";
  }
  outcomes_swaped = !outcomes_swaped;
}