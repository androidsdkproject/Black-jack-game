import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
  },
  imageBg: {
    flex: 1,
    flexDirection: 'row',
  },
  hitView:{
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  standView:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  playerView:{
    height: '100%',
    flexDirection: 'column',
  },
  playerSubView:{
    flex: 1,
  },
  midContainer:{
    flex: 1
  }
});

export default styles;
