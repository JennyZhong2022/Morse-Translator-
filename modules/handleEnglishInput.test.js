import handleEnglishInput from './handleEnglishInput';
import audioPlayTime from './audioPlayTime';
import { morseCodeAudio } from './audio';

jest.mock('../module-script.js', () => ({
  alertNote: { textContent: '' },
  englishText: { value: '', textContent: '' },
  morseCode: { textContent: '' },
}));

jest.mock('./audioPlayTime');

describe('handleEnglishInput', () => {
  let e;

  beforeEach(() => {
    e = {
      preventDefault: jest.fn(),
    };
  });

  it('should translate English text to Morse code', () => {
    const { englishText, morseCode } = require('../module-script.js');
    englishText.value = 'HELLO'; // Input text
    const expectedMorse = '.... . .-.. .-.. --- '; // Expected Morse code for 'HELLO'

    handleEnglishInput(e);

    expect(morseCode.textContent).toBe(expectedMorse);
  });

  it('should set alertNote textContent if invalid English text is entered', () => {
    const { englishText, alertNote } = require('../module-script.js');
    englishText.value = '123!'; // Invalid English text

    handleEnglishInput(e);

    expect(alertNote.textContent).toBe('Please enter valid English');
  });

  it('should call audioPlayTime if valid English text is entered', () => {
    const { englishText } = require('../module-script.js');
    englishText.value = 'HELLO'; // Valid English text

    handleEnglishInput(e);

    expect(audioPlayTime).toHaveBeenCalledWith(morseCodeAudio, 0, 500);
  });

  it('should handle mixed case English text', () => {
    const { englishText, morseCode } = require('../module-script.js');
    englishText.value = 'hElLo'; // Mixed case input text
    const expectedMorse = '.... . .-.. .-.. --- '; // Expected Morse code for 'HELLO'

    handleEnglishInput(e);

    expect(morseCode.textContent).toBe(expectedMorse);
  });
});