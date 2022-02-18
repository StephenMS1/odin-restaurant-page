import chefBonImage from './land-img.jpg';

function homePage() {
    let homeScreen = document.createElement('div');
    homeScreen.classList.add('homeScreen');

    let chefBonnie = document.createElement('img');
    chefBonnie.src = chefBonImage;

    homeScreen.appendChild(createText("Hi, I'm Bonnie and welcome to my restaurant"))
    homeScreen.appendChild(createText("I've been producing the finest cuisine since 2020"));
    homeScreen.appendChild(chefBonnie);
    homeScreen.appendChild(createText("I forage all the ingredients fresh from the forest every morning"));

    return homeScreen;
}

function createText(input){
    text = document.createElement('p');
    text.textContent = text
    return text;
}

function loadHomePage() {
    let webpage = document.getElementById('pageSpace');
    pageSpace.textContent= '';
    pageSpace.appendChild(homePage());
}

export default loadHomePage;
