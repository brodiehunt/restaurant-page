import buildElement from './element-maker.js';
import twitterIcon from './images/twitter-48.png';
import facebookIcon from './images/facebook-3-48.png';
import instagramIcon from './images/instagram-48.png';

export default function buildFooter() {

  // Create elements for footer
  const footerEl = buildElement({type: 'footer', classes: ['footer']});
  const logoEl = buildElement({type: 'h2', classes: ['footer-logo'], innerText: 'ittle Ital'})
  const logoL = buildElement({type: 'span', classes: ['green'], innerText: 'L'});
  const logoY = buildElement({type: 'span', classes: ['red'], innerText: 'y'});
  const copyRightEl = buildElement({type: 'p', classes: ['footer-copyright'], innerText: "Copyright @little Italy"});
  const socialLinksEl = buildElement({type: 'div', classes: ['social-links']});
  const socialLinkFb = buildElement({type: 'a', classes: ['social-link-container', 'facebook'], href: 'https://www.facebook.com'});
  const socialLinkInsta = buildElement({type: 'a', classes: ['social-link-container', 'instagram'], href: 'https://www.instagram.com'});
  const socialLinkTwit = buildElement({type: 'a', classes: ['social-link-container', 'twitter'], href: 'https://www.twitter.com'});
  const socialIconFb = buildElement({type: 'img', classes: ['social-icon', 'facebook-icon'], alt: 'Facebook icon', src: facebookIcon });
  const socialIconInsta = buildElement({type: 'img', classes: ['social-icon', 'instagram-icon'], alt: 'Instagram icon', src: instagramIcon });
  const socialIconTwit = buildElement({type: 'img', classes: ['social-icon', 'twitter-icon'], alt: 'Twitter icon', src: twitterIcon });
  
  // Link Them together
  footerEl.appendChild(logoEl);
  logoEl.prepend(logoL);
  logoEl.appendChild(logoY);
  footerEl.appendChild(socialLinksEl);
  footerEl.appendChild(copyRightEl);
  socialLinkFb.appendChild(socialIconFb);
  socialLinkInsta.appendChild(socialIconInsta);
  socialLinkTwit.appendChild(socialIconTwit);
  socialLinksEl.appendChild(socialLinkFb);
  socialLinksEl.appendChild(socialLinkTwit);
  socialLinksEl.appendChild(socialLinkInsta);

  return footerEl;
}