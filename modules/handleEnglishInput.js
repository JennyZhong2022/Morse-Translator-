import { alertNote, englishText, morseCode } from '../module-script.js'
import morseCodeTranslation from './morseCodeTranslation.js'
import audioPlayTime from './audioPlayTime.js';
import {morseCodeAudio} from './audio.js'

const handleEnglishInput = (e) => {
  e.preventDefault();
  alertNote.textContent = '';

  let translatedText = '';
  const inputText = englishText.value.toUpperCase();

  for (const el of inputText) {
    if (el === ' ') {
      translatedText += ' ';
    } else if (morseCodeTranslation[el]) {
      translatedText += morseCodeTranslation[el] + ' ';
    }
  }
 
  morseCode.textContent = translatedText;

!/^[A-Za-z\s]*$/.test(englishText.value)?
    alertNote.textContent = 'Please enter valid English': audioPlayTime(morseCodeAudio, 0, 500);
};


export default handleEnglishInput