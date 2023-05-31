import buildElement from './element-maker.js';
import homepageImg from './images/homepage-img.jpg';
import aboutImg from './images/about-img.jpg';
export default function buildHomePage() {

  const entireContainer = buildElement({type: 'div', classes:['large-container']});
  // Create elements for the landing page
  const landingContainerEl = buildElement({type: 'div', classes: ['homepage-container']});
  const landingImgContainerEl = buildElement({type: 'div', classes: ['img-container', 'landing']});
  const landingImgEl = buildElement({type: 'img', classes: ['img', 'landing'], alt: 'Italian meal on a bench top', src: homepageImg});
  const landingContentContainerEl = buildElement({type: 'div', classes: ['content-container', 'landing']});
  const landingTitle = buildElement({type: 'h2', classes: ['landing', 'title'], innerText: 'Exquisite, hand-crafted Italian Cuisine'});
  const landingStatement = buildElement({type: 'p', classes: ['landing', 'statement'], innerText: 'Come and embrace the flavours of our Little Italy. Ignite your tastebuds with our delicious selection of cultural classics.'});
  const landingButtonEl = buildElement({type: 'button', classes: ['landing', 'button'], innerText: 'Our Menu'});
  const styleDiv = buildElement({type: 'div', classes: ['landing', 'style-bg']});

  // append them to each other;
  landingContainerEl.appendChild(landingImgContainerEl);
  landingContainerEl.appendChild(landingContentContainerEl);
  landingContainerEl.appendChild(styleDiv);
  landingImgContainerEl.appendChild(landingImgEl);
  landingContentContainerEl.appendChild(landingTitle);
  landingContentContainerEl.appendChild(landingStatement);
  landingContentContainerEl.appendChild(landingButtonEl);

  // create about section elements
  const aboutPageTitleEl = buildElement({type: 'h2', classes: ['about', 'title'], innerText: 'Our Origin Story'});
  const aboutPageContainerEl = buildElement({type: 'div', classes: ['container', 'about']});
  const aboutPageImgContainerEl = buildElement({type: 'div', classes: ['img-container', 'about']});
  const aboutPageImgEl = buildElement({type: 'img', classes: ['img', 'about'], alt: 'Our head Chef', src: aboutImg });
  const aboutPageImgCaption = buildElement({type: 'p', classes: ['about', 'caption'], innerText: 'Anatoly in the Kitchen'});
  const aboutContentContainerEl = buildElement({type: 'div', classes: ['content-container', 'about']});
  const aboutStatement = buildElement({type: 'p', classes: ['about', 'statement'], innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget varius mauris. Suspendisse potenti. Nam quis lorem ac enim vulputate tincidunt. Maecenas ornare ligula ac consequat ullamcorper. Nulla quis fermentum turpis, sit amet rutrum tellus. Pellentesque magna nibh, fringilla vel pellentesque eu, accumsan vitae nisl. Quisque vitae turpis nisi. Integer porttitor nisi ac turpis elementum laoreet. Pellentesque ultricies nisi a urna commodo gravida. Aliquam at ligula in justo mattis elementum at sit amet quam. Etiam eget orci pellentesque, hendrerit metus vitae, semper velit. In volutpat eu arcu at interdum. Fusce vitae ex ut nisl fermentum maximus. Maecenas lacinia commodo nibh. Vivamus sapien sapien, scelerisque pellentesque gravida nec, rhoncus vel justo.'});
  
  // append about section together
  aboutPageContainerEl.appendChild(aboutPageImgContainerEl);
  aboutPageContainerEl.appendChild(aboutContentContainerEl);
  aboutPageImgContainerEl.appendChild(aboutPageImgEl);
  aboutPageImgContainerEl.appendChild(aboutPageImgCaption);
  aboutContentContainerEl.appendChild(aboutStatement);

  entireContainer.appendChild(landingContainerEl);
  entireContainer.appendChild(aboutPageTitleEl);
  entireContainer.appendChild(aboutPageContainerEl);
  return entireContainer;
}