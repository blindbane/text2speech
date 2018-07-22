import slice from "lodash-es/slice";

function getVoices() {
  return new Promise((resolve, reject) => {
    // listen for onvoiceschanged event
    window.speechSynthesis.onvoiceschanged = function onvoiceschangedCallBack() {
      resolve(slice(window.speechSynthesis.getVoices()));
    };

    // start request for cpu voices
    window.speechSynthesis.getVoices();

    // if no voices found in 5 seconds, return error.
    setTimeout(() => reject(new Error("No tts voices found")), 5000);
  });
}

export default getVoices;
