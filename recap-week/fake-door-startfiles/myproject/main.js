import "./css/style.css";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

const init = () => {
  const $form = document.querySelector("form");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    jsConfetti.addConfetti();
    event.target.reset();
  });
};

init();
