import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyB0WRaqE6J_KSQwtcxNYzaARWqkAA1cu2k",
      authDomain: "authrn-dev.firebaseapp.com",
      databaseURL: "https://authrn-dev.firebaseio.com",
      projectId: "authrn-dev",
      storageBucket: "authrn-dev.appspot.com",
      messagingSenderId: "608804279791"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // helper methods
  logOut () {
    firebase.auth()
            .signOut()
            .then()
            .catch(err => {
              if (err) throw err;
            });
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPressProp={this.logOut.bind(this)}>Log Out</Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large"/>
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authenticated"/>
        {this.renderContent()}
      </View>
    );
  }

}

export default App;
