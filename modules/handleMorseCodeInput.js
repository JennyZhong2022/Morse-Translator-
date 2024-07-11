import { alertNote2, morseCode2, englishText2 } from '../module-script.js'
import morseCodeTranslation from './morseCodeTranslation.js'
import audioPlayTime from './audioPlayTime.js'
import {morseCodeAudio} from './audio.js'


const handleMorseCodeInput = (e) => {
  e.preventDefault()
  alertNote2.textContent = ''

  // Check if the Morse code input is valid
  // ^: Start of the string.
  // . (dots)
  // - (dashes)
  // \s (whitespace characters, including spaces)
  // *  zero or multiply times。
	// 	$: End of the string.
  if (!/^[.\-\s]*$/.test(morseCode2.value)) {
    alertNote2.textContent = 'Please enter valid Morse Code';
  } else {
    audioPlayTime(morseCodeAudio, 0, 500)
  }


  let translatedMorseCode = ''

  // make it array first
  const inputMorseCode = morseCode2.value.split(' ')
  console.log(inputMorseCode);



   // then iterate the array. find the key by value. 
const findKeyByValue = (object, value) => {
    for (const [key, val] of Object.entries(object)) {
      // console.log(`${key}:${val}`);
      if (value === val) {
        return key
      } 
    } return null
  }


  // find the key, add it to translatedMorseCode. 
inputMorseCode.forEach(morse => {
    const el = findKeyByValue(morseCodeTranslation, morse)
    if (el) {
      translatedMorseCode+=el
    } else {
      translatedMorseCode+=' '
    }
  }
  

  )
  englishText2.textContent = translatedMorseCode
 
  
	


 
}


export default handleMorseCodeInput