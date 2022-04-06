# Vexillological Vexation!

'Vexillological Vexation!' is a web based flag guessing game. Players are presented with a question along with images of two different flags however only one of the flag images correctly matches the country in the question. The player must then click on the flag they believe to be correct. If they have selected the correct flag, the correct score tally will increase by one. If they have selected the incorrect flag, the incorrect score tally will increase by one. The game ends after 20 questions and players are shown how many questions out of 20 they got correct in a numerical and percentage format. The game is aimed all ages.

![Responsive Mockup](documentation/testing/sj-fitness-responsive-mock-up.jpg)

## User Stories

- As a user, I want to be able to read about how to play the game before playing.
- As a user, I want to be able to initiate the start of the game myself.
- As a user, I want to be able to intuitively know where to click to make my flag selection.
- As a user, I want to be able to see my performance within the game e.g. how many questions have I got correct/incorrect so far.
- As a user, I want to be able to avoid repetition of flags I have already guessed correctly.
- As a user, I want to be able to view the site on any device, so that I can see it on my phone, tablet, or desktop.

## UX

The aim of my site design was to be as simple, clear and concise as possible.

The landing page contains the title of the game, instructions of how to play and a large 'Start' button to draw the player's attention to the element which will allow them to begin the game.

The page where the game is played is streamlined to the title of the game, a box to tally correct answers, a box to tally incorrect answers, a box detailing the question number, a box detailing the question, and two clickable buttons displaying the flag option images.

Finally, when the 20th question has been answered, the page updates to display the results summary page which contains a box congratulating the user for finishig the game, a summary of their numerical score out of 20 which is also expressed as a percentage along with two clickable buttons namely 'Play Again' and 'No thanks...'. Clicking 'Play Again' will take the user to a new game page and a new 'Question 1' where as clicking 'No thanks...' will take the user back to the landing page.

The website is designed to react responsively when the screen size decreases to medium and below.

When the screen size decreases beyond the medium breakpoint, any columns which are usually adjacent to each other on a large screen will stack on top of each other.

### Colour Scheme

The body has a background colour of _Davys Grey_ to convey an industrial theme. The text colour is _Cultured_ to allow the text to stand out against the darker background.

The navbar and footer have a _Black_ background with _Mikado Yellow_ text. This allows the navbar and footer to stand out against the body and the _Mikado Yellow_ text within the _Black_ navbar allows key information and icons to stand out across all pages. Any links within the body text e.g. 'Join Us' are also highlighted in _Mikado Yellow_ to maximise visibility.

The colour scheme below was generated using [coolors](https://coolors.co/).

![Coolors Colour Scheme](documentation/testing/sj-fitness-coolors.jpg)

### Typography

The font selected for the website was _Rakkas_ which was imported from [Google Fonts](https://fonts.google.com/specimen/Rakkas).

This font was selected as it was striking and it reminded me of the font used in the famously frustrating game 'Crash Bandicoot'. I could imagine players of my game becoming frustrated at selecting the incorrect flag and decided that this font was therefore a good choice.

### Wireframes

__Desktop/Large Screen Home Wireframe__
![Desktop Home Wireframe](documentation/wireframes/desktop-home-wireframe.jpg)

__Desktop/Large Screen Pricing Wireframe__
![Desktop Home Wireframe](documentation/wireframes/desktop-pricing-wireframe.jpg)

__Desktop/Large Screen Join Us Wireframe__
![Desktop Home Wireframe](documentation/wireframes/desktop-join-us-wireframe.jpg)

__Medium Screen and Below Wireframe__
![Desktop Home Wireframe](documentation/wireframes/medium-and-below-wireframe.jpg)

## Features 

### Existing Features

__Favicon__

This image features on the browser tab for all pages.

![Favicon](documentation/testing/sj-fitness-favicon.png)

__Landing Page__

The home/landing page contains a photograph of a person grabbing a barbell ready to lift it with the SJ Fitness motto of 'Better Starts Today' on a banner above. This motto is present to convey that the aim of the gym is to improve their fitness and engcourages the user to start their journey as soon as possible. 

![Landing Page](documentation/testing/sj-fitness-landing-page.jpg)

__Game Page__

The pricing page has a brief explanation at the top of the page below the navigation bar which also contains a hyperlink to the Join Us page so that the user can immediately navigate to sign up.

![Pricing Intro](documentation/testing/sj-fitness-pricing-intro.jpg)

__Results Summary Page__

This page will allow the user to join SJ Fitness. The user will be able select their desired membership type whilst also being asked to provide their full name and email address.

![Join Us Form](documentation/testing/sj-fitness-join-us-form.jpg)

### Features Left to Implement

A future feature to implement would be the embedding of fitness related videos which loop on all pages as opposed to the Join Us page only, a gallery to showcase people enjoying the experience of exercising at SJ Fitness and a timetable of classes so clients can plan their week of exercise.

## Technologies Used

- [Git](https://www.atlassian.com/git) - used for version control.
- [GitHub](https://github.com/) - used to secure my code online.
- [Gitpod](https://www.gitpod.io/) - used as the cloud-based IDE. 
- [GitHub Pages](https://github.com/sniclasj/sj-fitness/deployments/activity_log?environment=github-pages) - used to deploy the site.
- [amiresponsive](http://ami.responsivedesign.is/#) - used for the mockup image.
- [HTML](https://en.wikipedia.org/wiki/HTML) - used to write the code for the website.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - used to write the code for the website.
- [CSS](https://en.wikipedia.org/wiki/CSS) - used to style the website.
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/#bootstrapcdn) - used to create a grid structure for the website.
- [CSS Root Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - used to represent colours in style.css.

## Testing

To view all testing documentation, please refer to [TESTING.md](TESTING.md)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Vexillological Vexation!](https://sniclasj.github.io/vexillological-vexation/index.html)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/sniclasj/sj-fitness.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sniclasj/sj-fitness)

## Credits 

### Content 

In order to create a placeholder for my dropdown list on the Join Us page, I utilised and modified the following code taken from [Stack Overflow](https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box).

In order to ensure the footer remains 'stuck' to the bottom of all pages, I utilised the following code taken from [CSS Tricks](https://css-tricks.com/a-clever-sticky-footer-technique/).

### Media

The photo used on the landing/home page was taken from [Simplifaster](https://simplifaster.com/articles/weightlifting-progressions-tall-long-limbed-athletes/).

The icons used for the Pricing tiers and for the social media icons in the footer were taken from [Font Awesome](https://fontawesome.com/).

The video used on the Join Us page was taken from [Pexels](https://www.pexels.com/video/silhouette-of-friends-doing-high-five-8692158/).

### Acknowledgements

I would like to thank my Code Institute mentor Tim Nelson for his support during the course of this project.

I would also like to thank the Code Institute tutor team for the assistance provided during the course of this project.