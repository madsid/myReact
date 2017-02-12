import React, { Component } from 'react';
import Joke from './Joke';

class JokeBlock extends Component {
  render() {
    return (
      <div>
        <h2> This is JokeBlock </h2>
        <Joke /> 
      </div>
    );
  }
}

export default JokeBlock;
