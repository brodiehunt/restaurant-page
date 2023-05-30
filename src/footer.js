import buildElement from './element-maker.js';


export default function buildFooter() {

  // Create elements for footer
  const footerEl = buildElement({type: 'footer', classes: ['footer']});
  const logoEl = buildElement({type: 'h2', classes: ['footer-log0'], innerText: 'Little Italy'})
  const copyRightEl = buildElement({type: 'p', classes: ['footer-copyright'], innerText: "Copyright @little Italy"});
  const socialLinksEl = buildElement({type: 'div', classes: ['social-links']});
  const socialLinkFb = buildElement({type: 'a', classes: ['social-link-container', 'facebook'], href: 'www.facebook.com'});
  const socialLinkInsta = buildElement({type: 'a', classes: ['social-link-container', 'instagram'], href: 'www.instagram.com'});
  const socialLinkTwit = buildElement({type: 'a', classes: ['social-link-container', 'twitter'], href: 'www.twitter.com'});
  const socialIconFb = buildElement({type: 'img', classes: ['social-icon', 'facebook-icon'], alt: 'Facebook icon', src: '/src/images/facebook.png'});
  const socialIconInsta = buildElement({type: 'img', classes: ['social-icon', 'instagram-icon'], alt: 'Instagram icon', src: '/src/images/instagram-logo.png'});
  const socialIconTwit = buildElement({type: 'img', classes: ['social-icon', 'twitter-icon'], alt: 'Twitter icon', src: '/src/images/twitter.png'});
  
  // Link Them together
  footerEl.appendChild(logoEl);
  footerEl.appendChild(socialLinksEl);
  footerEl.appendChild(copyRightEl);
  socialLinkFb.appendChild(socialIconFb);
  socialLinkInsta.appendChild(socialIconInsta);
  socialLinkTwit.appendChild(socialIconTwit);
  socialLinksEl.appendChild(socialLinkFb);
  socialLinksEl.appendChild(socialLinkInsta);
  socialLinksEl.appendChild(socialLinkTwit);

  return footerEl;
}