import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #74f9ff
// fonts : Dima Barf  - DimaBlue - IRANYekan

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 1,
    width: width,
  },
  bottom: {
    flex: 2,
    width: width,
    backgroundColor: '#fab7b7',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  posts: {
    width: width / 2.2,
    height: height / 4,
    borderRadius: 25,
  },
  icons: {
    color: '#6387ff',
    fontSize: 20,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  box: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
