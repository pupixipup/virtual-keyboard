import '../assets/styles/style.css';

import '../assets/styles/variables.scss';

import { Keyboard } from './keys-list';

const newKeyboard = new Keyboard();
newKeyboard.logKey();
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
