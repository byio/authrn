import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  const { spinnerStyles } = styles;
  return (
    <View style={spinnerStyles}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export { Spinner };
