import buildElement from './element-maker.js';

let object = {type: 'input', classes: ['class1', 'class2'], id: 'newId', attributes: [{type: 'text'}, {name: 'input1'}]};

let newDiv = buildElement(object);
console.log(newDiv);
const bodyElement = document.querySelector('BODY');
const contentContainerDiv = document.querySelector('.content');

function createStuff1(containerElement) {
  let newContent = document.createElement('div');
  newContent.innerText = 'new stuff 1 w00!'
  containerElement.appendChild(newContent);
}

function createStuff2(containerElement) {
  let newContent = document.createElement('div');
  newContent.innerText = 'new stuff 2 w00!'
  containerElement.appendChild(newContent);
}

function createStuff3(containerElement) {
  let newContent = document.createElement('div');
  newContent.innerText = 'new stuff 3 w00!'
  containerElement.appendChild(newContent);
}

function createHeader(container) {
  const headerEl = document.createElement('header');
  headerEl.classList.add('header');


  const navEl = document.createElement('nav');
  navEl.classList.add('nav-bar');


  const logoEl = document.createElement('h1');
  logoEl.classList.add('nav-logo');
  logoEl.innerHTML = `<span class='green'>L</span>ittle Ital<span class='red'>y</span>`;

  const navLinksEl = document.createElement('ul');
  navLinksEl.classList.add('nav-links');

  const navLinkHome = document.createElement('li');
  navLinkHome.classList.add('nav-link', 'active');
  navLinkHome.id = 'home';
  navLinkHome.innerText = 'Home';

  const navLinkMenu = document.createElement('li');
  navLinkMenu.classList.add('nav-link');
  navLinkMenu.id = 'menu';
  navLinkMenu.innerText = 'Menu'

  const navLinkContact = document.createElement('li');
  navLinkContact.classList.add('nav-link');
  navLinkContact.id = 'contact';
  navLinkContact.innerText = "Contact";

  navLinksEl.appendChild(navLinkHome);
  navLinksEl.appendChild(navLinkMenu);
  navLinksEl.appendChild(navLinkContact);

  navLinksEl.childNodes.forEach((node) => {
    node.addEventListener('click', (event) => {
      event.target.parentElement.childNodes.forEach((node)=>{
        node.classList.remove('active');
      })
      event.target.classList.add('active');
      contentContainerDiv.innerHTML = '';
      if (event.target.id == 'home') {
        createStuff1(contentContainerDiv);
      }
      if (event.target.id == 'menu') {
        createStuff2(contentContainerDiv);
      }
      if (event.target.id == 'contact') {
        createStuff3(contentContainerDiv);
      }
      
    });
  });
 
  navEl.appendChild(logoEl);
  navEl.appendChild(navLinksEl);
  
  headerEl.appendChild(navEl);

  container.prepend(headerEl);
}



createHeader(bodyElement); 
createStuff1(contentContainerDiv);

contentContainerDiv.appendChild(newDiv);