import React, { Component } from 'react';

import { Button, Card, CardSection, TextField } from './common';

class LoginForm extends Component {

  state = {
    emailInput: '',
    passwordInput: ''
  };

  render () {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Email"
            placeholderText="example@email.com"
            value={this.state.emailInput}
            onChangeText={emailInput => this.setState({ emailInput })}
          />
        </CardSection>

        <CardSection>
          {/* secureTextEntryProp is true by simply listing it */}
          <TextField
            secureTextEntryProp
            label="Password"
            placeholderText="password"
            value={this.state.passwordInput}
            onChangeText={passwordInput => this.setState({ passwordInput })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }

}

export default LoginForm;
