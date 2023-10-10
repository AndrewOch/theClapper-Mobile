import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckIcon = (props) => {
  return (
    <View style={{ padding: 10 }}>
      <Icon name="check" size={props.size} color="green" />
    </View>
  );
};

export default CheckIcon;
