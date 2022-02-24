import chefBonImage from './land-img.jpg';

function homePage() {
    let homeScreen = document.createElement('div');
    homeScreen.classList.add('homePage');

    let chefBonnie = document.createElement('img');
    chefBonnie.classList.add('chefBonnie');
    chefBonnie.src = chefBonImage;

    homeScreen.appendChild(createText("Hi, I'm Bonnie and welcome to my restaurant"))
    homeScreen.appendChild(createText("I've been producing the finest cuisine since 2020"));
    homeScreen.appendChild(chefBonnie);
    homeScreen.appendChild(createText("I forage all the ingredients fresh from the forest every morning"));

    return homeScreen;
}

function createText(input){
    let text = document.createElement('p');
    text.textContent = input;
    return text;
}

function loadHomePage() {
    let pageSpace = document.querySelector('.pageSpace');
    pageSpace.innerHTML = '';
    pageSpace.appendChild(homePage());
}

export default loadHomePage;
