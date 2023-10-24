import "./css/style.css";

const init = () => {
  const $form = document.querySelector("form");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    event.target.reset();
  });
};

init();
