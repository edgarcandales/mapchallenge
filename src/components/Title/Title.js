import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { Amplitude } from '@amplitude/react-native';

const ampInstance = Amplitude.getInstance();
ampInstance.init('02ba9950ef909d7cc6be5e2dbf8b9ea4');

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Maps Challenge</Text>
      <Button title='Log Event 1' onPress={() => ampInstance.logEvent('play song 1')} />
    </View>
  );
};

export default Title;
