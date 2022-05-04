import '../assets/styles/style.css';

import '../assets/styles/variables.scss';

import { Keyboard } from './keys-list';

window.addEventListener('load', () => {
  localStorage.currentLanguage = localStorage.currentLanguage || 'en';
});

const newKeyboard = new Keyboard();
newKeyboard.initializeKeyboardContainer();
newKeyboard.drawKeyboard(localStorage.currentLanguage);
newKeyboard.listenVirtualKeyboard();
newKeyboard.listenHardwareKeyboard();
newKeyboard.trackALtShift();

// document.addEventListener('click', () => {
//   const keyEvent = new KeyboardEvent('keypress', { key: 'Enter' });
//   document.body.dispatchEvent(keyEvent);
//   console.log(keyEvent);
// });

// document.body.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     document.querySelector('.inp').value = '1';
//   }
// });
