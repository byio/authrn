// import libraries
import React from 'react';
import { View } from 'react-native';

// make component
const Card = (props) => {
  // destructure styles object
  const { containerStyles } = styles;

  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

// styles
const styles = {
  containerStyles: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// epxort component
export { Card };
