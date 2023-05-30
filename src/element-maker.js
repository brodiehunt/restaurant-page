export default function buildElement(elementFeatures) {
  let {type, classes, id, innerText, attributes, src, alt, eventFunction } = elementFeatures;

  const newElement = document.createElement(type);
  
  classes && classes.forEach((cssClass) => {
    newElement.classList.add(cssClass);
  })

  id && (newElement.id = id);

  innerText && (newElement.innerText = innerText);

  attributes && attributes.forEach((attribute) => {
    let [key, value] = Object.entries(attribute)[0];
    newElement[key] = value;
  });

  src && (newElement['src'] = src);

  alt && (newElement.alt = alt);

  eventFunction && newElement.addEventListener('click', eventFunction);

  return newElement;
}

