import React, { Component } from 'react';
import Joke from './Joke';
import nanoajax from 'nanoajax';

class JokeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  } 
  componentDidMount(){
    nanoajax.ajax({url:"http://api.icndb.com/jokes/random/10"}, function(code, resp){
      if(code === 200){
        resp = JSON.parse(resp);
        this.setState({
            data : resp.value
        });
      }
    }.bind(this));
  };

  render() {
    //const data = { "type": "success", "value": [ { "id": 173, "joke": "'Icy-Hot' is too weak for Chuck Norris. After a workout, Chuck Norris rubs his muscles down with liquid-hot MAGMA.", "categories": [] }, { "id": 541, "joke": "When Chuck Norris break the build, you can't fix it, because there is not a single line of code left.", "categories": ["nerdy"] }, { "id": 89, "joke": "For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.", "categories": ["explicit"] } ]  };
    var newJokes = this.state.data; 
    var jokes = newJokes.map(function(joke){
      return (
        <div key={joke.id}>
          <Joke data={joke.joke}/>
        </div>
      )
    });

    return (
      <div>
        <h2> This is JokeBlock </h2>
        <div> {jokes} </div> 
      </div>
    );
  };

}



export default JokeBlock;
