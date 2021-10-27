import React, { Component } from 'react';
import './App.css';
import Perfil from './Profile'
import Info from './Info'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Meu Perfil</h1>
        <Perfil />
        <Info />
      </div>
    )
  }

};

export default App;