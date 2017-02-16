import React, { Component } from 'react';
import Joke from './Joke';
import nanoajax from 'nanoajax';

class JokeBlock extends Component {
  constructor(props) {
  super(props);
    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getData(){
    nanoajax.ajax({url:"http://api.icndb.com/jokes/random/10"}, function(code, resp){
      if(code === 200){
        resp = JSON.parse(resp);
        this.setState({
            data : resp.value
        });
      }
    }.bind(this));
  }

  handleClick(){
    this.getData();
  }
  componentDidMount(){
    this.getData();
  }

  render() {
    var jokes = this.state.data.map(function(joke){
      return (
        <div key={joke.id}>
          <Joke data={joke.joke}/>
        </div>
      )
    });

    return (
      <div style={styles.main}>
        <h2 style={styles.h2}> 
          Click to 
          <a href="/##" onClick={this.handleClick} > Refresh</a>
        </h2> 
        <hr style={styles.hr} />
        <div> {jokes} </div> 
      </div>
    );
  };

}

const styles = {
  main:{
    backgroundColor:"#F9F9F9",
    marginTop:"20px",
    marginLeft:"10%",
    marginRight:"10%",
    borderRadius:"4px",
    padding:"20px 5%",
    textAlign:"center",
    boxShadow:"0px 0px 20px #9AA4AD"
  },
  h2:{
    color:"#818181",
    textAlign:"left",
    paddingLeft:"10px"
  },
  hr:{
    border: "1px solid #EEE",
    marginTop:"-10px"
  }
}

export default JokeBlock;
