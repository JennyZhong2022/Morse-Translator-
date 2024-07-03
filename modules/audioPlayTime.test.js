
import audioPlayTime from "./audioPlayTime";



// Mock Audio class
class MockAudio {
  constructor() {
    this.currentTime = 0;
    this.play = jest.fn();
    this.pause = jest.fn();
  }
}

// Test case for audioPlayTime function
test('audioPlayTime should play audio for specified time and reset', () => {
  // Initialize mock audio
  const mockAudio = new MockAudio();
  const currentTime = 0;
  const timeLength = 500;

  // Call audioPlayTime function
  audioPlayTime(mockAudio, currentTime, timeLength);


  // Assert that pause method was called after timeLength and currentTime reset
  setTimeout(() => {
    expect(mockAudio.pause).toHaveBeenCalled();
    expect(mockAudio.currentTime).toBe(currentTime);
  }, timeLength);
});