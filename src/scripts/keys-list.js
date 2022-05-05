export class Keyboard {
  constructor() {
    this.isAltPressed = false;
    this.isShiftPressed = false;
    this.isCaps = false;
    this.keysList = [
      [
        {
          key: 'Backquote',
          en: '`',
          ru: 'ё',
          code: '',
        },
        {
          key: 'Digit1',
          en: '1',
          ru: '1',
          code: '',
        },
        {
          key: 'Digit2',
          en: '2',
          ru: '2',
          code: '',
        },
        {
          key: 'Digit3',
          en: '3',
          ru: '3',
          code: '',
        },
        {
          key: 'Digit4',
          en: '4',
          ru: '4',
          code: '',
        },
        {
          key: 'Digit5',
          en: '5',
          ru: '5',
          code: '',
        },
        {
          key: 'Digit6',
          en: '6',
          ru: '6',
          code: '',
        },
        {
          key: 'Digit7',
          en: '7',
          ru: '7',
          code: '',
        },
        {
          key: 'Digit8',
          en: '8',
          ru: '8',
          code: '',
        },
        {
          key: 'Digit9',
          en: '9',
          ru: '9',
          code: '',
        },
        {
          key: 'Digit0',
          en: '0',
          ru: '0',
          code: '',
        },
        {
          key: 'Minus',
          en: '-',
          ru: '-',
          code: '',
        },
        {
          key: 'Equal',
          en: '=',
          ru: '=',
          code: '',
        },
        {
          key: 'Backspace',
          en: 'Backspace',
          ru: 'Backspace',
          code: '8',
        },
      ],
      [
        {
          key: 'Tab',
          en: 'Tab',
          ru: 'Tab',
          code: '9',
        },
        {
          key: 'KeyQ',
          en: 'q',
          ru: 'й',
          code: '',
        },
        {
          key: 'KeyW',
          en: 'w',
          ru: 'ц',
          code: '',
        },
        {
          key: 'KeyE',
          en: 'e',
          ru: 'у',
          code: '',
        },
        {
          key: 'KeyR',
          en: 'r',
          ru: 'к',
          code: '',
        },
        {
          key: 'KeyT',
          en: 't',
          ru: 'е',
          code: '',
        },
        {
          key: 'KeyY',
          en: 'y',
          ru: 'н',
          code: '',
        },
        {
          key: 'KeyU',
          en: 'u',
          ru: 'г',
          code: '',
        },
        {
          key: 'KeyI',
          en: 'i',
          ru: 'ш',
          code: '',
        },
        {
          key: 'KeyO',
          en: 'o',
          ru: 'щ',
          code: '',
        },
        {
          key: 'KeyP',
          en: 'p',
          ru: 'з',
          code: '',
        },
        {
          key: 'BracketLeft',
          en: '[',
          ru: 'х',
          code: '',
        },
        {
          key: 'BracketRight',
          en: ']',
          ru: 'ъ',
          code: '',
        },
        {
          key: 'Backslash',
          en: '\\',
          ru: '\\',
          code: '',
        },
      ],
      [
        {
          key: 'CapsLock',
          en: 'Caps',
          ru: 'Caps',
          code: '20',
        },
        {
          key: 'KeyA',
          en: 'A',
          ru: 'ф',
          code: '',
        },
        {
          key: 'KeyS',
          en: 'S',
          ru: 'ы',
          code: '',
        },
        {
          key: 'KeyD',
          en: 'D',
          ru: 'в',
          code: '',
        },
        {
          key: 'KeyF',
          en: 'F',
          ru: 'а',
          code: '',
        },
        {
          key: 'KeyG',
          en: 'G',
          ru: 'п',
          code: '',
        },
        {
          key: 'KeyH',
          en: 'H',
          ru: 'р',
          code: '',
        },
        {
          key: 'KeyJ',
          en: 'J',
          ru: 'о',
          code: '',
        },
        {
          key: 'KeyK',
          en: 'K',
          ru: 'л',
          code: '',
        },
        {
          key: 'KeyL',
          en: 'L',
          ru: 'д',
          code: '',
        },
        {
          key: 'Semicolon',
          en: ';',
          ru: 'ж',
          code: '',
        },
        {
          key: 'Quote',
          en: "'",
          ru: 'э',
          code: '',
        },
        {
          key: 'Enter',
          en: 'Enter',
          ru: 'Enter',
          code: '',
        },
      ],
      [
        {
          key: 'ShiftLeft',
          en: 'Shift',
          ru: 'Shift',
          code: '16',
        },
        {
          key: 'KeyZ',
          en: 'z',
          ru: 'я',
          code: '',
        },
        {
          key: 'KeyX',
          en: 'x',
          ru: 'ч',
          code: '',
        },
        {
          key: 'KeyC',
          en: 'c',
          ru: 'с',
          code: '',
        },
        {
          key: 'KeyV',
          en: 'v',
          ru: 'м',
          code: '',
        },
        {
          key: 'KeyB',
          en: 'b',
          ru: 'и',
          code: '',
        },
        {
          key: 'KeyN',
          en: 'n',
          ru: 'т',
          code: '',
        },
        {
          key: 'KeyM',
          en: 'm',
          ru: 'ь',
          code: '',
        },
        {
          key: 'Comma',
          en: ',',
          ru: 'б',
          code: '',
        },
        {
          key: 'Period',
          en: '.',
          ru: 'ю',
          code: '',
        },
        {
          key: 'Slash',
          en: '/',
          ru: '.',
          code: '',
        },
        {
          key: 'ArrowUp',
          en: '^',
          ru: '^',
          code: '38',
        },
        {
          key: 'ShiftRight',
          en: 'Shift',
          ru: 'Shift',
          code: '16',
        },
      ],
      [
        {
          key: 'ControlLeft',
          en: 'Ctrl',
          ru: 'Ctrl',
          code: '17',
        },
        {
          key: 'MetaLeft',
          en: 'Win',
          ru: 'Win',
          code: '91',
        },
        {
          key: 'AltLeft',
          en: 'Alt',
          ru: 'Alt',
          code: '18',
        },
        {
          key: 'Space',
          en: 'Space',
          ru: 'Space',
          code: '',
        },
        {
          key: 'AltRight',
          en: 'Alt',
          ru: 'Alt',
          code: '18',
        },
        {
          key: 'ControlRight',
          en: 'Ctrl',
          ru: 'Ctrl',
          code: '17',
        },
        {
          key: 'ArrowLeft',
          en: '<',
          ru: '<',
          code: '37',
        },
        {
          key: 'ArrowDown',
          en: 'v',
          ru: 'v',
          code: '40',
        },
        {
          key: 'ArrowRight',
          en: '>',
          ru: '>',
          code: '39',
        },
      ],
    ];
  }

  trackALtShift() {
    window.addEventListener('keydown', (event) => {
      if (event.code === 'AltLeft') {
        this.isAltPressed = true;
      }
      if (event.code === 'ShiftLeft') {
        this.isShiftPressed = true;
      }
      if (this.isShiftPressed && this.isAltPressed) {
        if (localStorage.currentLanguage === 'en') {
          this.drawKeyboard('ru');
          localStorage.currentLanguage = 'ru';
        } else {
          this.drawKeyboard('en');
          localStorage.currentLanguage = 'en';
        }
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.code === 'AltLeft') {
        this.isAltPressed = false;
      }
      if (event.code === 'ShiftLeft') {
        this.isShiftPressed = false;
      }
    });
  }

  initializeKeyboardContainer() {
    document.body.innerHTML = '';
    const textarea = document.createElement('div');
    textarea.innerHTML = ' <textarea id="text-area" cols="30" autofocus rows="10"></textarea>';
    document.body.append(textarea);
    const keyboardContainer = document.createElement('div');
    keyboardContainer.id = ('keyboard-container');
    document.body.append(keyboardContainer);
  }

  drawKeyboard(lang) {
    this.initializeKeyboardContainer();
    for (let i = 0; i < this.keysList.length; i++) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('row');
      for (let j = 0; j < this.keysList[i].length; j++) {
        const key = document.createElement('div');
        if (lang === 'en') {
          key.innerHTML = this.keysList[i][j].en;
        } else { key.innerHTML = this.keysList[i][j].ru; }
        key.innerHTML = key.innerHTML.toUpperCase();
        key.classList.add('key');
        key.classList.add(this.keysList[i][j].key);
        key.id = this.keysList[i][j].key;
        key.dataset.ruValue = this.keysList[i][j].ru;
        key.dataset.enValue = this.keysList[i][j].en;
        key.dataset.keyLetter = this.keysList[i][j].key;
        key.dataset.keyId = this.keysList[i][j].code;
        keyboardRow.append(key);
      }
      document.querySelector('#keyboard-container').append(keyboardRow);
    }
    this.listenHardwareKeyboard();
  }

  listenVirtualKeyboard() {
    const keyboardContainer = document.querySelector('#keyboard-container');
    keyboardContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('key')) {
        const keyEvent = new KeyboardEvent('keydown', {
          key: 'e',
          keyCode: 69,
          code: 'KeyE',
          which: 69,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
        });
        document.body.dispatchEvent(keyEvent);
      }
    });
  }

  listenHardwareKeyboard() {
    const keyDivs = document.querySelectorAll('.key');
    window.addEventListener('keydown', (event) => {
      for (let i = 0; i < keyDivs.length; i++) {
        if (keyDivs[i].id === event.code) {
          keyDivs[i].classList.add('_active');
        }
      }
    });
    window.addEventListener('keyup', (event) => {
      for (let i = 0; i < keyDivs.length; i++) {
        if (keyDivs[i].id === event.code) {
          keyDivs[i].classList.remove('_active');
        }
      }
    });
  }

  inputCharacter() {
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('key')) {
        const key = event.target;
        const textarea = document.querySelector('#text-area');
        if (key.id === 'Backspace') {
          textarea.value = textarea.value.slice(0, -1);
        } else if (key.id === 'Space') {
          textarea.value += ' ';
        } else if (key.id === 'Tab') {
          textarea.value += '\t';
        } else if (key.id === 'CapsLock') {
          textarea.value += '';
          key.classList.toggle('_caps-active');
          this.isCaps = !this.isCaps;
        } else if (key.id === 'Enter') {
          textarea.value += '\n';
        } else if (key.id === 'ControlLeft' || key.id === 'ControlRight' || key.id === 'MetaLeft'
        || key.id === 'ShiftLeft' || key.id === 'ShiftRight'
        || key.id === 'AltLeft' || key.id === 'AltRight'
        || key.id === 'ArrowLeft' || key.id === 'ArrowRight'
        || key.id === 'ArrowUp'
        || key.id === 'MetaRight' || key.id === 'AltLeft' || key.id === 'AltRight') {
          textarea.value += '';
        } else {
          const keyToInsert = localStorage.currentLanguage === 'ru' ? key.dataset.ruValue : key.dataset.enValue;
          const caseLetter = this.isCaps ? keyToInsert.toUpperCase() : keyToInsert.toLowerCase();
          const caretPosition = textarea.selectionStart;
          textarea.value = [textarea.value.slice(0, caretPosition), caseLetter, textarea.value.slice(caretPosition)].join('');
        // eslint-disable-next-line max-len
        // textarea.value = textarea.value.split('').splice(document.querySelector('textarea').selectionStart, 0, caseLetter).join('');
        }
      }
    });
  }
}
