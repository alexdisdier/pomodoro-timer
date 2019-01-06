# Synopsis

This is a Pomodoro Clock using React.

![screenshot of the Pomodoro clock](/src/screenshot.jpg?raw=true "screenshot of a Pomodoro clock")

## Usage example

See a live version running this template - https://alexdisdier.github.io/pomodoro-timer/

## Guideline and Challenges

### Guideline

:art: Style
* Gradient background
* Avenir font style
* Work will be of red descendant
* Break will be of blue descendant

:wrench: Functionalities
* Settings menu (slide right to left)
  * set time to focus
  * set time to break
  * set up to 4 Cycles
  * reset to default
* Display Screens (red or blue)
  * Big Ellipse should color countdown progression
  * Inside Big Ellipse, we can see the time and a text representing the state
  * Small Ellipse represents the cycles
  * Play/ Pause Button
  * Above the Button, we should see a motivational sentence

### Challenges

* Finding the right directory structure for my app before coding the design (figma). 
* Deciding between a state and a functional component. 
* Countdown timer
* Countdown Cycles
* Color cycles ellipse if done
* Slide Toggle settings 

Once I have my directory structure, I'll code the design I made in Figma

## Directory Structure

```bash

pomodoro-clock
├── .git
├── build
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── Timer
│   │   ├── Cycle
│   │   ├── Settings
│   ├── containers
│   │   ├── Pomodoro.css
│   │   ├── Pomodoro.js
│   │   ├── Pomodoro.test.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Built With

* html
* scss
* [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
* [React.js](https://reactjs.org/docs/hello-world.html)
* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
* [Figma](https://www.figma.com/file/YBeuYLtXG7TJWOaQIG61DCjQ/Pomodoro-web-app?node-id=0%3A1)

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## Acknowledgments

* This is part of Front End Libraries Projects in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock)

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* List of github emoji code [emoji](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

* (ClearIntervall doesn't work)[https://stackoverflow.com/questions/8184135/clearinterval-doesnt-work]

* (Building a progress ring component)[https://css-tricks.com/building-progress-ring-quickly/]