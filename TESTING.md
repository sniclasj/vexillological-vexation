# Testing

## JEST

The game was built iteratively by utilising the JEST testing suite.

## Browser Compatibility

The game website has been successfully tested on the following browsers:
- Chrome
- Edge
- Safari (on personal mobile device - iPhone 11 Pro)

__Chrome Screenshots__

- Chrome Desktop Landing Page

![Landing Page](documentation/testing/vex-vex-chrome-desktop-landing-page.png)

- Chrome Desktop Game Page

![Game Page](documentation/testing/vex-vex-chrome-desktop-game-page.png)

- Chrome Desktop Results Summary Page

![Results Summary Page](documentation/testing/vex-vex-chrome-desktop-results-summary-page.png)

__Edge Screenshots__

- Edge Desktop Landing Page

![Landing Page](documentation/testing/vex-vex-edge-desktop-landing-page.png)

- Edge Desktop Game Page

![Game Page](documentation/testing/vex-vex-edge-desktop-game-page.png)

- Edge Desktop Results Summary Page

![Results Summary Page](documentation/testing/vex-vex-edge-desktop-results-summary-page.png)

__Safari (Mobile) Screenshots__

- Safari Mobile Landing Page

![Landing Page](documentation/testing/vex-vex-safari-mobile-landing-page.png)

- Safari Mobile Game Page

![Game Page](documentation/testing/vex-vex-safari-mobile-game-page.png)

- Safari Mobile Results Summary Page

![Results Summary Page](documentation/testing/vex-vex-safari-mobile-results-summary-page.png)

## Code Validation

### HTML

No errors were returned on any page when passing through the official W3C Validator as shown in the links below.
  - [W3C Validator Landing Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsniclasj.github.io%2Fvexillological-vexation%2Findex.html)
  - [W3C Validator Game Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsniclasj.github.io%2Fvexillological-vexation%2Fvex-vex.html)
  - [W3C Validator Results Summary Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsniclasj.github.io%2Fvexillological-vexation%2Ffinished.html)

### CSS

No errors or warnings were found on any page when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsniclasj.github.io%2Fvexillological-vexation%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings) as shown in the screenshot below.
![CSS Validator](documentation/testing/vex-vex-css-validation.png)

### Lighthouse

__Test Results: Landing Page__
![Landing Page Lighthouse Results](documentation/testing/sj-fitness-index-lighthouse-desktop.jpg)

__Test Results: Game Page__
![Game Page Lighthouse Results](documentation/testing/sj-fitness-pricing-lighthouse-desktop.jpg)

__Test Results: Results Summary__
![Results Summary Lighthouse Results](documentation/testing/sj-fitness-join-us-lighthouse-desktop.jpg)

The issue highlighted in the Lighthouse testing is due to the contrast of text colour in relation to background colour on the pricing.html page. This is discussed in the Unfixed Bugs section at the end of this document.

## Responsiveness

__Landing Page Page__

Large

![Landing Page Large](documentation/testing/sj-fitness-responsiveness-large.jpg)

Medium

![Landing Page Medium](documentation/testing/sj-fitness-responsiveness-medium.jpg)

Small

![Landing Page Small](documentation/testing/sj-fitness-responsiveness-small.jpg)

__Game Page__

Large

![Game Page Large](documentation/testing/sj-fitness-responsiveness-pricing-large.jpg)

Medium

![Game Page Medium](documentation/testing/sj-fitness-responsiveness-pricing-medium.jpg)

Small

![Game Page Small](documentation/testing/sj-fitness-responsiveness-pricing-small.jpg)

__Results Summary Page__

Large

![Results Summary Large](documentation/testing/sj-fitness-responsiveness-join-us-large.jpg)

Medium

![Results Summary Medium](documentation/testing/sj-fitness-responsiveness-join-us-medium.jpg)

Small

![Results Summary Small](documentation/testing/sj-fitness-responsiveness-join-us-small.jpg)

## User Story Tests

- As a user, I want to be able to read about how to play the game before playing.
- As a user, I want to be able to initiate the start of the game myself.
- As a user, I want to be able to intuitively know where to click to make my flag selection.
- As a user, I want to be able to see my performance within the game e.g. how many questions have I got correct/incorrect so far.
- As a user, I want to be able to avoid repetition of flags I have already guessed correctly.
- As a user, I want to be able to view the site on any device, so that I can see it on my phone, tablet, or desktop.

## Unfixed Bugs

- Console error module is not defined.
![Console Error](documentation/testing/vex-vex-console-reference-error.png)

- When 11/20 = 55% is scored, the percentage calculation shows decimal places. This only occurs on this specific score.
![55% Error](documentation/testing/vex-vex-fifty-five-percent-bug.png)