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
import { getVoices, speak } from "text2speech";

class App extends Component {
  componentDidMount() {
    getVoices().then((voices) => {
      speak(voices[1],"You can speak with the returned value from getVoices.", "en-US");
      this.setState({
        voices
      }, () => {
        speak( this.state.voices[1],"Or you can save the voices and pass them to future speak calls.", "en-US");
      })
    })
  }
  render() {
    return (
      <div>
        <h3>Nothing to see here.</h3>
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
