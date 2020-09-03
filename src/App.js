import React, { Component } from 'react';

import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';


class App extends Component{
  render(){
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;