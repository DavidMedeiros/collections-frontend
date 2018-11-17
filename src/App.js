import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import MyCollectionsContainer from './components/MyCollectionsContainer/MyCollectionsContainer'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import { Container } from 'semantic-ui-react'
import UserHeader from "./components/UserHeader/UserHeader";
import TabsMenu from "./components/TabsMenu/TabsMenu";

class App extends Component {
  render() {
    return (
    <div>
      <HeaderMenu />
      <UserHeader />
      <Container>
        <TabsMenu />
      </Container>

    </div>
    );
  }
}

export default App;
