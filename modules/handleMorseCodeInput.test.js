import handleMorseCodeInput from './handleMorseCodeInput';
import audioPlayTime from './audioPlayTime';
import { morseCodeAudio } from './audio';

jest.mock('../module-script.js', () => ({
  alertNote2: { textContent: '' },
  morseCode2: { value: '', split: jest.fn() },
  englishText2: { textContent: '' },
}));

jest.mock('./audioPlayTime');
jest.mock('./audio.js', () => ({
  morseCodeAudio: 'mockAudio',
}));

describe('handleMorseCodeInput', () => {
  let e;

  beforeEach(() => {
    e = {
      preventDefault: jest.fn(),
    };
  });

  it('should translate morse code to English text', () => {
    const { morseCode2, englishText2 } = require('../module-script.js');
    morseCode2.value = '.... . .-.. .-.. ---'; // "HELLO"
    morseCode2.split.mockReturnValue(['....', '.', '.-..', '.-..', '---']);

    handleMorseCodeInput(e);

    expect(englishText2.textContent).toBe('HELLO');
  });

  it('should set alertNote2 textContent if invalid Morse code is entered', () => {
    const { morseCode2, alertNote2 } = require('../module-script.js');
    morseCode2.value = '.... . .-.. .-.. --- !'; // Invalid Morse Code
    morseCode2.split.mockReturnValue(['....', '.', '.-..', '.-..', '---', '!']);

    handleMorseCodeInput(e);

    expect(alertNote2.textContent).toBe('Please enter valid Morse Code');
    ;
  });

  it('should call audioPlayTime if valid Morse code is entered', () => {
    const { morseCode2 } = require('../module-script.js');
    morseCode2.value = '.... . .-.. .-.. ---'; // "HELLO"
    morseCode2.split.mockReturnValue(['....', '.', '.-..', '.-..', '---']);

    handleMorseCodeInput(e);

    expect(audioPlayTime).toHaveBeenCalledWith(morseCodeAudio, 0, 500);
  });

  it('should add a space for unknown Morse code characters', () => {
    const { morseCode2, englishText2 } = require('../module-script.js');
    morseCode2.value = '.... --- ...a .-'; // "HOVA" with 'O' and 'A' defined in mock
    morseCode2.split.mockReturnValue(['....', '---', '...a', '.-']); // ...a is not in the mock

    handleMorseCodeInput(e);

    expect(englishText2.textContent).toBe('HO A'); // 
  });
});