import speak from "./speak";
import resume from "./resume";
import isPaused from "./isPaused";
import isSpeaking from "./isSpeaking";

function play(text, voice) {
  if (isPaused && !isSpeaking) {
    resume();
    speak(text, voice);
  } else if (isPaused && isSpeaking) {
    resume();
  }
}

export default play;
