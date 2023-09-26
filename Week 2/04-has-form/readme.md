# :has - Form

The `:has()` selector can be powerful when styling form elements and their states. In combination with pseudo-classes like `:valid`, `:invalid`, `:focus` and `:placeholder-shown`, we can style a lot of different states.

- When a `.form-group` has an invalid input field, set the color and border-color to the `--c-error` color.
- Notice that the fields are immediately invalid, even when the user hasn't filled in anything yet, this is rather annoying. There is a fix (hack?) for this: with the pseudo-class `:placeholder-shown`, we can select the fields who are still empty. So there we can remove the error state.
- Now when we are editing the incorrect fields, one can expect that the error state is gone. So make sure that there is no error state as long as a field has focus.
- Let's show an error message when a field is invalid. Try to set the `.form-group\_\_error` visible, but only when the field is invalid and doesn't have the focus or a placeholder shown. Yes, you can write this one in one selector.
- To give the user a subtile indication when a field is valid, we can change the border-color of the field to a success color. Do this for every form-group, except for the ones with a button of type submit. Since the last is rather odd.
