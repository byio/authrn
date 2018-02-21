import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextField = ({ value, onChangeText, label, placeholderText, secureTextEntryProp, autoCapProp }) => {

  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapProp}
        secureTextEntry={secureTextEntryProp}
        autoCorrect={false}
        placeholder={placeholderText}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    flex: 3,
    color: '#262626',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 18
  }
};

export { TextField };
