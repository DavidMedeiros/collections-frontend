import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import UserHeader from "./components/Home/UserHeader/UserHeader";

import './App.scss';
import axios from "axios/index";

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
                <Route exact path="/cucuc" component={UserHeader} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return(
        <div> Autenticando... </div>
      );
    }
  }
}

export default App;
