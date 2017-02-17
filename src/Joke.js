import React, { Component } from 'react';

class Joke extends Component {
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.blockquote}> 
          <p style={styles.joke}> {this.props.data} </p>
        </div>
        <hr style={styles.hr}/>
      </div>
    );
  }
}

const styles = {
  main:{
    paddingLeft:"20px",
    paddingTop:"5px",
    marginLeft:"30px",
    fontSize:"20px",
    textAlign:"left",
    color:"#818181"
  },
  hr:{
    border:"1px solid #E8E8E8",
    marginTop:"45px",
    marginLeft:"-30px"
  },
  joke:{
    lineSpacing:"3px",
    lineHeight:"30px",
    marginLeft:"30px",
    color:"#888"
  },
  blockquote:{  
    backgroundColor:"#f9f9f9",
    borderLeft: "10px solid #ccc",
    margin: "1.5em 10px",
    padding: "0.5em 10px",
    quotes: "201C201D20182019",
  }
}

export default Joke;
