import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CloseButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ padding: 10 }}>
        <Icon name="times" size={props.size} color="red" />
      </View>
    </TouchableOpacity>
  );
};

export default CloseButton;
