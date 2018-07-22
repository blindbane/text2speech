function createSpeech(voice, text, rate, volume, pitch) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice = voice; // Note: some voices don't support altering params
  utterance.rate = rate || 1;
  utterance.volume = volume || 1; // 0 to 1
  utterance.pitch = pitch || 1; // 0 to 2
  utterance.lang = "en-US";

  return utterance;
}

export default createSpeech;
