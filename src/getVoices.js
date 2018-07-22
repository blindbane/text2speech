function getVoices(lang = "en-US") {
  return new Promise((resolve, reject) => {
    // listen for onvoiceschanged event

    window.speechSynthesis.onvoiceschanged = function onvoiceschangedCallBack() {
      resolve(
        window.speechSynthesis.getVoices().filter(voice => lang === voice.lang)
      );
    };

    // start request for cpu voices
    window.speechSynthesis.getVoices();

    // if no voices found in 5 seconds, return error.
    // reject(new Error("No tts voices found"));
  });
}

export default getVoices;
