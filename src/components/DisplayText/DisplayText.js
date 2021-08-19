import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const DisplayText = (props) => {
  const { vehicle } = props;
  return (
    <View style={styles.container}>
      <Text>
        {vehicle.id}: {vehicle.name}
      </Text>
      {vehicle.status === 'iddle' ? (
        <Text style={styles.textIddle}>Iddle</Text>
      ) : vehicle.status === 'brokenDown' ? (
        <Text style={styles.textBrokenDown}>Broken Down</Text>
      ) : (
        <Text style={styles.textEnRoute}>En Route</Text>
      )}
    </View>
  );
};

export default DisplayText;
