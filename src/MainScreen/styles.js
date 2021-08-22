import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 15,
    width: '100%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 0.9 * Dimensions.get('window').height,
  },
});
