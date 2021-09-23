import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TouchableButton = (props) => {
  const { label, ChangeStatus, vehicle, status, customStyle } = props;
  const onChangeStatus = () => {
    ChangeStatus(vehicle, status);
  };
  return (
    <TouchableOpacity onPress={onChangeStatus}>
      <View style={customStyle}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableButton;
