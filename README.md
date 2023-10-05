# Project Name: Ghoulish Getaway (tentative name)

This site is an in-browser Halloween-themed adventure/survival game. In this game, the player character's vehicle gets a flat tire, requiring them to seek help at the nearby haunted-looking mansion at the side of a deserted highway. To survive, the player must make appropriate choices to avoid classic horror-movie deaths.

### Whiteboard

[Whiteboard Image](images/whiteboard.jpg)

### Authors: Emma Johnson-Barth, Ava Melchior, Luke McCarthy, & Tom Capps

### Links and Resources

* [w3 Schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [CSS Tricks](https://css-tricks.com/)
* [Web Dev Simplified](https://codepen.io/WebDevSimplified/pen/xoKZbd)
* [Ryan Zimmerman](https://codepen.io/rzim2082/pen/jMWYJW?editors=0010)

### Lighthouse Accessibility Report Score

* [Homepage Lighthouse Score: 100](images/indexhml.png)
* [About Us Lighthouse Score: 100](images/aboutUS.png)
* [Gameplay Lighthouse Score: 100](images/gameplay.png)

## User Stories

### Luke:

* User Story: As a user, I want to navigate through a haunted mansion to find a car part to fix my car.

* Feature Tasks:
Design a haunted mansion layout with multiple rooms and obstacles.
Scatter interactive parts throughout the mansion.
Create a specific room where the car part is hidden. (shed)
Implement logic for retrieving the car part (Needs key)
* Acceptance Tests:
Verify that the user can easily make/choose decisions.
Confirm that interactive parts respond to user choices.
Confirm that heart logic is setup correctly so the user loses hearts when certain decisions are made.

---

* User Story: As a user I want to answer six-seven questions to complete an adventure where I can win or lose.

* Feature Tasks:
Design Questions for the user to answer
Make questions that progress the player and make questions that take a life from the player.
Create an end point.
* Acceptance Tests:
Verify that the user can easily make/choose decisions.
Confirm that interactive parts respond to user choices.
Confirm that the player can win.

---

### Tom:

* User Story: As the player, I want to play a cohesive, short game that is fun.

* Feature Tasks:
Player can make choices
There can be a fail state in the game
There can also be a win state
Player can enter name at some point

* Acceptance Tests:
Ensure that multiple choices are fleshed out and working
Ensure the player can access shed once key is obtained
We do not want player to feel overly punished for  mis-steps

### Emma:

* User Story:
As a video game player, I want to play a game which is nostalgic, spooky, and fun. I want to navigate through a spooky mansion and avoid horror movie mistakes so that I can find a car jack and escape the haunted house.

* Feature Tasks:
-Enter in user name, which is recorded and returned to the user.
-Allow user input of choice selection
-Keep track of the number of lives the player has, and reduce the number of hearts each time the play makes an incorrect choice.
-Tell an entertaining story through these choices
* Acceptance Tasks:
-The game is winnable, if responses are selected by random chance, at least 50% of the time - Medium
-Ensure that the health of the player is calculated correctly and retained throughout - Large
-The user name entered is retained throughout, and can be changed for a new player. - Extra small
-Provide error messages guiding the player to select the required prompts. - Small

## Domain Modeling
[Domain Modeling Image](images/domain.jpg)
