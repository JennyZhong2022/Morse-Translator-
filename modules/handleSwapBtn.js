import audioPlayTime from "./audioPlayTime.js";
import { morseCode,MorseCodeSection2, englishTextSection2,englishText2, englishTextSection, MorseCodeSection, language1, language2 } from '../module-script.js'
import {swapAudio} from './audio.js'


const handleSwapBtn = (e) => {
  e.preventDefault()
  console.log('swap btn');
  MorseCodeSection2.classList.toggle('hide')
  englishTextSection.classList.toggle('hide')
  englishTextSection2.classList.toggle('hide')
  MorseCodeSection.classList.toggle('hide')

  if (MorseCodeSection2.classList.contains('hide')) {
    morseCode.classList.add("backgroundColor")
    morseCode.disabled = true
    language2.textContent = 'Morse Code';
    language1.textContent = 'English';
  } else {
    englishText2.classList.add("backgroundColor")
    englishText2.disabled = true
    language1.textContent = 'Morse Code';
    language2.textContent = 'English';
  }
  
  audioPlayTime(swapAudio, 0, 500)
 
}


export default handleSwapBtn