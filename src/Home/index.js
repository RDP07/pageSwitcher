import React, { Component } from 'react';
import './Home.css';
import FirstPage from './../FirstPage/index'
import SecondPage from './../SecondPage/index'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React with Routing by RDP</h1>
        </header>
          <section className="home">
            <h1> Home is where you make it. </h1>
            <h5> You like to see homos naked? </h5>
            <FirstPage />
            <SecondPage />
            <FirstPage />
          </section>
      </div>
    );
  }
}

export default App;
