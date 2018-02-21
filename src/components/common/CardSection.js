// import libraries
import React from 'react';
import { View } from 'react-native';

// make component
const CardSection = (props) => {
  // destructure styles object
  const { containerStyles } = styles
  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

// styles
const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

// export component
export { CardSection };
