import createSpeech from "./createSpeech";

function speak(text, voice) {
  window.speechSynthesis.speak(createSpeech(text, voice));
}

export default speak;
