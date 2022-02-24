import hotDog from './hot dog.png'

function menuPage(){
    let menuScreen = document.createElement('div');
    menuScreen.classList.add('menuPage');

    menuScreen.appendChild(createMenuItem('Hot Dog', 'Pupper bun holding a sausage!'));

    return menuScreen;
}

function loadMenuPage(pageSpace){
    pageSpace.textContent = '';
    pageSpace.append(menuPage());
}

function createMenuItem(name, description){
    let itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    let itemName = document.createElement('h2');
    itemName.textContent = `${name}`;

    let itemDescription = document.createElement('p');
    itemDescription.textContent = `${description}`;

    let itemImage = document.createElement('img');
    itemImage.src = hotDog;

    itemCard.append(itemImage, itemName, itemDescription)

    return itemCard;
;}

export default loadMenuPage;