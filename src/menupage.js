import buildElement from './element-maker.js';

export default function buildMenu() {

  // Create the elements
  const largeContainerEl = buildElement({type: 'div', classes: ['large-container']});
  const menuTitleEl = buildElement({type: 'h1', classes: ['menu', 'title'], innerText: 'Our Menu'});
  const menuContainerEl = buildElement({type: 'div', classes: ['menu', 'container']});

  // one section of menu -starters
  const menuSectionEl = buildElement({type: 'div', classes: ['menu', 'section']});
  const menuSectionImgEl = buildElement({type: 'img', classes: ['menu', 'img'], src: '/src/images/starters.jpg', alt: 'pita bread'})
  const menuSectionContentContainerEl = buildElement({type: 'div', classes: ['section', 'content']});
  const menuSectionTitleEl = buildElement({type: 'h2', classes: ['section', 'title'], innerText: 'Starters'})
  const menuItemContainerEl = buildElement({type: 'div', classes: ['item', 'container']})
  const menuItemTitleEL = buildElement({type: 'h3', classes: ['item', 'title'], innerText: "Item 1"})
  const menuItemPriceEl = buildElement({type: 'div', classes: ['item', 'price'], innerText: '$0.00'});
  const menuItemDescriptionEl = buildElement({type: 'p', classes: ['item', 'description'], innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget varius mauris. Suspendisse potenti. Nam'})

  // compose menu item - only need 1 menu item and just repeat throughout the whole menu
  menuItemContainerEl.appendChild(menuItemTitleEL);
  menuItemContainerEl.appendChild(menuItemPriceEl);
  menuItemContainerEl.appendChild(menuItemDescriptionEl);

  // compose menu section starts
  menuSectionEl.appendChild(menuSectionImgEl);
  menuSectionEl.appendChild(menuSectionContentContainerEl)
  menuSectionContentContainerEl.appendChild(menuSectionTitleEl);
  menuSectionContentContainerEl.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl.appendChild(menuItemContainerEl.cloneNode(true));
  
  // second menu section - mains
  const menuSectionEl2 = buildElement({type: 'div', classes: ['menu', 'section']});
  const menuSectionImgEl2 = buildElement({type: 'img', classes: ['menu', 'img'], src: '/src/images/pasta1.jpg', alt: 'Bowl of pasta'});
  const menuSectionContentContainerEl2 = buildElement({type: 'div', classes: ['section', 'content']});
  const menuSectionTitleEl2 = buildElement({type: 'h2', classes: ['section', 'title'], innerText: 'Mains'})

  // compose menu section - mains 
  menuSectionEl2.appendChild(menuSectionImgEl2);
  menuSectionEl2.appendChild(menuSectionContentContainerEl2)
  menuSectionContentContainerEl2.appendChild(menuSectionTitleEl2);
  menuSectionContentContainerEl2.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl2.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl2.appendChild(menuItemContainerEl.cloneNode(true));
  
  // Third menu section -pizza
  const menuSectionEl3 = buildElement({type: 'div', classes: ['menu', 'section']});
  const menuSectionImgEl3 = buildElement({type: 'img', classes: ['menu', 'img'], src: '/src/images/pizza.jpg', alt: 'Margherita Pizza'})
  const menuSectionContentContainerEl3 = buildElement({type: 'div', classes: ['section', 'content']});
  const menuSectionTitleEl3 = buildElement({type: 'h2', classes: ['section', 'title'], innerText: 'Pizza'})

  // compose menu section - pizza
  menuSectionEl3.appendChild(menuSectionImgEl3);
  menuSectionEl3.appendChild(menuSectionContentContainerEl3)
  menuSectionContentContainerEl3.appendChild(menuSectionTitleEl3);
  menuSectionContentContainerEl3.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl3.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl3.appendChild(menuItemContainerEl.cloneNode(true));

  // Fourth menu Section -desserts
  const menuSectionEl4 = buildElement({type: 'div', classes: ['menu', 'section']});
  const menuSectionImgEl4 = buildElement({type: 'img', classes: ['menu', 'img'], src: '/src/images/starters.jpg', alt: 'pita bread'})
  const menuSectionContentContainerEl4 = buildElement({type: 'div', classes: ['section', 'content']});
  const menuSectionTitleEl4 = buildElement({type: 'h2', classes: ['section', 'title'], innerText: 'Desserts'});

  // compose menu section - desserts 
  menuSectionEl4.appendChild(menuSectionImgEl4);
  menuSectionEl4.appendChild(menuSectionContentContainerEl4)
  menuSectionContentContainerEl4.appendChild(menuSectionTitleEl4);
  menuSectionContentContainerEl4.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl4.appendChild(menuItemContainerEl.cloneNode(true));
  menuSectionContentContainerEl4.appendChild(menuItemContainerEl.cloneNode(true));

  // join menu sections to compose full menu 
  menuContainerEl.appendChild(menuSectionEl);
  menuContainerEl.appendChild(menuSectionEl2);
  menuContainerEl.appendChild(menuSectionEl3);
  menuContainerEl.appendChild(menuSectionEl4);

  // link the entire thing into the large container

  largeContainerEl.appendChild(menuTitleEl);
  largeContainerEl.appendChild(menuContainerEl);

  return largeContainerEl;
}