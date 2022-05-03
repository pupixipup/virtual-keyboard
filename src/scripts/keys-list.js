export class Keyboard {
  constructor() {
    this.keysList = [
      [
        {
          key: 'Backquote',
          en: '`',
          ru: 'ё',
        },
        {
          key: 'Digit1',
          en: '1',
          ru: '1',
        },
        {
          key: 'Digit2',
          en: '2',
          ru: '2',
        },
        {
          key: 'Digit3',
          en: '3',
          ru: '3',
        },
        {
          key: 'Digit4',
          en: '4',
          ru: '4',
        },
        {
          key: 'Digit5',
          en: '5',
          ru: '5',
        },
        {
          key: 'Digit6',
          en: '6',
          ru: '6',
        },
        {
          key: 'Digit7',
          en: '7',
          ru: '7',
        },
        {
          key: 'Digit8',
          en: '8',
          ru: '8',
        },
        {
          key: 'Digit9',
          en: '9',
          ru: '9',
        },
        {
          key: 'Digit0',
          en: '0',
          ru: '0',
        },
        {
          key: 'Minus',
          en: '-',
          ru: '-',
        },
        {
          key: 'Equal',
          en: '=',
          ru: '=',
        },
        {
          key: 'Backspace',
          en: 'Backspace',
          ru: 'Backspace',
        },
      ],
      [
        {
          key: 'Tab',
          en: 'Tab',
          ru: 'Tab',
        },
        {
          key: 'KeyQ',
          en: 'q',
          ru: 'й',
        },
        {
          key: 'KeyW',
          en: 'w',
          ru: 'ц',
        },
        {
          key: 'KeyE',
          en: 'e',
          ru: 'у',
        },
        {
          key: 'KeyR',
          en: 'r',
          ru: 'к',
        },
        {
          key: 'KeyT',
          en: 't',
          ru: 'е',
        },
        {
          key: 'KeyY',
          en: 'y',
          ru: 'н',
        },
        {
          key: 'KeyU',
          en: 'u',
          ru: 'г',
        },
        {
          key: 'KeyI',
          en: 'i',
          ru: 'ш',
        },
        {
          key: 'KeyO',
          en: 'o',
          ru: 'щ',
        },
        {
          key: 'KeyP',
          en: 'p',
          ru: 'з',
        },
        {
          key: 'BracketLeft',
          en: '[',
          ru: 'х',
        },
        {
          key: 'BracketRight',
          en: ']',
          ru: 'ъ',
        },
        {
          key: 'Backslash',
          en: '\\',
          ru: '\\',
        },
      ],
      [
        {
          key: 'CapsLock',
          en: 'Caps',
          ru: '',
        },
        {
          key: 'KeyA',
          en: 'A',
          ru: 'ф',
        },
        {
          key: 'KeyS',
          en: 'S',
          ru: 'ы',
        },
        {
          key: 'KeyD',
          en: 'D',
          ru: 'в',
        },
        {
          key: 'KeyF',
          en: 'F',
          ru: 'а',
        },
        {
          key: 'KeyG',
          en: 'G',
          ru: 'п',
        },
        {
          key: 'KeyH',
          en: 'H',
          ru: 'р',
        },
        {
          key: 'KeyJ',
          en: 'J',
          ru: 'о',
        },
        {
          key: 'KeyK',
          en: 'K',
          ru: 'л',
        },
        {
          key: 'KeyL',
          en: 'L',
          ru: 'д',
        },
        {
          key: 'Semicolon',
          en: ';',
          ru: 'ж',
        },
        {
          key: 'Quote',
          en: "'",
          ru: 'э',
        },
        {
          key: 'Enter',
          en: 'Enter',
          ru: 'Enter',
        },
      ],
      [
        {
          key: 'ShiftLeft',
          en: 'Shift',
          ru: 'Shift',
        },
        {
          key: 'KeyZ',
          en: 'z',
          ru: 'я',
        },
        {
          key: 'KeyX',
          en: 'x',
          ru: 'ч',
        },
        {
          key: 'KeyC',
          en: 'c',
          ru: 'с',
        },
        {
          key: 'KeyV',
          en: 'v',
          ru: 'м',
        },
        {
          key: 'KeyB',
          en: 'b',
          ru: 'и',
        },
        {
          key: 'KeyN',
          en: 'n',
          ru: 'т',
        },
        {
          key: 'KeyM',
          en: 'm',
          ru: 'ь',
        },
        {
          key: 'Comma',
          en: ',',
          ru: 'б',
        },
        {
          key: 'Period',
          en: '.',
          ru: 'ю',
        },
        {
          key: 'Slash',
          en: '/',
          ru: '.',
        },
        {
          key: 'ArrowUp',
          en: '^',
          ru: '^',
        },
        {
          key: 'ShiftLeft',
          en: 'Shift',
          ru: '',
        },
      ],
      [
        {
          key: 'ControlLeft',
          en: 'Ctrl',
          ru: 'Ctrl',
        },
        {
          key: 'MetaLeft',
          en: 'Win',
          ru: 'Win',
        },
        {
          key: 'AltLeft',
          en: 'Alt',
          ru: 'Alt',
        },
        {
          key: 'Space',
          en: 'Space',
          ru: 'Space',
        },
        {
          key: 'AltLeft',
          en: 'Alt',
          ru: 'Alt',
        },
        {
          key: 'ControlLeft',
          en: 'Ctrl',
          ru: 'Ctrl',
        },
        {
          key: 'ArrowLeft',
          en: '<',
          ru: '<',
        },
        {
          key: 'ArrowDown',
          en: 'v',
          ru: 'v',
        },
        {
          key: 'ArrowRight',
          en: '>',
          ru: '>',
        },
      ],
    ];
  }

  initializeKeyboardContainer() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.id = ('keyboard-container');
    document.body.append(keyboardContainer);
  }

  drawKeyboard() {
    for (let i = 0; i < this.keysList.length; i++) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('row');
      for (let j = 0; j < this.keysList[i].length; j++) {
        const key = document.createElement('div');
        key.innerHTML = this.keysList[i][j].en;
        key.classList.add('key');
        key.id = this.keysList[i][j].key;
        keyboardRow.append(key);
      }
      document.querySelector('#keyboard-container').append(keyboardRow);
    }
  }
}
