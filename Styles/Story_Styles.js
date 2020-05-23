import {StyleSheet, Dimensions} from 'react-native';
import {ceil} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #74f9ff
// Dima Barf  - DimaBlue - IRANYekan
export default StyleSheet.create({
  story: {
    flex: 6,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    elevation: 1,
  },
  single_story: {
    width: 90,
    height: 90,
    borderColor: 'black',
    borderRadius: 100,
    marginRight: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  avatar: {
    width: 85,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#6387ff',
  },
});
