# Has hover

This exercise is a copy of the video referenced at the bottom.

Try to do this exercise following the steps coming up next, if you get stuck, you can always check the video.

## Preparation

- Provide a list with 9 images
- make a 3x3 grid out of it, and make sure the images take up the whole region of their cells.

## Basic effect

- To get us started, set every `<li>` item to a scale of .9
- When you hover over a list item, make it scale to 1
- Give it a subtle transition

## Reversed effect

We want all the list items to be scaled down, except the one we hover over. When no list item is hovered, all the list items should be at full scale.
We can achieve this using the `:has` selector (what else?).

- Remove the default scaling of .9 on a list item
- Since we need a way to target all the list items once a list item is hovered, we can use a :has selector on the list itself. We can check if it _has_ a list item that is in a hover state.
- If this is the case, we can select all the list items, except the one that is hovered, and scale them down to .9

## Original idea

Besides a great recap on `:has`, this is also the source of this exercise.
<https://www.youtube.com/watch?v=OGJvhpoE8b4>
