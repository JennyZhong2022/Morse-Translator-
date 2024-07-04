// Import handleSwapBtn after mocking
let handleSwapBtn;
let mockElements;

describe('handleSwapBtn', () => {
  beforeEach(() => {
    // Mock module-script.js
    mockElements = {
      MorseCodeSection2: {
        classList: {
          toggle: jest.fn(),
          contains: jest.fn().mockReturnValue(true), // Start with MorseCodeSection2 hidden
        },
      },
      englishTextSection: {
        classList: {
          toggle: jest.fn(),
        },
      },
      englishTextSection2: {
        classList: {
          toggle: jest.fn(),
        },
      },
      MorseCodeSection: {
        classList: {
          toggle: jest.fn(),
        },
      },
      morseCode: {
        classList: {
          add: jest.fn(),
        },
        disabled: false,
      },
      englishText2: {
        classList: {
          add: jest.fn(),
        },
        disabled: false,
      },
      language1: {
        textContent: '',
      },
      language2: {
        textContent: '',
      },
    };

    jest.mock('../module-script.js', () => mockElements);

    // Mock audio.js
    jest.mock('./audio.js', () => ({
      swapAudio: 'mockedSwapAudio', // Mock swapAudio if needed
    }));

    // Mock audioPlayTime
    jest.mock('./audioPlayTime.js', () => jest.fn());

    // Import handleSwapBtn after mocking
    handleSwapBtn = require('./handleSwapBtn').default;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should toggle visibility of sections and update styles correctly', () => {
    const e = {
      preventDefault: jest.fn(),
    };
  
    handleSwapBtn(e);
  
    // Check if classList.toggle was called for each section
    expect(mockElements.MorseCodeSection2.classList.toggle).toHaveBeenCalledWith('hide');
    expect(mockElements.englishTextSection.classList.toggle).toHaveBeenCalledWith('hide');
    expect(mockElements.englishTextSection2.classList.toggle).toHaveBeenCalledWith('hide');
    expect(mockElements.MorseCodeSection.classList.toggle).toHaveBeenCalledWith('hide');
  
    // Check backgroundColor and disabled attributes based on hide state
    if (mockElements.MorseCodeSection2.classList.contains('hide')) {
      expect(mockElements.morseCode.classList.add).toHaveBeenCalledWith('backgroundColor');
      expect(mockElements.morseCode.disabled).toBe(true);
      expect(mockElements.language1.textContent).toBe('English');
      expect(mockElements.language2.textContent).toBe('Morse Code');
    } else {
      expect(mockElements.englishText2.classList.add).toHaveBeenCalledWith('backgroundColor');
      expect(mockElements.englishText2.disabled).toBe(true);
      expect(mockElements.language1.textContent).toBe('Morse Code');
      expect(mockElements.language2.textContent).toBe('English');
    }
  });
  it('should call audioPlayTime with swapAudio', () => {
    const e = {
      preventDefault: jest.fn(),
    };

    handleSwapBtn(e);
    expect(require('./audioPlayTime')).toHaveBeenCalledWith('mockedSwapAudio', 0, 500);
  });
});