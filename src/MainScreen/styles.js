import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  map: {
    width: Dimensions.get('window').width,
    height: 0.9 * Dimensions.get('window').height,
  },
  displayList: {
    flexDirection: 'row',
  },
  textDisplay: {
    margin: 5,
  },
});
