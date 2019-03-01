import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LogInScreen from './Components/Container/LogInScreen';
import MainScreen from './Components/Container/MainScreen';
import ItemScreen from './Components/Container/ItemScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'KEX Scanner Application',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" render={() => <LogInScreen />} />
          <Route path="/MainScreen" render={() => <MainScreen />} />
          <Route path="/ItemScreen" render={() => <ItemScreen />} />
        </header>

      </div>
    );
  }
}

export default App;
