import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #74f9ff
// Dima Barf  - DimaBlue - IRANYekan

export default StyleSheet.create({
  posts: {
    flex: 1,
    width: width / 2,
    backgroundColor: 'white',
    marginBottom:4
  },
  top: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2,
  },
  middle: {
    flex: 6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  like: {
    fontSize: 35,
  },
  post: {
    borderRadius: 30,
    height: height / 3,
    width: width / 2.4,
  },
});
