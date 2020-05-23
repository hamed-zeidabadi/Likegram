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
    backgroundColor: '#cbf1f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posts: {
    width: width / 4,
    height: height / 6,
    borderRadius: 50,
    marginVertical: 10,
  },
  header: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottom: {
    flex: 10,
    backgroundColor: '#cbf1f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
