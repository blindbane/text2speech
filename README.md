# text2speech

A simple text-to-speech web library.

## Tech Stack

## Usage

```bash
$ yarn add text2speech
```
### Example
```javascript
import React, { Component } from 'react';
import { getVoices, speak, pause, resume, stop } from "text2speech";

class App extends Component {
  state = {
    textToSpeak: "enter text"
  }
  componentDidMount() {
    getVoices().then((voices) => {
      this.setState({
        voices
      }, () => {
        speak(this.state.voices[1], "Or you can save the voices and pass them to future speak calls.");
      })
    })
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({
      [name]: value
    })
  }

  speak = (e) => {
    speak(this.state.voices[0], this.state.textToSpeak);
  }

  pause = (e) => {
    pause();
  }

  resume = (e) => {
    resume();
  }

  stop = (e) => {
    stop();
  }

  render() {
    return (
      <div>
        <button onClick={this.speak}>
          Play!
        </button>
        <button onClick={this.pause}>
          Pause
        </button>
        <button onClick={this.resume}>
          Resume
        </button>
        <button onClick={this.stop}>
          Stop
        </button>
        <textarea name="textToSpeak" value={this.state.textToSpeak} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;

```
> PLEASE NOTE:
> 1. Call getVoices after the DOM has loaded.
> 2. Save voices to your app state on the initial call to getVoices.  

## Development

```bash
$ yarn
$ yarn dev
```
