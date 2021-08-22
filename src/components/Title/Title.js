import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Maps Challenge</Text>
      <Text>Touch any marker to change its status</Text>
    </View>
  );
};

export default Title;
