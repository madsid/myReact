import React, { Component } from 'react';

class Joke extends Component {
  render() {
    return (
      <div style={styles.main}>
        <p> {this.props.data} </p> 
        <hr style={styles.hr}/>
      </div>
    );
  }
}

const styles = {
  main:{
    paddingLeft:"20px",
    paddingTop:"20px",
    marginLeft:"30px",
    fontSize:"20px",
    textAlign:"left",
    color:"#818181"
  },
  hr:{
    border:"1px solid #E8E8E8",
    marginTop:"45px",
    marginLeft:"-30px"
  }
}

export default Joke;
