import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isLoaded: false
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="container">
        <div className="Loding-page">
          {isLoaded ? null : <div>"Marcus Weather"</div>}
        </div>
      </div>
    );
  }
}

export default App;
