import restaurant from './restaurant.jpg';
import githubLogo from './GitHub-Mark.png';
import './style.css';
import loadHomePage from './home';
import loadContactPage from './contact';
import loadMenuPage from './menu';

const pageFunctions = {loadHomePage, loadContactPage, loadMenuPage};

let webpage = document.getElementById('content');


function createHeader() {
    let banner = document.createElement('div');
    banner.classList.add('banner');

    let nameOfRestaurant = document.createElement('h1');
    nameOfRestaurant.textContent = 'Bonnie\'s Bar';
    nameOfRestaurant.classList.add('titleText');
    banner.appendChild(nameOfRestaurant);

    let navigationPane = document.createElement('div');
    navigationPane.classList.add('navigationPane');
    banner.appendChild(navigationPane);

    let homeButton = document.createElement('button');
    homeButton.classList.add('homeButton');
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.classList.add('menuButton');
    menuButton.textContent ='Menu';

    let contactButton = document.createElement('button');
    contactButton.classList.add('contactButton');
    contactButton.textContent = 'Contact';

    navigationPane.append(homeButton, menuButton, contactButton);
    
    
    return banner;
}

function NavigationListeners() {
    let navButtons = Array.from(document.querySelectorAll('button'));
    console.log(navButtons);

    navButtons.forEach(button => {
        button.addEventListener('click', function(e){
            let clickedButton = e.target;
            navButtons.forEach(button => {
                button.classList.remove('active');
            });
            clickedButton.classList.add('active');
            if (clickedButton.classList.contains('active')){
                return
            }
            if (clickedButton.textContent == 'Home'){
                generateWebPage('loadHomePage');
            }
            else if (clickedButton.textContent == 'Menu'){
                generateWebPage('loadMenuPage');
            }
            else if (clickedButton.textContent == 'Contact'){
                generateWebPage('loadContactPage');
            }
        })
    })
}


function createPageSpace(pageFunctionsIndex) {
    let pageSpace = document.createElement('div');
    pageSpace.classList.add('pageSpace');
    pageFunctions[pageFunctionsIndex](pageSpace);
    return pageSpace;
}

function createFooter() {
    let footer = document.createElement('div');
    footer.classList.add('footer');

    let footerText = document.createElement('p');
    footerText.textContent = 'Copyright © 2022 stephenms1';
    
    let githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/StephenMS1'
    githubLink.target = 'blank';
    let githubImage = document.createElement('img');
    githubLink.appendChild(githubImage);
    githubImage.src = githubLogo;
    githubImage.classList.add('githubLogo')

    footer.append(footerText, githubLink);

    return footer;

}

function generateWebPage(pageFunctionsIndex){
    webpage.appendChild(createHeader());
    webpage.appendChild(createPageSpace(pageFunctionsIndex));
    webpage.appendChild(createFooter());
    NavigationListeners();
}

window.addEventListener('load', generateWebPage());