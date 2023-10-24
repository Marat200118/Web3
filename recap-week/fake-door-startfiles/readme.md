# Vite

Start by going over the [Vite explanation](https://devinekask.github.io/workflows/vite-01-intro)

Name your project 'fake-door' and use the 'vanilla' template, no Typescript, JavaScript is fine.

You can skip the last part about subdirectories (for now, mayebe just read it)

## Clean up

We are about to remove some files we don't need.

- Remove the `public` folder and its contents
- Remove the `counter.js` file
- Remove the `javascript.svg` file
- Remove the `style.css` file

If you have the dev server running, you will encounter some errors. Don't worry: read the message and remove the imports that are responsible for the errors.

## Build up

- Replace the `<div id="app"></div>` in the HTML with the provided HTML. Be sure to keep the `<script type="module">` tag.
  - Vite will throw an error again. Remove the JavaScript code to add the HTML and to set up the counter. (make the file empty)
  - Notice the `<script type="module" src="/main.js"></script>` line in the HTML.
- Create a new `css` directory copy the provided CSS files into it
  - To use this CSS, we have to import it via JavaScript, so import the `style.css` file in the `main.js` file

  ```css
  import "/css/style.css";
  ```

  - You could do the same for the reset.css, but there is also the option to import it via CSS. Add the following line to the `style.css` file

  ```css
  @import url("reset.css");
  ```

- Copy the "assets" directory into the project. You should see the background image in the browser now. (Maybe you have to refresh your browser)

## Submit

Let us handle the form submission, kind of... We will just log a message to the console for now. We could talk with a webservice to store the email address, but we will do that another time.

```javascript
const init = () => {
  const $form = document.querySelector("form");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    //add confetti
    event.target.reset();
  });
}

init();
```

## Modules import

Let us celebrate when a vistor submits its email adress by throwing some confetti. We can use the [js-confetti](https://www.npmjs.com/package/js-confetti) package for this.

First, we need to install the package
  
  ```bash
  npm install js-confetti
  ```

Then we can import it in the `main.js` file

  ```js
  import confetti from "js-confetti";
  ```

In the [documentation](https://www.npmjs.com/package/js-confetti#usage) you can see how to use the package. We have to create an instance of JSConfetti first and call addConfetti() when we want to throw confetti. You can figure this one out yourself.

## Production build

Run `npm run build`, you should see a `dist` directory being created. To test this build, you can run `npm run preview`` to get a 🥁... preview

Check the console for errors

## Static assets

Something is wrong with the background images. When they are in a mediaquery, they aren't picked up by Vitejs. Let us move them to [the `public` directory](https://vitejs.dev/guide/assets.html#the-public-directory) as a workaround.
