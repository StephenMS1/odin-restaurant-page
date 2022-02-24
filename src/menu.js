import hotDog from './hot dog.png';
import pupCakes from './pupcakes.jpg';
import turtleLoaf from './turtleLoaf.jpg';
import dolphinFruitCup from './dolphinFruitCup.jpg';

function menuPage(){
    let menuScreen = document.createElement('div');
    menuScreen.classList.add('menuPage');

    menuScreen.appendChild(createMenuItem('Hot Dog', 'Pupper bun holding a sausage!', hotDog));
    menuScreen.appendChild(createMenuItem('Turtle Soup Loaf', 'Turtle shaped loaf full of delicious caramelised french onion soup', turtleLoaf));
    menuScreen.appendChild(createMenuItem('Pupcakes', 'Pupper shaped pancakes with nutella and fruit!', pupCakes));
    menuScreen.appendChild(createMenuItem('Dolphin Fruit Cup', 'Mixture of the freshest forest fruits', dolphinFruitCup));

    return menuScreen;
}

function loadMenuPage(pageSpace){
    pageSpace.textContent = '';
    pageSpace.append(menuPage());
}

function createMenuItem(name, description, imgSrc){
    let itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    let itemName = document.createElement('h2');
    itemName.textContent = `${name}`;

    let itemDescription = document.createElement('p');
    itemDescription.textContent = `${description}`;

    let itemImage = document.createElement('img');
    itemImage.src = imgSrc;

    itemCard.append(itemImage, itemName, itemDescription)

    return itemCard;
;}

export default loadMenuPage;