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
    nanoajax.ajax({url:"http://api.icndb.com/jokes/random/5"}, function(code, resp){
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
        <p style={styles.reload} onClick={this.handleClick} > More &#x21bb;</p>
        <hr style={styles.hr} />
        <div> {jokes} </div> 
      </div>
    );
  };

}

const styles = {
  main:{
    //backgroundColor:"#F9F9F9",
    //boxShadow:"0px 0px 20px #9AA4AD",
    marginTop:"20px",
    marginLeft:"10%",
    marginRight:"10%",
    borderRadius:"6px",
    padding:"20px 5%",
    textAlign:"center",
  },
  reload:{
    color:"#4DBCE9",
    paddingLeft:"10px",
    fontSize:"30px",
    cursor:"pointer",
    fontWeight:"bold",
    maxWidth: "300px",
    margin: "30px auto"
  },
  hr:{
    border: "1px solid #EEE",
    marginTop:"-10px"
  }
}

export default JokeBlock;
