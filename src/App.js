import React, { Component } from 'react';
import ItemSelection from './components/ItemSelection';
import './App.css';

class App extends Component {
  // constructor() {
  // }

  componentDidMount(){
  }

  render () {
    return(
      <main>
        <h1><span role="img" aria-label="waving-hand">&#x1f44b;</span> Hi!</h1>
        <p>We understand recyling can be hard. Select what you are disposing and we will help you out!</p>
        <ItemSelection/>
        <a href="something" class="button4">Sort Me Out!</a>
      </main>
    )
  };
}

export default App;
