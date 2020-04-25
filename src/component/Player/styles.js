import {StyleSheet} from 'react-native';
import Colors from '../../util/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scoreView:{
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.button,
    justifyContent: 'center',
  },
  score:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  player:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
    padding: 10,
  }
});
export default styles;
