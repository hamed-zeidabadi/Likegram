import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #74f9ff
// Dima Barf  - DimaBlue - IRANYekan

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: width,
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  post: {
    flex: 30,
    width: width,
  },
  menu: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  loading: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
