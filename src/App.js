import React, { Component } from 'react';
import './App.css';

class Aggregate extends Component {
  render () {
    return(
        <div style={{width:'40%', display:'inline-block'}}>
          <p>hshvhhs</p>
          <h2 style={{color:"blue"}}> Number text</h2>
        </div>
      )
  }
}

class Filter extends Component {
  render () {
    return(
        <div>
          <img/>
          <input type='text' ></input>
        </div>
      )
  }
}

class PlayList extends Component {
  render () {
    return(
        <div style={{width:'33%', display:'inline-block'}}>
          <img/>
          <h3>Playlist</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Big">Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
