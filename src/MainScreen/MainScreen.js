import React, { useState, useEffect } from 'react';
import MapView, { Circle } from 'react-native-maps';
import { View, ActivityIndicator } from 'react-native';
import MarkerComponent from '../components/MarkerComponent/MarkerComponent';
import { url } from '../API/API';
import Title from '../components/Title/Title';
import styles from './styles';
import axios from 'axios';

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const ChangeStatus = async (id, status) => {
    const res = await axios.put(`${url}/${id}`);
    setIsLoading(true);
    console.log(res);
    if (res) {
      const res = await axios.get(url);
      setVehicles(res.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const getVehicles = async () => {
      setIsLoading(true);
      const res = await axios.get(url);
      setVehicles(res.data);
      setIsLoading(false);
    };
    getVehicles();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <View>
          <Title />
          <View>
            <MapView
              mapType={'mutedStandard'}
              userInterfaceStyle={'dark'}
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4325,
                latitudeDelta: 0.01,
                longitudeDelta: 0.04,
              }}>
              {vehicles.map((vehicle) => (
                <MarkerComponent vehicle={vehicle} ChangeStatus={ChangeStatus} key={vehicle.id} />
              ))}
            </MapView>
          </View>
        </View>
      )}
    </View>
  );
};

export default MainScreen;
