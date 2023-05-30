import buildElement from './element-maker.js';
import buildHeader from './header.js';

const bodyElement = document.querySelector('BODY');
const contentContainerDiv = document.querySelector('.content');
const statement = 'someStatement';
function tabSwitch(event) {
  
  event.target.parentElement.childNodes.forEach((node)=>{
    node.classList.remove('active');
  })
  event.target.classList.add('active');
  // contentContainerDiv.innerHTML = '';
  if (event.target.id == 'home') {
    // createStuff1(contentContainerDiv);
    console.log(statement);
  }
  if (event.target.id == 'menu') {
    // createStuff2(contentContainerDiv);
    console.log('menu');
  }
  if (event.target.id == 'contact') {
    // createStuff3(contentContainerDiv);
    console.log('contact');
  }
}


const headerEl = buildHeader(tabSwitch);

bodyElement.prepend(headerEl);


