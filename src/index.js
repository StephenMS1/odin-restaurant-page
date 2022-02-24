import restaurant from './restaurant.jpg';
import githubLogo from './GitHub-Mark.png';
import './style.css';
import loadHomePage from './home';
import loadContactPage from './contact';
import loadMenuPage from './menu';

//trying to call functions from an object by passing string of function name to the pagegenerator? 
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
    homeButton.classList.add('active');
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')){
            return;
        }
        loadHomePage();
    })

    let menuButton = document.createElement('button');
    menuButton.classList.add('menuButton');
    menuButton.textContent ='Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')){
            return;
        }
        loadMenuPage();
    })

    let contactButton = document.createElement('button');
    contactButton.classList.add('contactButton');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')){
            return;
        }
        loadContactPage();
    })

    navigationPane.append(homeButton, menuButton, contactButton);
    
    
    return banner;
}

function activeNavigator() {
    let navButtons = Array.from(document.querySelectorAll('button'));
    navButtons.forEach(button => {
        button.addEventListener('click', function(e){
            let clickedButton = e.target;
            navButtons.forEach(button => {
                button.classList.remove('active');
            });
            clickedButton.classList.add('active');
        })
    })
}


function createPageSpace(pageFunctionsIndex) {
    let pageSpace = document.createElement('div');
    pageSpace.classList.add('pageSpace');
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

function generateWebPage(){
    webpage.appendChild(createHeader());
    webpage.appendChild(createPageSpace());
    webpage.appendChild(createFooter());
    loadHomePage();
    activeNavigator();
}

window.addEventListener('load', generateWebPage());