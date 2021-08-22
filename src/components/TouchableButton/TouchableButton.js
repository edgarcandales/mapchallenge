import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TouchableButton = (props) => {
  const { label, ChangeStatus, vehicle, status, customStyle } = props;
  return (
    <TouchableOpacity onPress={() => ChangeStatus(vehicle, status)}>
      <View style={customStyle}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableButton;
