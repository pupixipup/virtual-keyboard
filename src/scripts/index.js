import '../assets/styles/style.css';

import '../assets/styles/variables.scss';

import { Keyboard } from './keys-list';

window.addEventListener('load', () => {
  const textarea = document.createElement('div');
  textarea.innerHTML = '<h1 class="note">Переключение языка на Shift Alt (Windows)</h1>  <textarea id="text-area" cols="30" autofocus rows="10"></textarea>';
  document.body.prepend(textarea);
  localStorage.currentLanguage = localStorage.currentLanguage || 'en';
});

const newKeyboard = new Keyboard();
newKeyboard.initializeKeyboardContainer();
newKeyboard.drawKeyboard(localStorage.currentLanguage);
newKeyboard.listenVirtualKeyboard();
newKeyboard.listenHardwareKeyboard();
newKeyboard.trackALtShift();
newKeyboard.inputCharacter();

alert('Pull Request link: https://github.com/pupixipup/virtual-keyboard/pull/1');
>>>>>>> Stashed changes
