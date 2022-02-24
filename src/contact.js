function contactPage(){
    let contactScreen = document.createElement('div');
    contactScreen.classList.add('contactPage');
    

    let phoneNumber = createText('📞  123-456-789');

    let emailAddress = createText('✉  BonBonBar@notreallyanemail.com');

    let googleMapDiv = document.createElement('div');
    googleMapDiv.classList.add('map');
    googleMapDiv.innerHTML = `
    <iframe
    src="https://maps.google.com/maps?q=Ardington&t=&z=9&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    frameborder="0"
    style="border: 0"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>`;
    

    contactScreen.append(phoneNumber, emailAddress, googleMapDiv);

    return contactScreen;
}

function loadContactPage(){
    let pageSpace = document.querySelector('.pageSpace');
    pageSpace.innerHTML = '';
    pageSpace.append(contactPage());
}

function createText(input){
    let text = document.createElement('p');
    text.textContent = input;
    return text;
}

export default loadContactPage;