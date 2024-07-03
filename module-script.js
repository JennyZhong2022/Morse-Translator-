// A to Z in Morse Code
const morseCodeTranslation= {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}




const englishText = document.querySelector('#englishText')
const englishText2 = document.querySelector('#englishText2')

const morseCode = document.querySelector('#morseCode')
const morseCode2 = document.querySelector('#morseCode2')

const alertNote = document.querySelector('.alertNote')
const alertNote2 = document.querySelector('.alertNote2')

const englishTextSection = document.querySelector('.englishTextSection')
const englishTextSection2 = document.querySelector('.englishTextSection2')
const MorseCodeSection=document.querySelector('.MorseCodeSection')
const MorseCodeSection2 = document.querySelector('.MorseCodeSection2')

const language1 = document.querySelector('.language1')
const language2= document.querySelector('.language2')

const swapBtn=document.querySelector('button')


// to control how long is the audio sound and when to start
const audioPlayTime = (audioName, currentTime, timeLength) => {
  audioName.currentTime = currentTime;
 audioName.play();
  setTimeout(() => {
    audioName.pause();
    audioName.currentTime = currentTime;
  }, timeLength);
};

const url = {
  swap: "src/music/switch-150130.mp3",
  morseCode: 'src/music/morse-code-131798.mp3'
};

const swapAudio = new Audio(url.swap);
const morseCodeAudio = new Audio(url.morseCode)



swapBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('swap btn');
  MorseCodeSection2.classList.toggle('hide')
  englishTextSection.classList.toggle('hide')
  englishTextSection2.classList.toggle('hide')
  MorseCodeSection.classList.toggle('hide')

  if (MorseCodeSection2.classList.contains('hide')) {
    morseCode.classList.add("backgroundColor")
    morseCode.disabled=true
  } else {
    englishText2.classList.add("backgroundColor")
    englishText2.disabled=true
  }


  
  
    
  if (MorseCodeSection2.classList.contains('hide')) {
    language2.textContent = 'Morse Code';
    language1.textContent = 'English';
} else {
    language1.textContent = 'Morse Code';
    language2.textContent = 'English';
  }
  
  audioPlayTime(swapAudio, 0, 500)
 
})



const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};


const handleEnglishInput = (e) => {
  e.preventDefault();
  alertNote.textContent = '';
  console.log(englishText.value); 

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




englishText.addEventListener('input', debounce(handleEnglishInput, 100));


const handleMorseCodeInput = (e) => {
  e.preventDefault()
  alertNote2.textContent = ''
  console.log(morseCode2.value);


  let translatedMorseCode = ''
  const inputMorseCode = morseCode2.value.split(' ')



   
  const findKeyByValue = (object, value) => {
    for (const [key, val] of Object.entries(object)) {
      // console.log(`${key}:${val}`);
      if (value === val) {
        return key
      } 
    } return null
  }

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
 
  
	// ^: Start of the string.
		// . (dots)
		// - (dashes)
  // \s (whitespace characters, including spaces)
  // *  zero or multiply times。
	// 	$: End of the string.

!/^[.\-\s]*$/.test(morseCode2.value)?
    alertNote2.textContent = 'Please enter valid Morse Code' 
  :  audioPlayTime(morseCodeAudio, 0, 500);

 
}

morseCode2.addEventListener('input', debounce(handleMorseCodeInput, 100))
  
  
  
  
  
