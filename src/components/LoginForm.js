import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, TextField, Spinner } from './common';

class LoginForm extends Component {

  state = {
    emailInput: '',
    passwordInput: '',
    error: '',
    loading: false
  };

  // helper methods
  renderButton () {
    if (this.state.loading) return <Spinner size="small" />
    return (
      <Button onPressProp={this.handleLogin.bind(this)}>
        Login
      </Button>
    );
  }

  handleLogin () {
    const { emailInput, passwordInput } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
            .catch((err) => {
              firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
                      .catch((err) => {
                        this.setState({ error: 'Invalid email and/or password.' });
                      });
            })
  };

  render () {
    const { errorTextStyles } = styles;

    return (
      <Card>
        <CardSection>
          <TextField
            autoCapProp="none"
            label="Email"
            placeholderText="example@email.com"
            value={this.state.emailInput}
            onChangeText={emailInput => this.setState({ emailInput })}
          />
        </CardSection>

        <CardSection>
          {/* secureTextEntryProp is true by simply listing it as a prop */}
          <TextField
            autoCapProp="none"
            secureTextEntryProp
            label="Password"
            placeholderText="password"
            value={this.state.passwordInput}
            onChangeText={passwordInput => this.setState({ passwordInput })}
          />
        </CardSection>

        <Text style={errorTextStyles}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#C21807'
  }
};

export default LoginForm;
