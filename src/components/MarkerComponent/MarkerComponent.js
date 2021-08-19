import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import TouchableButton from '../TouchableButton/TouchableButton';
import styles from './styles';

const MarkerComponent = (props) => {
  const { vehicle, ChanteStatus } = props;
  return (
    <Marker
      key={vehicle.id}
      coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
      pinColor={
        vehicle.status === 'iddle' ? 'green' : vehicle.status === 'brokenDown' ? 'red' : 'yellow'
      }>
      <Callout>
        <Text>{vehicle.name}</Text>
        <TouchableButton
          label='Iddle'
          ChanteStatus={ChanteStatus}
          vehicle={vehicle.id}
          status={'iddle'}
          customStyle={styles.buttonIddle}
        />
        <TouchableButton
          label='En Route'
          ChanteStatus={ChanteStatus}
          vehicle={vehicle.id}
          status={'enRoute'}
          customStyle={styles.buttonEnRoute}
        />
        <TouchableButton
          label='Broken Down'
          ChanteStatus={ChanteStatus}
          vehicle={vehicle.id}
          status={'brokenDown'}
          customStyle={styles.buttonBrokenDown}
        />
      </Callout>
    </Marker>
  );
};

export default MarkerComponent;
