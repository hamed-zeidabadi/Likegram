import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// background #cbf1f5
// primary #6387ff
// text #2b2e4a
// hover #74f9ff
// Dima Barf  - DimaBlue - IRANYekan
export default StyleSheet.create({
  search: {
    flex: 1,
  },
  search_header: {
    flex: 2,
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  search_bar: {
    flex: 5,
    width: width / 1.1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  search_result: {flex: 25},
  txtinput: {
    textAlign: 'right',
    fontFamily: 'IRANYekan',
    color: 'white',
  },
  Card: {
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    width: width / 1.3,
    height: height / 7.8,
    borderWidth: 2,
    borderRadius: 50,
    elevation: 6,
    marginBottom: 6,
    borderColor: '#6387ff',
    backgroundColor: '#d4f3ef',
  },
  Card_img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 4,
    marginRight: -13,
  },
  Card_txt: {
    color: '#d63447',
    fontSize: 14,
    marginTop: 18,
    marginLeft: 28,
    fontFamily: 'IRANYekan',
    textAlign: 'center',
  },
});
