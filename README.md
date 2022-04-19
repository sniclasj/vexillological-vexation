# Vexillological Vexation!

'Vexillological Vexation!' is a web based flag guessing game. Players are presented with a question along with images of two different flags however only one of the flag images correctly matches the country in the question. The player must then click on the flag they believe to be correct. If they have selected the correct flag, the correct score tally will increase by one. If they have selected the incorrect flag, the incorrect score tally will increase by one. The game ends after 20 questions and players are shown how many questions out of 20 they got correct in a numerical and percentage format. The game is aimed all ages.

![Responsive Mockup](documentation/testing/vex-vex-responsive-mock-up.png)

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

The body has a background colour of _Dark Liver_ to allow the content boxes to stand out. The content boxes have a background colour of _Burgundy_ with a border and text colour of _Middle Yellow_.
This colour scheme is inspired by the colour scheme of the video game Crash Bandicoot!

![Crash Bandicoot](documentation/testing/vex-vex-crash-bandicoot.png).

The colour scheme below was generated using [coolors](https://coolors.co/).

![Coolors Colour Scheme](documentation/testing/vex-vex-coolors.png)

### Typography

The font selected for the website was _Rakkas_ which was imported from [Google Fonts](https://fonts.google.com/specimen/Rakkas).

This font was also selected as it reminded me of the font used in the famously frustrating game 'Crash Bandicoot'. I could imagine players of my game becoming frustrated at selecting the incorrect flag and decided that this font was therefore a good choice.

### Wireframes

__Large Screen Landing Page Wireframe__
![Landing Page Large Screen Wireframe](documentation/wireframes/vex-vex-wireframe-landing-page-large.jpg)

__Large Screen Game Page Wireframe__
![Game Page Large Screen Wireframe](documentation/wireframes/vex-vex-wireframe-game-page-large.jpg)

__Large Screen Results Summary Wireframe__
![Results Summary Large Screen Wireframe](documentation/wireframes/vex-vex-wireframe-results-summary-page-large.jpg)

__Medium Screen and Below All Pages Wireframe__
![All Pages Medium and Below Wireframe](documentation/wireframes/vex-vex-wireframe-all-pages-medium-and-below.jpg)

## Features 

### Existing Features

__Favicon__

This image features on the browser tab for all pages. The favicon is a mini version of the waving flags gif utilised on buttons within the game.

![Favicon](documentation/testing/vex-vex-favicon.png)

__Landing Page__

The home/landing page contains a the title of the game, a box with a heading of 'How to Play' and a box below with specific game instructions.
The final element on the landing page is a large start button which contains an animation of multiple flags fluttering on repeat. This is to draw the user's attention to the start button to make it clear that this is how the game can be initiated.

![Landing Page](documentation/testing/vex-vex-landing-page.png)

__Game Page__

The top of the game page maintains visibility of the game's title. Boxes displaying tallies for correct and incorrect answers are located below the title. Beneath the score tally boxes are boxes displaying the question number and the name of the country whose flag must be identified. Finally, two clickable buttons are located below the box containing the country name, and it is these buttons which display the flag image options for the user to choose between.

![Game Page](documentation/testing/vex-vex-game-page.png)

__Results Summary Page__

Once the user has answered their 20th question, the results summary page will be displayed. This page congratulates the user on finishing the game and summarises the user's score numerically e.g. 12/20 and in a percentage format e.g. 60%.
This page contains two clickable buttons, namely, 'Play Again' and 'No thanks...'. These buttons have the sane format as the 'Start' button located on the landing page to maintain consistency. If the 'Play Again' button is clicked, the user will be directed to a new round of questions. If the 'No thanks...' button is clicked, the user will be directed back to the landing page where they can start a new game whenever they are ready.

![Results Summary](documentation/testing/vex-vex-results-summary-page.png)

### Features Left to Implement

A future feature to implement would be COMPLETE LATER.

## Technologies Used

- [Git](https://www.atlassian.com/git) - used for version control.
- [GitHub](https://github.com/) - used to secure my code online.
- [Gitpod](https://www.gitpod.io/) - used as the cloud-based IDE. 
- [GitHub Pages](https://github.com/sniclasj/vexillological-vexation/deployments/activity_log?environment=github-pages) - used to deploy the site.
- [amiresponsive](http://ami.responsivedesign.is/#) - used for the mockup image.
- [HTML](https://en.wikipedia.org/wiki/HTML) - used to write the code for the website.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - used to write the code for the website.
- [CSS](https://en.wikipedia.org/wiki/CSS) - used to style the website.
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/#bootstrapcdn) - used to create a grid structure for the website.

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

- `git clone https://github.com/sniclasj/vexillological-vexation.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sniclasj/sj-vexillological-vexation)

## Credits 

### Content 

INSERT CODE CREDITS HERE.

### Media

INSERT ANY MEDIA HERE.

### Acknowledgements

I would like to thank my Code Institute mentor Tim Nelson for his support during the course of this project.

I would also like to thank the Code Institute tutor team for the assistance provided during the course of this project.