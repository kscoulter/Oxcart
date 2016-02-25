# Bartlet for America
Code Challenge

## Approach
I started with small screens first, and the built out to desktop. Given that the average voter might not be in a high-speed internet corridor, I disabled the large photo on mobile for faster load time.

I also used SVGs where possible with raster fallback images so the graphics would look crisp on retina devices.

When developing in Sass, I added a SCSS partial called guides wich is commented out in the styles.scss, but it can be activated to show which sections are which.

Each section is further broken up into partials for quick editing and debugging.

Most animations were homemade, but I did import Animate.css for some fancier transitions in.

### Dear Future Developer
TL;DR: Custom styles start with "_", most things are alphabetized, animations optional, yes, there is a Sass Sourcemap.

All my styles start with an "_", so you'll know what I added and where to look (customStyles.scss). Assume all other classes and ID's are from Bootstrap.

I tried to alphabetize the styles where I could for ease of use to find.

The animations are an optional import. The site functions fine without them but they are a separate partial and each behavior is a different module.

I also added a Sass sourcemap in the event you can't find it in the partials by name.

## Local Installation Instructions
* Clone or download zip
* cd into root
* run "npm install"
* run "gulp" 