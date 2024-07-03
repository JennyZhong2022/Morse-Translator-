import debounce from './modules/debounce.js'
import handleEnglishInput from './modules/handleEnglishInput.js'
import handleMorseCodeInput from "./modules/handleMorseCodeInput.js"
import handSwapBtn from "./modules/handleSwapBtn.js"





export const englishText = document.querySelector('#englishText')
export const englishText2 = document.querySelector('#englishText2')

export const morseCode = document.querySelector('#morseCode')
export const morseCode2 = document.querySelector('#morseCode2')

export const alertNote = document.querySelector('.alertNote')
export const alertNote2 = document.querySelector('.alertNote2')

export const englishTextSection = document.querySelector('.englishTextSection')
export const englishTextSection2 = document.querySelector('.englishTextSection2')
export const MorseCodeSection=document.querySelector('.MorseCodeSection')
export const MorseCodeSection2 = document.querySelector('.MorseCodeSection2')

export const language1 = document.querySelector('.language1')
export const language2= document.querySelector('.language2')

const swapBtn=document.querySelector('button')







swapBtn.addEventListener('click',handSwapBtn)


englishText.addEventListener('input', debounce(handleEnglishInput, 100));



morseCode2.addEventListener('input', debounce(handleMorseCodeInput, 100))
  
  
  

  


