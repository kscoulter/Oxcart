# Brave UX Code Challenge



## Dear Next Developer
I set up base swatches with color names and hex values so you can tell immediately in the HTML which colors were being used. This is the only time I  use hypens in HTML/CSS (because a hex "#" means "id" in css).

I used camelcase for CSS ID's and classes but underscores in JavaScript to quickly identify what selectors and functions belonged to which code. The names tend to be long but I'd rather have you read a few more characters and wonder what I was doing and why.

I didn't use any official Regrex frameworks like Verify.js so the functions really only return true or false and toggle classes. If we're pushing this to a client server, a proper validation needs to be installed.


## Technologies Used

I started with HTML5 Boilerplate and stripped out the breakpoints and IE Contigencies. I've never really memorized these and it's amazing how much you forget when you depend on frameworks.



## Approach Taken

I started with a to-do list to break down what needed to happen. I ordered it according what I either needed to research first or what I knew was more important to have completed if the clock ran out.

- • Download HTML5 boiler plate for breakpoint templates
- • Username validation in plain JS: http://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript
- • Email Validation: http://mlitzinger.com/articles/password-validator-js/
- • Set up Documentation ReadMe.md
- • Spin up HTML
- • Style with CSS (small to large, no desktop)
- • Hook up form validation
- • Apply CSS3 animation classes to fake jQuery
- • Test in Chrome, Safari, iPhone, FireFox & BrowserStack for outdated browsers 
- • *Look up input form password obfiscation*
- • *Apply toggle

In terms of DRY coding I set up base swatches in CSS (Lines 70-92) that had the hex number as well as a descriptor so you could tell immediately in the HTML which colors were being used without having to refer to the css, but also eliminate repeated code. This is a trick I learned that can help triangulate what bugs exist.

I also wanted to keep acssability in mind as I built, so I added alt tags where possible (and time permitted).

I used camelcase for CSS ID's and classes but underscores in JavaScript to quickly identify what selectors and functions belonged to which code.



#Unsolved Problems

I ran out of time to do the icon and hide/show password, and the finer details of the CSS is not production quality. I wish I had had more time to fine tune the app. Further, the JavaScript is more cosmetic than it is functional, and not as DRY as I'd like.
