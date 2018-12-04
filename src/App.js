import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import Album from "./components/Album/Album";

import axios from "axios/index";

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userLogged: false };
  }

  handleLogin(credentials) {
    axios
      .post('/api/auth', credentials)
      .then(response => {
        if (response.status === 200) {
          this.setState({ userLogged: true });
          console.log('user logged');
        }
      }).catch(error => {
      console.log('login error: ');
      console.log(error);
    });
  }

  componentDidMount() {
    const credentials = {username: "user", password: "123456"};

    this.handleLogin(credentials);
  }

  render() {
    if (this.state.userLogged) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/collection/:collectionId" component={Collection} />
                <Route exact path="/album/:albumId" component={Album} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return(
        <div> Autenticando...

          Certifique-se que você possui um usuário com username: "user", password: "123456" cadastrado no backend
        </div>
      );
    }
  }
}

export default App;
