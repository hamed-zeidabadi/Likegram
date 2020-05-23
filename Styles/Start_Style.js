import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #ff2e63
// Dima Barf  - DimaBlue - IRANYekan

export default StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    position: 'relative',
    top: -height / 5,
    width: 100,
    height: 100,
  },
  desc: {
    fontFamily: 'Dima Barf',
    color: '#2b2e4a',
    fontSize: 40,
    textAlign: 'center',
    position: 'relative',
    top: -height / 7,
  },
  desc2: {
    fontFamily: 'IRANYekan',
    color: '#ff2e63',
    fontSize: 12,
    width: width / 1.3,
    textAlign: 'center',
    position: 'relative',
    top: -height / 7,
  },

  btn: {
    marginTop: -height / 15,
    textAlign: 'center',
    backgroundColor: '#6387ff',
    color: 'red',
    width: 250,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 8,
  },
  btn2: {
    textAlign: 'center',
    backgroundColor: '#6387ff',
    color: 'red',
    width: 250,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    elevation: 8,
  },
  btn_text: {
    fontFamily: 'IRANYekan',
    color: 'white',
    fontSize: 20,
    marginRight: -60,
  },
  btn_icon: {
    fontSize: 40,
    width: 40,
    color: 'white',
    backgroundColor: '#ff2e63',
    borderRadius: 50,
    padding: 0,
    position: 'relative',
    left: -width / 5,
  },
  btn_icon2: {
    fontSize: 40,
    width: 40,
    color: 'white',
    backgroundColor: '#ff2e63',
    borderRadius: 50,
    padding: 0,
    position: 'relative',
    left: -width / 7.6,
  },
});
