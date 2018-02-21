import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {

  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyB0WRaqE6J_KSQwtcxNYzaARWqkAA1cu2k",
      authDomain: "authrn-dev.firebaseapp.com",
      databaseURL: "https://authrn-dev.firebaseio.com",
      projectId: "authrn-dev",
      storageBucket: "authrn-dev.appspot.com",
      messagingSenderId: "608804279791"
    });
  }

  render () {
    return (
      <View>
        <Header headerText={"Authenticated"}/>
        <Text>
          src/App.js
        </Text>
      </View>
    );
  }

}

export default App;
