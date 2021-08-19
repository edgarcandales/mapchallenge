import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, ActivityIndicator } from 'react-native';
import MarkerComponent from '../components/MarkerComponent/MarkerComponent';
import DisplayText from '../components/DisplayText/DisplayText';
import { url } from '../API/API';
import Title from '../components/Title/Title';
import styles from './styles';
import axios from 'axios';

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const ChanteStatus = (id, status) => {
    const ListOfVehicles = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        return { ...vehicle, status: status };
      }
      return vehicle;
    });
    setVehicles(ListOfVehicles);
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
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4325,
                latitudeDelta: 0.01,
                longitudeDelta: 0.04,
              }}>
              {vehicles.map((vehicle) => (
                <MarkerComponent vehicle={vehicle} ChanteStatus={ChanteStatus} key={vehicle.id} />
              ))}
            </MapView>
            {vehicles.map((vehicle, index) => (
              <View style={styles.displayList} key={vehicle.id}>
                <DisplayText vehicle={vehicle} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default MainScreen;
