import restaurant from './restaurant.jpg';
import './style.css';
import loadHomePage from './home';

//banner including title and links for movement through dynamic pages   - THIS SHOULD GO ON OVER-ARCHING JS FILE for consistency across all dynamic sub menus.
let webpage = document.getElementById('content');

let banner = document.createElement('div');
banner.classList.add('banner');

let title = document.createElement('h1');
title.textContent = 'Bonnie\'s Bar';
title.classList.add('titleText');
banner.appendChild(title);

/* let restaurantImage = document.createElement('img');
restaurantImage.classList.add('backgroundImage');
restaurantImage.src = restaurant; */

let pageSpace = document.createElement('div');
pageSpace.classList.add('pageSpace');

webpage.append(banner);
//webpage.appendChild(restaurantImage);
webpage.appendChild(pageSpace);

