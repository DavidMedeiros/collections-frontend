import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import CollectionContainer from './components/CollectionContainer'
import HeaderMenu from './components/HeaderMenu'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
    <div>
      <HeaderMenu />
      <Container>
        <CollectionContainer />
      </Container>

    </div>
    );
  }
}

export default App;
