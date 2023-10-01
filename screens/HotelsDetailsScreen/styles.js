import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {flexDirection: 'row', flexWrap: 'wrap', padding: 5},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFEEEC',
  },
  textHeading: {flex: 1, color: 'black', fontWeight: 'bold', fontSize: 20},
});
