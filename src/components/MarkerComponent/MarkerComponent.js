import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import TouchableButton from '../TouchableButton/TouchableButton';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const MarkerComponent = (props) => {
  const { vehicle, ChangeStatus } = props;
  return (
    <View>
      <Marker
        key={vehicle.id}
        coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}>
        <Icon
          name='truck'
          size={25}
          color={
            vehicle.status === 'idle' ? 'green' : vehicle.status === 'brokenDown' ? 'red' : 'yellow'
          }
        />

        <Callout style={styles.CalloutStyle}>
          <Text>{vehicle.name}</Text>
          <TouchableButton
            label='Idle'
            ChangeStatus={ChangeStatus}
            vehicle={vehicle.id}
            status={'idle'}
            customStyle={styles.buttonIdle}
          />
          <TouchableButton
            label='En Route'
            ChangeStatus={ChangeStatus}
            vehicle={vehicle.id}
            status={'enRoute'}
            customStyle={styles.buttonEnRoute}
          />
          <TouchableButton
            label='Broken Down'
            ChangeStatus={ChangeStatus}
            vehicle={vehicle.id}
            status={'brokenDown'}
            customStyle={styles.buttonBrokenDown}
          />
        </Callout>
      </Marker>
      <Circle
        center={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
        radius={400}
        fillColor={
          vehicle.status === 'idle'
            ? 'rgba(53,125,34,0.2)'
            : vehicle.status === 'brokenDown'
            ? 'rgba(236,51,35,0.2)'
            : 'rgba(255,253,84,0.2)'
        }
        strokeWidth={1}
        strokeColor={
          vehicle.status === 'idle'
            ? 'rgba(53,125,34,0.1)'
            : vehicle.status === 'brokenDown'
            ? 'rgba(236,51,35,0.1)'
            : 'rgba(255,253,84,0.1)'
        }
      />
    </View>
  );
};

export default MarkerComponent;
