// import buildElement from './element-maker.js';
import buildHeader from './header.js';
import buildFooter from './footer.js';
import buildHomePage from './homepage.js';
import buildMenu from './menupage.js';
import buildContact from './contactpage.js';

const bodyElement = document.querySelector('BODY');
const contentContainerDiv = document.querySelector('.content');


function tabSwitch(event) {
  
  event.target.parentElement.childNodes.forEach((node)=>{
    node.classList.remove('active');
  })
  event.target.classList.add('active');
  contentContainerDiv.innerHTML = '';
  if (event.target.id == 'home') {
    contentContainerDiv.appendChild(buildHomePage())
  }
  if (event.target.id == 'menu') {
    // createStuff2(contentContainerDiv);
    console.log('menu');
    contentContainerDiv.appendChild(buildMenu())
  }
  if (event.target.id == 'contact') {
    // createStuff3(contentContainerDiv);
    contentContainerDiv.appendChild(buildContact())
    console.log('contact');
  }
}


const headerEl = buildHeader(tabSwitch);
const footerEl = buildFooter();
const homePageEl = buildHomePage();

// populate html on load
contentContainerDiv.appendChild(homePageEl);
bodyElement.prepend(headerEl);
bodyElement.appendChild(footerEl);




