import buildElement from './element-maker.js';
import contactImg from './images/contact.jpg';
export default function buildContact() {

  // large container
  const largeContainerEl = buildElement({type: 'div', classes: ['large-container']});
  const imgContainerEl = buildElement({type: 'div', classes: ['img-container', 'contact']});
  const imgEl = buildElement({type: 'img', classes: ['img', 'contact'], src: contactImg, alt: 'Cook in the kitchen'});
  const contactTitleEl = buildElement({type: 'h1', classes: ['contact', 'title'], innerText: 'Contact Us'});
  const subtitleEl = buildElement({type: 'h2', classes: ['get-in-touch', 'title'], innerText: 'Get In Touch'});

  imgContainerEl.appendChild(imgEl);
  imgContainerEl.appendChild(contactTitleEl);
  largeContainerEl.appendChild(imgContainerEl);
  largeContainerEl.appendChild(subtitleEl);
  

  // Get in touch section
  const contactContainerEl = buildElement({type: 'div', classes: ['contact', 'container']});
  const businessDetailsEl = buildElement({type: 'div', classes: ['business-details', ]});
  const sectionAddressEl = buildElement({type: 'div', classes: ['contact-section', 'address']});
  const sectionAddressTitle = buildElement({type: 'h3', classes: ['address', 'section-title', ], innerText: 'Address'})
  const sectionAddressP = buildElement({type: 'p', classes: ['address', 'contact'], innerText: '132 Ridge Highway, Heathcote, Sydney, Australia 2233'})

  sectionAddressEl.appendChild(sectionAddressTitle);
  sectionAddressEl.appendChild(sectionAddressP);
  businessDetailsEl.appendChild(sectionAddressEl);
  contactContainerEl.appendChild(businessDetailsEl);

  // Phone Section
  const sectionPhoneEl = buildElement({type: 'div', classes: ['contact-section', 'phone']});
  const sectionPhoneTitle = buildElement({type: 'h3', classes: ['Phone', 'section-title'], innerText: 'Phone'});
  const sectionPhoneP = buildElement({type: 'p', classes: ['Phone', 'contact'], innerText: '02 9520 8948'});

  sectionPhoneEl.appendChild(sectionPhoneTitle);
  sectionPhoneEl.appendChild(sectionPhoneP);
  businessDetailsEl.appendChild(sectionPhoneEl);
  
  // Open hours section
  const sectionHoursEl = buildElement({type: 'div', classes: ['contact-section', 'hours']});
  const sectionHoursTitle = buildElement({type: 'h3', classes: ['hours', 'section-title'], innerText: 'Opening Hours'});
  const sectionHoursP = buildElement({type: 'p', classes: ['hours', 'contact'], innerText: 'Mon - Thu:   12pm - 9pm'});
  const sectionHoursP1 = buildElement({type: 'p', classes: ['hours', 'contact'], innerText: 'Fri - Sat:   12pm - 11pm'});
  const sectionHoursP2 = buildElement({type: 'p', classes: ['hours', 'contact'], innerText: 'Sun:   4pm - 9pm'});

  sectionHoursEl.appendChild(sectionHoursTitle);
  sectionHoursEl.appendChild(sectionHoursP);
  sectionHoursEl.appendChild(sectionHoursP1);
  sectionHoursEl.appendChild(sectionHoursP2);
  businessDetailsEl.appendChild(sectionHoursEl);

  // form section
  const formContainerEl = buildElement({type: 'div', classes: ['contact', 'form-container']});
  const formEl = buildElement({type: 'form', classes: ['form', 'contact']});
  const nameInputContainerEl = buildElement({type: 'div', classes: ['form', 'input-container']});
  const nameInputLabel = buildElement({type: 'label', classes: ['form-label', 'name'], innerText: 'Name', attributes: [{for: 'name'}]});
  const nameInput = buildElement({type: 'input', classes: ['form', 'form-input'], id: 'name', attributes: [{type: 'text'}, {required: true}, {placeholder: 'Your Name'}]})

  // put name together
  nameInputContainerEl.appendChild(nameInputLabel);
  nameInputContainerEl.appendChild(nameInput);

  const emailInputContainerEl = buildElement({type: 'div', classes: ['form', 'input-container']});
  const emailInputLabel = buildElement({type: 'label', classes: ['form-label', 'email'], innerText: 'Email', attributes: [{for: 'Email'}]});
  const emailInput = buildElement({type: 'input', classes: ['form', 'form-input'], id: 'email', attributes: [{type: 'email'}, {required: true}, {placeholder: 'Your Email'}]})

  // put email together
  emailInputContainerEl.appendChild(emailInputLabel);
  emailInputContainerEl.appendChild(emailInput);

  const messageInputContainerEl = buildElement({type: 'div', classes: ['form', 'input-container']});
  const messageInputLabel = buildElement({type: 'label', classes: ['form-label', 'message'], innerText: 'Message', attributes: [{for: 'message'}]});
  const messageInput = buildElement({type: 'textarea', classes: ['form', 'form-input'], id: 'message', attributes: [{required: true}, {placeholder: 'Tell us what you think.'}]})

  // put textarea together
  messageInputContainerEl.appendChild(messageInputLabel);
  messageInputContainerEl.appendChild(messageInput);

  // BUTTON 
  const submitButton = buildElement({type: 'button', classes: ['form', 'button'], innerText: 'Submit', attributes: [{type: 'submit'}]});


  // peice entire form together
  contactContainerEl.appendChild(formContainerEl);
  formContainerEl.appendChild(formEl);
  formEl.appendChild(nameInputContainerEl);
  formEl.appendChild(emailInputContainerEl);
  formEl.appendChild(messageInputContainerEl);
  formEl.appendChild(submitButton);


  largeContainerEl.appendChild(contactContainerEl);

  return largeContainerEl;

}