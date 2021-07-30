import {StyleSheet} from 'react-native';
import AppStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  screenContainer: {
    ...AppStyles.container,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
  textContainer: {
    borderColor: '#161616',
    borderWidth: 2,
    height: 40,
    margin: 20,
    borderStyle: 'solid',
    borderRadius: 10,
    alignItems:'center',
    padding: 10,
  },
  buttonContainer: {
    marginVertical: 5,
    paddingHorizontal: 120,
    // backgroundColor: '#F54748',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  button: {
    backgroundColor:'#F54748',
    
  },
  cardContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal:10,
    top:30
  },
});

export default styles;
