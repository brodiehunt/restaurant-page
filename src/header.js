import buildElement from './element-maker.js';


export default function buildHeader(eventLisFunc) {
  
  const headerEl = buildElement({type: 'header', classes: ['header']});
  const navEl = buildElement({type: 'nav', classes: ['nav-bar']});
  const logoEl = buildElement({type: 'h1', classes: ['nav-logo'], innerText: 'Little Italy'});
  const navLinksEl = buildElement({type: 'ul', classes: ['nav-links']});
  const navLinkHomeEl = buildElement({type: 'li', classes: ['nav-link', 'active'], innerText: 'Home', id: 'home', eventFunc: eventLisFunc});
  const navLinkMenuEl = buildElement({type: 'li', classes: ['nav-link'], innerText: 'Menu', id: 'menu', eventFunc: eventLisFunc});
  const navLinkContactEl = buildElement({type: 'li', classes: ['nav-link'], innerText: 'Contact', id: 'contact', eventFunc: eventLisFunc});

  headerEl.appendChild(navEl);
  navEl.appendChild(logoEl);
  navEl.appendChild(navLinksEl);
  navLinksEl.appendChild(navLinkHomeEl);
  navLinksEl.appendChild(navLinkMenuEl);
  navLinksEl.appendChild(navLinkContactEl);

  return headerEl
}
  

