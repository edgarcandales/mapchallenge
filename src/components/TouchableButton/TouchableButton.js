import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TouchableButton = (props) => {
  const { label, ChanteStatus, vehicle, status, customStyle } = props;
  return (
    <TouchableOpacity onPress={() => ChanteStatus(vehicle, status)}>
      <View style={customStyle}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableButton;
